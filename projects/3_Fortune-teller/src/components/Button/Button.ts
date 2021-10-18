import './Button.styl';

export class Button {
  container: HTMLElement;
  element: HTMLButtonElement;

  constructor(container: HTMLElement, content: string) {
    this.container = container;

    this.render();

    this.element.textContent = content;
  }

  render() {
    this.element = document.createElement('button');
    this.element.classList.add('button');

    this.container.appendChild(this.element);
  }
}
