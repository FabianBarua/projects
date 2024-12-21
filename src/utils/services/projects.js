import * as levels from '../mocks/levels.json'
import * as projects from '../mocks/projects.json'

export const getLevels = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(levels.allLevels)
    }, 300)
  })
}

export const getProjects = () => {
  return new Promise((resolve, reject) => {
    const sortedProjects = projects.allProjects.sort((a, b) => {
      return b.level.id - a.level.id
    })

    // the objects that have image first order
    const withImage = sortedProjects.sort((a, b) => {
      return a.image ? -1 : 1
    }
    )

    setTimeout(() => {
      resolve(withImage)
    }, 300)
  })
}
