import { Component } from './abstract-component.js';
import { Score } from './score.js';
export class SeriesItem extends Component {
    constructor(selector, id, name, creator, year, poster, watched, score, emmies, changeScore, deleteSerie) {
        super();
        this.selector = selector;
        this.id = id;
        this.name = name;
        this.creator = creator;
        this.year = year;
        this.poster = poster;
        this.watched = watched;
        this.score = score;
        this.emmies = emmies;
        this.changeScore = changeScore;
        this.deleteSerie = deleteSerie;
        this.template = '';
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
//# sourceMappingURL=series-item.js.map