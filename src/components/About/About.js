import './About.css';
import { Skills } from '../Skills/Skills.js';
import { AboutInfo } from '../../Utils/Utils.js';
import { Heading } from '../Heading/Heading.js';

export const About = () => {
  const section$$ = document.createElement('section');
  section$$.className = 'aboutContainer';
  const divContent$$ = document.createElement('div');
  const divDivider$$ = document.createElement('div');
  divContent$$.className = 'aboutContent';
  divDivider$$.className = 'pContent';
  const img$$ = document.createElement('img');
  img$$.className = 'PaulaCR';
  img$$.src = './assets/PaulaCR2.png';
  img$$.alt = 'PaulaCR';
  AboutInfo.forEach((element) => {
    const p$$ = document.createElement('p');
    p$$.textContent = element;
    divDivider$$.appendChild(p$$);
  });
  divContent$$.appendChild(divDivider$$);
  divContent$$.appendChild(img$$);
  section$$.appendChild(
    Heading({
      spanContent: '/',
      textContent: 'about-me',
      className: 'divHeader'
    })
  );
  section$$.appendChild(divContent$$);
  section$$.appendChild(Skills());

  return section$$;
};

export const initAbout = (event) => {
  event.preventDefault();
  const article$$ = document.querySelector('.contentContainer');
  article$$.innerHTML = '';
  article$$.appendChild(About());
};
