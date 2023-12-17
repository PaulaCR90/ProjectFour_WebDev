import { About } from './src/components/About/About'
import { Footer } from './src/components/Footer/Footer'
import { Header } from './src/components/Header/Header'
import { Home } from './src/components/Home/Home'
import { Quote } from './src/components/Quote/Quote'
import { Works } from './src/components/Works/Works'
import './style.css'
const divApp = document.querySelector('#app')
const article$$ = document.createElement('article')
article$$.className = 'contentContainer'
const Header$$ = Header()
const Home$$ = Home()
const Quote$$ = Quote()
const Footer$$ = Footer()
divApp.appendChild(Header$$)
article$$.appendChild(Home$$)
article$$.appendChild(Quote$$)
divApp.appendChild(article$$)
divApp.appendChild(Footer$$)

//* Dar clases a los li para poder acceder a ellos y añadirles un eventListener
const liList$$ = document.querySelectorAll('ul.linkList li')
const classNames = ['liHome', 'liAbout', 'liWorks', 'liContacts']
liList$$.forEach((item, index) => {
  if (index < classNames.length) {
    item.classList.add(classNames[index])
  }
})

const createHome = (event) => {
  event.preventDefault()
  article$$.innerHTML = ''
  article$$.appendChild(Home$$)
  article$$.appendChild(Quote$$)
}

const createAbout = (event) => {
  event.preventDefault()
  article$$.innerHTML = ''
  const About$$ = About()
  article$$.appendChild(About$$)
}

const createWorks = (event) => {
  event.preventDefault()
  article$$.innerHTML = ''
  const Works$$ = Works()
  article$$.appendChild(Works$$)
}

const home = document.querySelector('.liHome')
home.addEventListener('click', createHome)
const about = document.querySelector('.liAbout')
about.addEventListener('click', createAbout)
const works = document.querySelector('.liWorks')
works.addEventListener('click', createWorks)
// const contacts = document.querySelector('.liContacts')
// contacts.addEventListener('click', () => {
//   window.location.href = 'mailto:p.a.castrorodriguez@gmail.com'
// })
