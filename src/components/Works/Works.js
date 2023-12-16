import { SchoolProjects, SmallWorks } from '../../Utils/Utils'
import { Button } from '../Button/Button'
import './Works.css'

export const Works = () => {
  const section$$ = document.createElement('section')
  section$$.className = 'worksContainer'
  const worksHeader$$ = document.createElement('div')
  worksHeader$$.className = 'worksHeader'
  const span$$ = document.createElement('span')
  span$$.textContent = '#'
  const h3$$ = document.createElement('h3')
  h3$$.textContent = 'works'
  worksHeader$$.appendChild(span$$)
  worksHeader$$.appendChild(h3$$)
  const worksBoxContainer$$ = document.createElement('div')
  worksBoxContainer$$.className = 'boxContainer'

  SmallWorks.forEach((element) => {
    const divBox$$ = document.createElement('div')
    divBox$$.className = 'workContainer'
    const img$$ = document.createElement('img')
    img$$.className = 'landingImage'
    img$$.src = element.Image
    const p$$ = document.createElement('p')
    p$$.className = 'sources'
    p$$.textContent = element.Sources
    const elementsDiv = document.createElement('div')
    elementsDiv.className = 'elementsContainer'
    const h3$$ = document.createElement('h3')
    h3$$.className = 'title'
    h3$$.textContent = element.Title
    const pDescription$$ = document.createElement('p')
    pDescription$$.textContent = element.Description
    const button$$ = Button({ texto: `${element.Button} →` })
    divBox$$.appendChild(img$$)
    divBox$$.appendChild(p$$)
    elementsDiv.appendChild(h3$$)
    elementsDiv.appendChild(pDescription$$)
    elementsDiv.appendChild(button$$)
    divBox$$.appendChild(elementsDiv)
    worksBoxContainer$$.appendChild(divBox$$)
  })

  const projectsHeader$$ = document.createElement('div')
  projectsHeader$$.className = 'worksHeader'
  const spanProjects = document.createElement('span')
  spanProjects.textContent = '#'
  const h3 = document.createElement('h3')
  h3.textContent = 'projects'
  projectsHeader$$.appendChild(spanProjects)
  projectsHeader$$.appendChild(h3)
  section$$.appendChild(projectsHeader$$)

  const projectsBoxContainer$$ = document.createElement('div')
  projectsBoxContainer$$.className = 'boxContainer'
  SchoolProjects.forEach((element) => {
    const divBox$$ = document.createElement('div')
    divBox$$.className = 'workContainer'
    const span$$ = document.createElement('span')
    span$$.textContent = '#'
    const h4$$ = document.createElement('h4')
    h4$$.textContent = 'Projects'
    const img$$ = document.createElement('img')
    img$$.className = 'landingImage'
    img$$.src = element.Image
    const p$$ = document.createElement('p')
    p$$.className = 'sources'
    p$$.textContent = element.Sources
    const elementsDiv = document.createElement('div')
    elementsDiv.className = 'elementsContainer'
    const h3$$ = document.createElement('h3')
    h3$$.className = 'title'
    h3$$.textContent = element.Title
    const pDescription$$ = document.createElement('p')
    pDescription$$.textContent = element.Description
    const button$$ = Button({
      texto: `${element.Button} →`
    })
    divBox$$.appendChild(img$$)
    divBox$$.appendChild(p$$)
    elementsDiv.appendChild(h3$$)
    elementsDiv.appendChild(pDescription$$)
    elementsDiv.appendChild(button$$)
    divBox$$.appendChild(elementsDiv)
    projectsBoxContainer$$.appendChild(divBox$$)
  })
  section$$.appendChild(worksHeader$$)
  section$$.appendChild(worksBoxContainer$$)
  section$$.appendChild(projectsHeader$$)
  section$$.appendChild(projectsBoxContainer$$)
  return section$$
}
