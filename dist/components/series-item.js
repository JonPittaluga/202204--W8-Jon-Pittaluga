import { Component } from './abstract-component.js';
import { Score } from './score.js';
export class SeriesItem extends Component {
    constructor(id, name, creator, year, poster, watched, score, emmies, changeScore) {
        super();
        this.id = id;
        this.name = name;
        this.creator = creator;
        this.year = year;
        this.poster = poster;
        this.watched = watched;
        this.score = score;
        this.emmies = emmies;
        this.changeScore = changeScore;
        this.template = '';
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
          ${new Score(this.score, this.name, this.changeScore.bind(this))
            .template}
        </ul>

        <i class="fas fa-times-circle icon--delete"></i>
      </li>`;
    }
}
//# sourceMappingURL=series-item.js.map