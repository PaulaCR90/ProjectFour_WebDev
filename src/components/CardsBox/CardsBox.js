import { Button } from '../Button/Button';
import './CardsBox.css';

export const CardsBox = ({ array }) => {
  const worksBoxContainer$$ = document.createElement('div');
  worksBoxContainer$$.className = 'boxContainer';

  array.forEach((element) => {
    // Card's front
    const Card = document.createElement('div');
    Card.className = 'Card';
    const cardImg = document.createElement('div');
    cardImg.className = 'front';
    const logo = document.createElement('img');
    logo.className = 'landingImage';
    logo.src = element.Image;
    cardImg.appendChild(logo);
    // Card's back
    const divBox$$ = document.createElement('div');
    divBox$$.classList = 'back';
    const p$$ = document.createElement('p');
    p$$.className = 'sources';
    p$$.textContent = element.Sources;
    const elementsDiv = document.createElement('div');
    elementsDiv.className = 'elementsContainer';
    const h3$$ = document.createElement('h3');
    h3$$.className = 'title';
    h3$$.textContent = element.Title;
    const description$$ = document.createElement('p');
    description$$.textContent = element.Description;
    const button$$ = Button({ texto: `${element.Button} →` });
    button$$.addEventListener('click', () => {
      window.open(element.Site, '_blank');
    });

    elementsDiv.appendChild(h3$$);
    elementsDiv.appendChild(p$$);
    elementsDiv.appendChild(description$$);
    elementsDiv.appendChild(button$$);
    divBox$$.appendChild(elementsDiv);
    Card.appendChild(cardImg);
    Card.appendChild(divBox$$);
    worksBoxContainer$$.appendChild(Card);
  });
  return worksBoxContainer$$;
};
