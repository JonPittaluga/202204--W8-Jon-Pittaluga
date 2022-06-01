import { Component } from './abstract-component.js';
import { SeriesList } from './series-list.js';
import { List } from '../models/series.model.js';
export class Main extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.sectionTitle = 'Series list';
        this.template = '';
        this.sectionSeriesPending = {};
        this.sectionSeriesWatched = {};
        this.render();
        this.changeScore();
    }
    render() {
        this.template = this.createHTMLTemplate();
        this.outerRender(this.selector);
        this.startChildComponents();
        // this.deleteSerie();
    }
    changeScore(score = 0, id = 0) {
        console.log(`Here's the score: ${score}, Here's the id: ${id}`);
    }
    deleteSerie(id) {
        console.log(`Connected delete serie method from main 
    CLICKED ID: ${id}`);
    }
    createHTMLTemplate() {
        return `
        <section class="series">
          <h2 class="section-title">${this.sectionTitle}</h2>
          <section class="series-pending"></section>
          <section class="series-watched"></section>
        </section>
    `;
    }
    startChildComponents() {
        return `
      ${new SeriesList('section.series-pending', List.pending, this.changeScore.bind(this), this.deleteSerie.bind(this)).template}
      ${new SeriesList('section.series-watched', List.watched, this.changeScore.bind(this), this.deleteSerie.bind(this)).template}
    `;
    }
}
//# sourceMappingURL=main.js.map