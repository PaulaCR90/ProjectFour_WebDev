import './Logo.css'

export const Logo = () => {
  const logoContainer$$ = document.createElement('div')
  logoContainer$$.className = 'logoContainer'
  const logo$$ = document.createElement('img')
  logo$$.className = 'logoImage'
  logo$$.src = './assets/logoBlanco.png'
  const logoName$$ = document.createElement('p')
  logoName$$.className = 'Name'
  logoName$$.textContent = 'PaulaCR'
  logoContainer$$.appendChild(logo$$)
  logoContainer$$.appendChild(logoName$$)
  return logoContainer$$
}
