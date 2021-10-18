import './Text.styl';

export class Text {
  container: HTMLElement;
  element: HTMLParagraphElement;

  constructor(container: HTMLElement, content: string) {
    this.container = container;

    this.render();

    this.element.textContent = content;
  }

  render() {
    this.container.textContent = '';

    this.element = document.createElement('p');
    this.element.classList.add('text');

    this.container.appendChild(this.element);
  }
}
