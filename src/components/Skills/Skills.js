import './Skills.css';
import { Heading } from '../Heading/Heading.js';
import { SkillsBox } from '../SkillsBox/SkillsBox.js';

export const Skills = () => {
  const divSection = document.createElement('div');
  divSection.className = 'skillsSection';
  divSection.appendChild(
    Heading({ spanContent: '#', textContent: 'skills', className: 'divHeader' })
  );

  divSection.appendChild(SkillsBox());
  return divSection;
};
