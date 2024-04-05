export const ButtonIconOnly = ({ children, url }) => {
  return (
    <a href={url} target='_blank' className='rounded-[5.69px] bg-neutral-800 sm:px-[4.8px] sm:py-[4.07px]  p-[6px] sm:w-auto w-[32px] flex justify-center items-center hover:bg-neutral-500 text-neutral-500 hover:text-neutral-800 transition-all ease-in ' rel='noreferrer'>
      {children}
    </a>
  )
}
