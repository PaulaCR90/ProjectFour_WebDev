import './Home.css'
import { Button } from '../Button/Button'

export const Home = () => {
  const section$$ = document.createElement('section')
  section$$.className = 'homeContainer'
  const divContainer$$ = document.createElement('div')
  divContainer$$.className = 'textContainer'
  const h3$$ = document.createElement('h3')
  h3$$.className = 'Title'
  const spanOne$$ = document.createElement('span')
  spanOne$$.textContent = 'full-stack developer'
  spanOne$$.className = 'titleSpan'
  h3$$.textContent = `PaulaCR is a `

  const p$$ = document.createElement('p')
  p$$.className = 'description'
  p$$.textContent =
    'She really likes to get out from her comfort zone and learn as many programming languages as possible'
  const button$$ = Button({ texto: 'Contact me!' })
  //  button$$.addEventListener('click', () => {
  //    window.location.href = `mailto:p.a.castrorodriguez@gmail.com`
  //   window.open(
  //     'https://www.linkedin.com/in/paula-alejandra-castro-rodr%C3%ADguez-a671b3208/',
  //     '_blank'
  //   )
  // })

  let currentText = 'Contact me!'
  button$$.addEventListener('click', () => {
    currentText = currentText === 'Contact me!' ? '617 98 36 94' : 'Contact me!'
    button$$.textContent = currentText
  })

  const homeImage$$ = document.createElement('img')
  homeImage$$.src = './assets/Paula.png'
  homeImage$$.alt = 'Main image'
  homeImage$$.className = 'mainImage'

  //* Cambio de imagen de la home al hacer click
  let currentImage = './assets/Paula.png'

  homeImage$$.addEventListener('click', () => {
    currentImage =
      currentImage === './assets/Paula.png'
        ? './assets/image.png'
        : './assets/Paula.png'
    homeImage$$.src = currentImage
  })

  h3$$.appendChild(spanOne$$)
  divContainer$$.appendChild(h3$$)
  divContainer$$.appendChild(p$$)
  divContainer$$.appendChild(button$$)
  section$$.appendChild(divContainer$$)
  section$$.appendChild(homeImage$$)
  return section$$
}
