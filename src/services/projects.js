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
    setTimeout(() => {
      resolve(projects.allProjects)
    }, 300)
  })
}
