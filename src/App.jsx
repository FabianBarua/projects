import { ProjectCard } from '@components/ProjectCard'
import { ShadowBack } from '@components/ShadowBack'
import { Footer } from './components/Footer'
import { useProjects } from './hooks/useProjects'
import { MouseFollower } from './components/MouseFollower'
import { Credits } from './components/Credits'

function App () {
  const { projects } = useProjects()

  return (
    <>
      <MouseFollower />
      <Credits />
      <main className=' grid pb-64 lg:pb-44 px-3 gap-4  lg:px-0 grid-cols-1 lg:grid-cols-4 overflow-hidden w-full lg:w-max lg:gap-[10px] place-items-center mx-auto  '>
        {
          projects?.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.name}
              description={project.description}
              level={project.level}
              webUrl={project.webUrl}
              gitUrl={project.gitUrl}
              status={project.status}
              image={project.image}
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
