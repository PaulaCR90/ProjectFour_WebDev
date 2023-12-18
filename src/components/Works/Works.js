import { SchoolProjects, SmallWorks } from '../../Utils/Utils'
import { Button } from '../Button/Button'
import './Works.css'

export const Works = () => {
  // crear el contenedor de todos los trabajos
  const section$$ = document.createElement('section')
  section$$.className = 'worksContainer'
  // crear el header de los trabajos
  const worksHeader$$ = document.createElement('div')
  worksHeader$$.className = 'worksHeader'
  const span$$ = document.createElement('span')
  span$$.textContent = '#'
  const h3$$ = document.createElement('h3')
  h3$$.textContent = 'works'
  worksHeader$$.appendChild(span$$)
  worksHeader$$.appendChild(h3$$)
  // crear el contenedor de las tarjertas de trabajos
  const worksBoxContainer$$ = document.createElement('div')
  worksBoxContainer$$.className = 'boxContainer'

  // crear las tarjetas con sus dos caras
  SmallWorks.forEach((element) => {
    // crear el contenedor de cada tarjeta
    const Card = document.createElement('div')
    Card.className = 'Card'
    // crear la cara delantera
    const logoBox$$ = document.createElement('div')
    logoBox$$.className = 'front'
    const logo = document.createElement('img')
    logo.className = 'landingImage'
    logo.src = element.Image
    logoBox$$.appendChild(logo)
    // crear la cara trasera
    const divBox$$ = document.createElement('div')
    divBox$$.classList = 'back'
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
    button$$.addEventListener('click', () => {
      window.open(element.Site, '_blank')
    })

    elementsDiv.appendChild(h3$$)
    elementsDiv.appendChild(p$$)
    elementsDiv.appendChild(pDescription$$)
    elementsDiv.appendChild(button$$)
    divBox$$.appendChild(elementsDiv)
    Card.appendChild(logoBox$$)
    Card.appendChild(divBox$$)
    worksBoxContainer$$.appendChild(Card)
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
    // crear el contenedor de cada tarjeta
    const Card = document.createElement('div')
    Card.className = 'Card'
    // crear la cara delantera
    const logoBox$$ = document.createElement('div')
    logoBox$$.className = 'front'
    const logo = document.createElement('img')
    logo.className = 'landingImage'
    logo.src = element.Image
    logoBox$$.appendChild(logo)
    // crear la cara trasera
    const divBox$$ = document.createElement('div')
    divBox$$.className = 'back'
    // crear header de proyectos
    const span$$ = document.createElement('span')
    span$$.textContent = '#'
    const h4$$ = document.createElement('h4')
    h4$$.textContent = 'Projects'
    // crear parte trasera
    const elementsDiv = document.createElement('div')
    elementsDiv.className = 'elementsContainer'
    const h3$$ = document.createElement('h3')
    h3$$.className = 'title'
    h3$$.textContent = element.Title
    const p$$ = document.createElement('p')
    p$$.className = 'sources'
    p$$.textContent = element.Sources
    const pDescription$$ = document.createElement('p')
    pDescription$$.textContent = element.Description
    const button$$ = Button({ texto: `${element.Button} →` })
    button$$.addEventListener('click', () => {
      window.open(element.Site, '_blank')
    })
    elementsDiv.appendChild(h3$$)
    elementsDiv.appendChild(p$$)
    elementsDiv.appendChild(pDescription$$)
    elementsDiv.appendChild(button$$)
    divBox$$.appendChild(elementsDiv)
    Card.appendChild(logoBox$$)
    Card.appendChild(divBox$$)
    projectsBoxContainer$$.appendChild(Card)
  })
  section$$.appendChild(worksHeader$$)
  section$$.appendChild(worksBoxContainer$$)
  section$$.appendChild(projectsHeader$$)
  section$$.appendChild(projectsBoxContainer$$)
  return section$$
}
