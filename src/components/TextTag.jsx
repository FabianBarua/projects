export const TextTag = ({ children }) => {
  return (
    <p className=' cursor-pointer rounded-[5.69px] font-medium sm:text-[11px] text-lg leading-4 sm:leading-[13.8px] transition-all ease-in bg-neutral-800 hover:bg-neutral-500 text-neutral-500 hover:text-neutral-800 px-[4.8px] py-2 sm:py-[4.07px] '>
      {children}
    </p>
  )
}
