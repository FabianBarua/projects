import { IconArrow, IconGithub, IconLink } from '@components/Icons'
import { ButtonIconOnly } from '@components/ButtonIconOnly'
import { TextTag } from '@components/TextTag'
import { LevelButton } from './LevelButton'

export const ProjectCard = ({ title, description, level, webUrl, gitUrl, status, image }) => {
  return (
    <div
      className=' sm:w-[295px]  h-full  w-full px-3 pt-3 pb-[15px] flex flex-col relative sm:gap-[10px] bg-stone-900 hover:bg-stone-900/85 border border-transparent hover:border-stone-700  transition-all ease-in rounded-[10px]'
    >

      <a
        href={webUrl}
        target='_blank'
        className=' w-full '
        rel='noreferrer'
      >
        <img
          src={image || 'https://cdn.pixabay.com/photo/2017/06/27/07/23/fabric-2446476_960_720.jpg'}
          alt={title}
          className=' sm:h-[90px] w-full object-cover object-top rounded-[10px]  mx-auto transition-all ease-in'
        />
      </a>

      <header className=' flex px-2 relative flex-col gap-[6.93px] cursor-default'>
        <h1 className=' sm:text-[15.33px] text-xl  leading-5 sm:leading-[17.33px] font-bold text-neutral-50 truncate'>{title}</h1>
        <h2 className=' text-neutral-500 sm:text-[12.13px] sm:h-[28px] text-base line-clamp-2 leading-5 sm:leading-[13.13px] sm:max-w-[221px] max-w-[200px]   '>{description}</h2>
      </header>

      <div className='  px-2 relative flex gap-[4.07px] justify-end sm:justify-start '>
        {
          !status?.active && (
            <>
              <TextTag>
                {status?.tag}
              </TextTag>
            </>
          )
        }
        <LevelButton level={level} />

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

        <a href={webUrl || gitUrl} target='_blank' className=' ml-auto sm:w-5 sm:h-5 sm:p-1 w-7 h-7 p-2 rounded-full border transition-all ease-in bg-transparent hover:bg-neutral-500 text-neutral-500 hover:text-neutral-800 border-neutral-500 flex justify-center items-center  ' rel='noreferrer'>
          <IconArrow />
        </a>
      </div>

    </div>
  )
}
