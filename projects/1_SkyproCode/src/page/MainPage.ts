import { Title } from '~/components/Title/Title';
import { CodeEditor } from '~/components/CodeEditor/CodeEditor';

import './MainPage.styl';

export class MainPage {
  container: HTMLElement;
  element: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;

    this.render();
  }

  render() {
    this.container.textContent = '';

    const element = document.createElement('div');
    element.classList.add('main-page');

    this.container.appendChild(element);

    const title = new Title(element, 'Редактор кода');
    const redactor = new CodeEditor(element);

    this.element = element;
  }
}
