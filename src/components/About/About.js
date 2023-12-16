import './About.css'
import { Skills } from '../Skills/Skills.js'
import { AboutInfo } from '../../Utils/Utils.js'

export const About = () => {
  const section$$ = document.createElement('section')
  section$$.className = 'aboutContainer'
  const Skills$$ = Skills()
  const divHeader$$ = document.createElement('div')
  divHeader$$.className = 'divHeader'
  const span$$ = document.createElement('span')
  span$$.textContent = '/'
  span$$.className = 'titleSpan'
  const title$$ = document.createElement('h3')
  title$$.textContent = 'about-me'
  divHeader$$.appendChild(span$$)
  divHeader$$.appendChild(title$$)
  //title history condition rtc condition2
  const divContent$$ = document.createElement('div')
  const divDivider$$ = document.createElement('div')
  divContent$$.className = 'aboutContent'
  divDivider$$.className = 'pContent'
  const img$$ = document.createElement('img')
  img$$.className = 'PaulaCR'
  img$$.src = '../../../public/assets/PaulaCR2.png'
  img$$.alt = 'PaulaCR'
  AboutInfo.forEach((element) => {
    const p$$ = document.createElement('p')
    p$$.textContent = element
    divDivider$$.appendChild(p$$)
  })
  divContent$$.appendChild(divDivider$$)
  divContent$$.appendChild(img$$)
  section$$.appendChild(divHeader$$)
  section$$.appendChild(divContent$$)
  section$$.appendChild(Skills$$)

  return section$$
}
