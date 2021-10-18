export class Container {
  container: HTMLElement;
  element: HTMLDivElement;

  constructor(container: HTMLElement) {
    this.container = container;

    this.render();
  }

  render() {
    const element = document.createElement('div');
    element.classList.add('container');

    this.container.appendChild(element);
    this.element = element;
  }
}
