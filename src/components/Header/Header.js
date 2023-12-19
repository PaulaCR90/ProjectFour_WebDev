import { navBar } from '../../Utils/Utils';
import { Link } from '../Link/Link';
import { Logo } from '../Logo/Logo';
import './Header.css';

export const Header = () => {
  const Header$$ = document.createElement('header');
  const Logo$$ = Logo();
  const NavBar$$ = document.createElement('nav');
  const ul$$ = document.createElement('ul');
  ul$$.className = 'linkList';
  navBar.forEach((element) => {
    const Link$$ = Link({
      texto: element.name,
      href: element.href,
      component: element.component,
      className: element.className
    });
    ul$$.appendChild(Link$$);
  });
  NavBar$$.appendChild(ul$$);
  Header$$.appendChild(Logo$$);
  Header$$.appendChild(NavBar$$);
  return Header$$;
};
