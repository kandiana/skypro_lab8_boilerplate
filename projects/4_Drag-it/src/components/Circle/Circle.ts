import './Circle.styl';

export class Circle {
  container: HTMLElement;
  element: HTMLDivElement;

  constructor(container: HTMLElement) {
    this.container = container;

    this.render();
  }

  render() {
    this.element = document.createElement('div');
    this.element.classList.add('circle');

    this.container.appendChild(this.element);
  }
}
