import './Link.css'

export const Link = ({
  texto = 'Add a text here',
  linkClass = 'main-link',
  href = '#',
  fontColor = '#f4f7f5ff'
}) => {
  const li$$ = document.createElement('li')
  const a$$ = document.createElement('a')
  const span$$ = document.createElement('span')
  span$$.textContent = '#'
  a$$.setAttribute('href', href)
  a$$.setAttribute('class', linkClass)
  a$$.style.color = fontColor
  a$$.innerHTML = `${texto}`

  li$$.appendChild(span$$)
  li$$.appendChild(a$$)
  return li$$
}
