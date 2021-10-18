import { MainPage } from './page/MainPage';

import './index.styl';

const app = document.querySelector<HTMLDivElement>('.app');
const page = new MainPage(app);
