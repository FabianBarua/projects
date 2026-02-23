import { IconCheck } from './Icons'

export const SelectItem = ({ children, selectedLevel, ...props }) => {
  return (
    <div {...props} className={` flex justify-between items-center w-full cursor-pointer ${selectedLevel && 'bg-neutral-800 '}  hover:bg-neutral-800 px-2 rounded-[7px] `}>
      {children}
      {selectedLevel && <IconCheck />}
    </div>
  )
}
