import { useProjectsStore } from '../utils/stores/projectsStore'

export const useProjects = () => {
  // zustand store
  const { projects, filters } = useProjectsStore()

  const projectsFiltered = projects.filter((project) => {
    let pass = true
    // by level
    if (filters.level.id !== null && pass) {
      pass = project.level.id === filters.level.id
    }
    // by name
    if (filters.search && pass) {
      pass = project.name.toLowerCase().includes(filters.search.toLowerCase())
    }

    return pass
  })

  return { projects: projectsFiltered }
}
