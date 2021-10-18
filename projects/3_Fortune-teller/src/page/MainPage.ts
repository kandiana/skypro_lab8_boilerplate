import { Container } from '~/components/Container/Container';
import { Card } from '~/components/Card/Card';
import { Button } from '~/components/Button/Button';

import './MainPage.styl';

const CARDS = [];
const CARD_SUITS = ['club', 'diamond', 'heart', 'spade'];
CARD_SUITS.forEach((suit) => {
  for (let i = 1; i <= 10; i++) {
    CARDS.push(`${suit}_${i}`);
  }
  CARDS.push(`${suit}_jack`);
  CARDS.push(`${suit}_queen`);
  CARDS.push(`${suit}_king`);
});

export class MainPage {
  container: HTMLElement;
  element: HTMLDivElement;

  constructor(container: HTMLElement) {
    this.container = container;

    this.render();
  }

  render() {
    this.element = document.createElement('div');
    this.element.classList.add('main-page');

    this.container.appendChild(this.element);

    const cardBlock = new Container(this.element);
    cardBlock.element.classList.add('main-page__card-container');

    let card = new Card(cardBlock.element, 'back', 'red');
    const button = new Button(this.element, 'Гадать');

    button.element.addEventListener('click', (event) => {
      const target = event.target as HTMLButtonElement;
      switch (target.textContent) {
        case 'Гадать':
          target.textContent = 'Назад';
          card = new Card(cardBlock.element, CARDS[Math.round(Math.random() * CARDS.length)]);
          break;

        default:
          target.textContent = 'Гадать';
          card = new Card(cardBlock.element, 'back', 'red');
          break;
      }
    });
  }
}
