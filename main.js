import { Header } from './src/components/Header/Header'
import { Home } from './src/components/Home/Home'
import { Quote } from './src/components/Quote/Quote'
import './style.css'
const divApp = document.querySelector('#app')

const Header$$ = Header()
const Home$$ = Home()
const Quote$$ = Quote()
divApp.appendChild(Header$$)
divApp.appendChild(Home$$)
divApp.appendChild(Quote$$)
