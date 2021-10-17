import './Button.styl';

export class Button {
  container: HTMLElement;
  element: HTMLButtonElement;

  constructor(container: HTMLElement, text: string) {
    this.container = container;

    this.render();

    this.element.textContent = text;
  }

  render() {
    const element = document.createElement('button');
    element.classList.add('button');

    this.container.appendChild(element);
    this.element = element;
  }
}
