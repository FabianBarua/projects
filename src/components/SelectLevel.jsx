import { IconDown } from '@components/Icons'
import { SelectItem } from '@components/SelectItem'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useProjectsStore } from '../stores/projectsStore'

const variantsArrow = {
  open: { rotate: -180 },
  closed: { rotate: 0 }
}

export const SelectLevel = () => {
  const [open, setOpen] = useState(false)
  const { levels, filters, setFilters } = useProjectsStore()

  const handleClick = (level) => {
    setOpen(!open)
    if (level.name === filters.level.name) {
      level = { id: null, name: null }
    }

    setFilters({ level: { ...level } })
  }

  return (
    <>

      <div className=' relative sm:w-min w-full '>
        <AnimatePresence>

          {open && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.1 }}
            >
              <div className=' shadow-lg  min-h-8 gap-1 flex flex-col absolute  w-full max-h-32  left-0 bg-stone-900   overflow-auto  p-1 text-stone-500   -top-2 -translate-y-full  outline outline-1 outline-stone-500 rounded-[10px]'>
                {levels?.map((level) => (
                  <SelectItem
                    key={level.id}
                    onClick={() => { handleClick(level) }}
                    selectedLevel={filters.level.name === level.name}
                  >
                    {level.name}
                  </SelectItem>))}
              </div>

            </motion.div>
          )}
        </AnimatePresence>

        <div onClick={() => { setOpen(!open) }} className=' min-w-32  cursor-pointer hover:bg-stone-800/50 rounded-[10px] pl-[18px] pr-2 items-center flex text-[16.72px] sm:max-w-[148px] w-full h-[34px] border border-stone-500 text-stone-500 gap-3 '>
          <p className=' w-full'>{filters.level.name || 'Level'}</p>
          <motion.div
            animate={open ? 'open' : 'closed'}
            variants={variantsArrow}
            transition={{
              duration: 0.2
            }}
          >
            <IconDown />
          </motion.div>
        </div>
      </div>

    </>
  )
}
