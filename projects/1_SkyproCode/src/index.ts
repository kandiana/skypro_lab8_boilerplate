import { MainPage } from './page/MainPage';

import './index.styl';

const app = document.querySelector('.app') as HTMLDivElement;
const page = new MainPage(app);
