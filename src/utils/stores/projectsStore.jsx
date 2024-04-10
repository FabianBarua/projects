import { create } from 'zustand'
import { getLevels, getProjects } from '../services/projects'

export const useProjectsStore = create((set) => ({

  projects: [],

  levels: [],

  filters: {
    search: null,
    level: { id: null, name: null }
  },

  setFilters (newFilter) {
    set((state) => ({
      filters: {
        ...state.filters,
        ...newFilter
      }
    }))
  }

}))

getProjects().then((data) => {
  useProjectsStore.setState({ projects: data })
})

getLevels().then((data) => {
  useProjectsStore.setState({ levels: data })
})
