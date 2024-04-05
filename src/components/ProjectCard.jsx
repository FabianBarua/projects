import { IconArrow, IconGithub, IconLink } from '@components/Icons'
import { ButtonIconOnly } from '@components/ButtonIconOnly'
import { TextTag } from '@components/TextTag'

export const ProjectCard = ({ title, description, level, webUrl, gitUrl, status }) => {
  return (
    <div
      className=' sm:w-[295px] sm:h-[119.63px]  h-auto   w-full px-5 pt-5 pb-[15px] flex flex-col relative sm:gap-[10px] bg-stone-900 hover:bg-stone-900/85 border border-transparent hover:border-stone-700  transition-all ease-in rounded-[10px]'
    >
      <header className=' flex flex-col gap-[6.93px] cursor-default'>
        <h1 className=' sm:text-[15.33px] text-xl  leading-5 sm:leading-[17.33px] font-bold text-neutral-50 truncate'>{title}</h1>
        <h2 className=' text-neutral-500 sm:text-[12.13px] sm:h-[28px] text-base line-clamp-2 leading-5 sm:leading-[13.13px] sm:max-w-[221px] max-w-[200px]   '>{description}</h2>
      </header>

      <div className='  flex gap-[4.07px] justify-end sm:justify-start '>
        {
          !status?.active && (
            <>
              <TextTag>
                {status?.tag}
              </TextTag>
            </>
          )
        }

        <p className=' cursor-pointer rounded-[5.69px] font-medium sm:text-[11px] text-lg leading-4 sm:leading-[13.8px] transition-all ease-in bg-neutral-800 hover:bg-neutral-500 text-neutral-500 hover:text-neutral-800 px-[4.8px] py-2 sm:py-[4.07px]'>{level}</p>

        {
          webUrl && (
            <ButtonIconOnly url={webUrl}>
              <IconLink />
            </ButtonIconOnly>
          )
        }

        {
          gitUrl && (
            <ButtonIconOnly url={gitUrl}>
              <IconGithub />
            </ButtonIconOnly>
          )
        }

        <a href={webUrl || gitUrl} target='_blank' className=' sm:w-5 sm:h-5 sm:p-1 w-7 h-7 p-2 rounded-full border transition-all ease-in bg-transparent hover:bg-neutral-500 text-neutral-500 hover:text-neutral-800 border-neutral-500 flex justify-center items-center absolute right-[10px] top-[8.5px]' rel='noreferrer'>
          <IconArrow />
        </a>
      </div>

    </div>
  )
}
