import './Title.styl';

export class Title {
  container: HTMLElement;
  element: HTMLHeadingElement;

  constructor(container: HTMLElement, title: string) {
    this.container = container;

    this.render();

    this.element.textContent = title;
  }

  render() {
    const element = document.createElement('h1');
    element.classList.add('title');

    this.container.appendChild(element);
    this.element = element;
  }
}
