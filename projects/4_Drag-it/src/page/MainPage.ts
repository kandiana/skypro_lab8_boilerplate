import Draggable from 'draggable/src/draggable';

import { Circle } from '~/components/Circle/Circle';
import { Text } from '~/components/Text/Text';

import './MainPage.styl';

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

    const circle = new Circle(this.element);
    const text = new Text(circle.element, '0');
    let startX = 0;
    let startY = 0;

    const drag = new Draggable(circle.element, {
      onDragStart: (element, x, y) => {
        startX = x;
        startY = y;
      },
      onDrag: (element, x, y) => {
        text.element.textContent = `${Math.round(
          Math.sqrt((x - startX) ** 2 + (y - startY) ** 2)
        )}px`;
      }
    });
  }
}
