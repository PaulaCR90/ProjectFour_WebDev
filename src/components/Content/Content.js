import { Home } from '../Home/Home'
import { Quote } from '../Quote/Quote'
import './Content.css'

export const Content = () => {
  const article$$ = document.createElement('article')
  article$$.className = 'contentContainer'

  article$$.appendChild(Home())
  article$$.appendChild(Quote())
  return article$$
}
