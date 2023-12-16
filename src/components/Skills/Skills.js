import './Skills.css'
import { skills } from '../../Utils/Utils'

export const Skills = () => {
  const divHeader$$ = document.createElement('div')
  divHeader$$.className = 'skillsHeader'
  const span$$ = document.createElement('span')
  span$$.textContent = '#'
  span$$.className = 'titleSpan'
  const title$$ = document.createElement('h3')
  title$$.textContent = 'skills'
  divHeader$$.appendChild(span$$)
  divHeader$$.appendChild(title$$)
  const divSection = document.createElement('div')
  divSection.className = 'skillsSection'
  divSection.appendChild(divHeader$$)
  const divBoxContainer$$ = document.createElement('div')
  divBoxContainer$$.className = 'divBoxContainer'
  skills.forEach((element) => {
    const box$$ = document.createElement('div')
    box$$.className = 'skillBox'
    const h4$$ = document.createElement('h4')
    h4$$.textContent = element.category
    const p$$ = document.createElement('p')
    p$$.textContent = element.items
    box$$.appendChild(h4$$)
    box$$.appendChild(p$$)
    divBoxContainer$$.appendChild(box$$)
  })
  divSection.appendChild(divBoxContainer$$)
  return divSection
}
