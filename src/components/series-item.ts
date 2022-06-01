import { Component } from './abstract-component.js';
import { SerieModel } from '../models/series.model.js';
import { Score } from './score.js';

export class SeriesItem extends Component implements SerieModel {
  template: string = '';

  constructor(
    public id: number,
    public name: string,
    public creator: string,
    public year: number,
    public poster: string,
    public watched: boolean,
    public score: number,
    public emmies: number,
    public changeScore: (score: number, id: number) => void
  ) {
    super();
    this.template = this.createHTMLTemplate();
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
          ${
            new Score(this.score, this.name, this.changeScore.bind(this))
              .template
          }
        </ul>

        <i class="fas fa-times-circle icon--delete"></i>
      </li>`;
  }
}
