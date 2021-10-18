import './Select.styl';

export class Select {
  container: HTMLElement;
  element: HTMLSelectElement;

  constructor(container: HTMLElement, options: string[], selected: string) {
    this.container = container;

    this.render();

    options.forEach((optionName) => {
      const optionElement = document.createElement('option');
      optionElement.textContent = optionName;
      this.element.appendChild(optionElement);

      if (optionName === selected) {
        optionElement.selected = true;
      }
    });
  }

  render() {
    const element = document.createElement('select');
    element.classList.add('select');

    this.container.appendChild(element);
    this.element = element;
  }
}
