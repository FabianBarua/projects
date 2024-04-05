import { ProjectCard } from '@components/ProjectCard'
import { ShadowBack } from '@components/ShadowBack'
import { Footer } from './components/Footer'
import { useProjects } from './hooks/useProjects'
import { MouseFollower } from './components/MouseFollower'

function App () {
  const { projects } = useProjects()

  return (
    <>
      <MouseFollower />
      <main className=' grid pb-64 sm:pb-44 px-3 gap-4  sm:px-0 grid-cols-1 sm:grid-cols-3 overflow-hidden w-full sm:w-max sm:gap-[10px] place-items-center mx-auto  '>
        {
          projects?.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.name}
              description={project.description}
              level={project.level.name}
              webUrl={project.webUrl}
              gitUrl={project.gitUrl}
              status={project.status}
            />
          ))
          }
      </main>
      <ShadowBack />
      <Footer />

    </>
  )
}

export default App
