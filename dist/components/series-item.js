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
        this.addRender();
        this.manageSeriesItem();
    }
    addRender() {
        this.template = this.createHTMLTemplate();
        super.addRender(this.selector);
        this.startChildComponents();
    }
    render() {
        //console.log(document.querySelector(this.selector));
        this.template = this.createHTMLTemplate();
        super.render(this.selector);
        //console.log(document.querySelector(`.score[data-id="${this.id}"]`));
        this.startChildComponents();
    }
    createHTMLTemplate() {
        return `<li class="serie" data-id="${this.id}">
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
        new Score(this.score, `.score[data-id="${this.id}"]`, this.changeScore.bind(this));
    }
    manageSeriesItem() {
        const element = document.querySelector(`.serie[data-id="${this.id}"] .icon--delete`);
        if (element) {
            console.log(element);
            element.addEventListener('click', () => {
                console.log('3');
            });
            console.log('2');
        }
    }
    handleDeletion() {
        console.log(`${this.id} was clicked`);
        this.deleteSerie(this.id);
    }
}
//# sourceMappingURL=series-item.js.map