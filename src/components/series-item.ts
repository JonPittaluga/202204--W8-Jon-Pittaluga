import { Component } from './abstract-component.js';
import { SerieModel } from '../models/series.model.js';
import { Score } from './score.js';

export class SeriesItem extends Component implements SerieModel {
  template: string = '';

  constructor(
    public selector: string,
    public id: number,
    public name: string,
    public creator: string,
    public year: number,
    public poster: string,
    public watched: boolean,
    public score: number,
    public emmies: number,
    public changeScore: (score: number, id: number) => void,
    public deleteSerie: (id: number) => void
  ) {
    super();
    this.selector = selector;
    this.render();
    this.manageSeriesItem();
  }

  render() {
    this.template = this.createHTMLTemplate();
    super.render(this.selector);
    this.startChildComponents();
  }

  createHTMLTemplate() {
    return `<li class="serie">
        <img
          class="serie__poster"
          src="${this.poster}"
          alt="${this.name} poster"
        />
        <h4 class="serie__title">${this.name}</h4>
        <p class="serie__info">${this.creator} (${this.year})</p>
        <ul class="score" data-id="${this.id}"> 
        </ul>
        <i class="fas fa-times-circle icon--delete"></i>
      </li>`;
  }

  startChildComponents() {
    return `
      ${new Score(this.score, 'score', this.changeScore.bind(this)).template}`;
  }

  manageSeriesItem() {
    // document.querySelector('.icon--delete').addEventListener('click', this.handleDeletion);
    document
      .querySelectorAll('.icon--delete')
      .forEach((item) => item.addEventListener('click', this.handleDeletion));
  }

  handleDeletion() {
    console.log(`${this.id} was clicked`);
    this.deleteSerie(this.id);
  }
}
