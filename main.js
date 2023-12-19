import { Content } from './src/components/Content/Content';
import { Footer } from './src/components/Footer/Footer';
import { Header } from './src/components/Header/Header';
import './style.css';
const divApp = document.querySelector('#app');

divApp.appendChild(Header());
divApp.appendChild(Content());
divApp.appendChild(Footer());
