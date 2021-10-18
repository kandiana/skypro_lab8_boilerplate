import * as monaco from 'monaco-editor';
import { saveAs } from 'file-saver';

import { Select } from '~/components/LanguageSelect/Select';
import { Container } from '../Container/Container';
import { Button } from '../Button/Button';

import './CodeEditor.styl';

export class CodeEditor {
  container: HTMLElement;
  element: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;

    this.render();
  }

  render() {
    // render element
    const element = document.createElement('section');
    element.classList.add('code-editor');

    this.container.appendChild(element);
    this.element = element;

    // add language select
    const languages = monaco.languages.getLanguages();
    const selectLanguage = new Select(
      element,
      languages.map((el) => el.id),
      'javascript'
    );

    // add code editor
    const codeContainer = new Container(element);

    const editor = monaco.editor.create(codeContainer.element, {
      value: '',
      language: 'javascript',
      automaticLayout: true
    });

    // eslint-disable-next-line no-console
    console.log(editor);

    // add download button
    const downloadButton = new Button(element, 'Скачать');

    // listener to change language
    selectLanguage.element.addEventListener('change', (event) => {
      const target = event.target as HTMLSelectElement;
      monaco.editor.setModelLanguage(editor.getModel(), target.value);
    });

    // listener to download file
    downloadButton.element.addEventListener('click', (event) => {
      event.preventDefault();

      const currentLanguage = languages.find((el) => el.id === selectLanguage.element.value);
      const parameters = {
        extension: currentLanguage.extensions ? currentLanguage.extensions[0] : '.txt',
        mimetype: currentLanguage.mimetypes ? currentLanguage.mimetypes[0] : 'text/plain'
      };

      const textFileAsBlob = new Blob([editor.getValue()], {
        type: `${parameters.mimetype};charset=utf-8`
      });
      const fileName = `monaco-editor-code${parameters.extension}`;
      saveAs(textFileAsBlob, fileName);
    });
  }
}
