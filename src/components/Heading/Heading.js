import './Heading.css';

export const Heading = ({ spanContent, textContent, className }) => {
  const div$$ = document.createElement('div');
  const span$$ = document.createElement('span');
  const h3$$ = document.createElement('h3');

  div$$.setAttribute('class', 'worksHeader');
  div$$.classList.add(className);
  span$$.textContent = spanContent;
  h3$$.textContent = textContent;

  div$$.appendChild(span$$);
  div$$.appendChild(h3$$);
  return div$$;
};
