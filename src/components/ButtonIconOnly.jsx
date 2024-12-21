export const ButtonIconOnly = ({ children, url }) => {
  return (
    <a href={url} target='_blank' className='rounded-[5.69px] bg-neutral-800 lg:px-[4.8px] lg:py-[4.07px]  p-[6px] lg:w-auto w-[32px] flex justify-center items-center hover:bg-neutral-500 text-neutral-500 hover:text-neutral-800 transition-all ease-in ' rel='noreferrer'>
      {children}
    </a>
  )
}
