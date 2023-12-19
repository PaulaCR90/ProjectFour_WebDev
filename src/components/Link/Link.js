import './Link.css'

export const Link = ({
  texto = 'Add a text here',
  className,
  component,
  href = '#'
}) => {
  const li$$ = document.createElement('li')
  const a$$ = document.createElement('a')
  const span$$ = document.createElement('span')
  span$$.textContent = '#'
  a$$.setAttribute('href', href)
  a$$.setAttribute('class', 'main-link')
  a$$.classList.add(className)

  a$$.addEventListener('click', component)

  a$$.style.color = '#f4f7f5ff'
  a$$.innerHTML = `${texto}`

  li$$.appendChild(span$$)
  li$$.appendChild(a$$)
  return li$$
}
