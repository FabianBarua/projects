import { useProjectsStore } from '../utils/stores/projectsStore'

export const LevelButton = ({ level }) => {
  const { setFilters, filters } = useProjectsStore()

  const handleClick = ({ level }) => {
    if (level.id === filters.level.id) {
      level = { id: null, name: null }
    }
    setFilters({ level: { ...level } })
  }

  const isSelected = filters.level.id === level.id

  return (
    <button
      onClick={() => handleClick({ level })}
      className={` 
      cursor-pointer
      rounded-[5.69px]
      font-medium
      sm:text-[11px]
      text-base
      leading-4
      sm:leading-[13.8px]
      transition-all ease-in
      bg-neutral-800

      text-neutral-500

      px-[4.8px]
      py-2
      sm:py-[4.07px]
      relative
      ${isSelected ? ' pr-3 mr-2' : '      hover:bg-neutral-600       hover:text-neutral-800'}
      `}
    >
      {level.name}

      {isSelected && (
        <div className=' group  transition-all absolute top-1/2 -translate-y-1/2  -right-2 w-4 h-4  bg-stone-900 border border-stone-500 text-stone-500 hover:bg-stone-400 rounded-full flex justify-center items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-3 h-3  group-hover:text-stone-900'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M6 18 18 6M6 6l12 12' />
          </svg>

        </div>
      )}
    </button>
  )
}
