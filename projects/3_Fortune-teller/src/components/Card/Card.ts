import cards from '~/assets/image/cards.svg';
import htmlToElement from '~/lib/htmlToElement';

import './Card.styl';

export class Card {
  container: HTMLElement;
  element: HTMLElement;
  template: string;

  constructor(container: HTMLElement, id: string, color?: string) {
    this.container = container;
    this.template = `<svg viewBox="0 0 169.075 244.64"><use class="card" href="${cards}#${id}" x="0" y="0"></use></svg>`;
    this.render();
    this.element.style.fill = color;
  }

  render() {
    this.container.textContent = '';

    this.element = htmlToElement(this.template);
    this.element.classList.add('card');

    this.container.appendChild(this.element);
  }
}
