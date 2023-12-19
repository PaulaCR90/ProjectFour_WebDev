import { SchoolProjects, SmallWorks } from '../../Utils/Utils';
import { CardsBox } from '../CardsBox/CardsBox';
import { Heading } from '../Heading/Heading';
import './Works.css';

export const Works = () => {
  const section$$ = document.createElement('section');
  section$$.className = 'worksContainer';

  section$$.appendChild(Heading({ spanContent: '#', textContent: 'works' }));
  section$$.appendChild(CardsBox({ array: SmallWorks }));
  section$$.appendChild(Heading({ spanContent: '#', textContent: 'projects' }));
  section$$.appendChild(CardsBox({ array: SchoolProjects }));
  return section$$;
};

export const initWorks = (event) => {
  event.preventDefault();
  const article$$ = document.querySelector('.contentContainer');
  article$$.innerHTML = '';
  article$$.appendChild(Works());
};
