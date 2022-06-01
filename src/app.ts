import { Header } from './components/header.js';
import { Main } from './components/main.js';

(() => {
  document.addEventListener('DOMContentLoaded', main);
})();

function main() {
  new Header('.main-header');
  new Main('section.series');
}
