import './SkillsBox.css';
import { skills } from '../../Utils/Utils';

export const SkillsBox = () => {
  const divBoxContainer$$ = document.createElement('div');
  divBoxContainer$$.className = 'divBoxContainer';
  skills.forEach((element) => {
    const box$$ = document.createElement('div');
    box$$.className = 'skillBox';
    const h4$$ = document.createElement('h4');
    h4$$.textContent = element.category;
    const p$$ = document.createElement('p');
    p$$.textContent = element.items;
    box$$.appendChild(h4$$);
    box$$.appendChild(p$$);
    divBoxContainer$$.appendChild(box$$);
  });
  return divBoxContainer$$;
};
