import { Header } from './components/header.js';
import { MainContainer } from './components/main-container.js';
import { SeriesList } from './components/series-list.js';
import { List } from './models/series.model.js';

(() => {
  document.addEventListener('DOMContentLoaded', main);
})();

function main() {
  // First paint
  new Header('.main-header'); // inutil
  new MainContainer('section.series'); // generar selectores
  // // renderizan y con fitlrado
  // new SeriesList(
  //   'section.series-pending',
  //   List.pending,
  //   'Pending series',
  //   'You have FIXME SOON MATE series pending'
  // );
  // // renderizan y con fitlrado
  // new SeriesList(
  //   'section.series-watched',
  //   List.watched,
  //   'Watched series',
  //   `You have FIXME SOON MATE series watched`
  // );
}
