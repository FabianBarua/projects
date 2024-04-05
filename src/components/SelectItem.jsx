import { IconCheck } from './Icons'

export const SelectItem = ({ children, selectedLevel, ...props }) => {
  return (
    <div {...props} className={` flex justify-between items-center w-full cursor-pointer ${selectedLevel && 'bg-stone-800 '}  hover:bg-stone-800 px-2 rounded-[7px] `}>
      {children}
      {selectedLevel && <IconCheck />}
    </div>
  )
}
