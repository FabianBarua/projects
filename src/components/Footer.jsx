import { IconSearch } from '@components/Icons'
import { SelectLevel } from './SelectLevel'
import { useDebouncedCallback } from 'use-debounce'
import { useProjectsStore } from '../utils/stores/projectsStore'

export const Footer = () => {
  const { setFilters } = useProjectsStore()

  const debounced = useDebouncedCallback(
    (value) => {
      if (value === '') {
        value = null
      }
      setFilters({ search: value })
    },
    300
  )

  return (
    <footer className='flex items-center py-8 lg:py-0 gap-3 lg:flex-row flex-col-reverse px-[25px] justify-between max-w-2xl lg:w-full w-[96%] lg:h-20 p-3 bg-neutral-900 rounded-xl lg:rounded-3xl fixed bottom-[50px] left-1/2 -translate-x-1/2 shadow-[0_4px_23px_15px_rgb(0_0_0_/_0.25);] '>
      <div className=' relative w-full'>
        <IconSearch className=' text-neutral-500 absolute top-1/2 left-[13px] -translate-y-1/2' />
        <input
          onChange={(e) => debounced(e.target.value)}
          className='placeholder-neutral-500 outline-none  text-neutral-300 center text-[16.72px] center  flex w-full lg:w-[223px] h-[34px] rounded-[10px] border border-neutral-500 justify-center items-center  pl-[38px] pr-4 bg-transparent hover:bg-neutral-800/50 hover:border-neutral-400 transition-all ease-in'
          placeholder='Search...'
          type='text'
        />
      </div>
      <SelectLevel />
    </footer>
  )
}
