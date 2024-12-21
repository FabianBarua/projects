export const TextTag = ({ children }) => {
  return (
    <p className=' cursor-pointer rounded-[5.69px] font-medium lg:text-[11px] text-lg leading-4 lg:leading-[13.8px] transition-all ease-in bg-neutral-800 hover:bg-neutral-500 text-neutral-500 hover:text-neutral-800 px-[4.8px] py-2 lg:py-[4.07px] '>
      {children}
    </p>
  )
}
