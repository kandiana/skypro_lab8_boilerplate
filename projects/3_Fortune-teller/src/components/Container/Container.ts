export class Container {
  container: HTMLElement;
  element: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;

    this.render();
  }

  render() {
    this.element = document.createElement('div');

    this.container.appendChild(this.element);
  }
}
