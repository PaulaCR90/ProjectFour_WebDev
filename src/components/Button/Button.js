import './Button.css'

export const Button = ({
  texto = 'Add a text here',
  border = '#59ff00ff',
  buttonClass = 'main-button',
  bgColor = 'transparent',
  fontColor = '#f4f7f5ff'
}) => {
  const button$$ = document.createElement('button')
  button$$.textContent = texto
  button$$.className = buttonClass
  button$$.style.backgroundColor = bgColor
  button$$.style.color = fontColor
  button$$.style.border = `1px solid ${border}`

  return button$$
}
