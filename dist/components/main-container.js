import { Component } from './abstract-component.js';
import { SeriesList } from './series-list.js';
import { List } from '../models/series.model.js';
export class MainContainer extends Component {
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
        // TODO: Manage component… this.manageComponent()
    }
    changeScore(score = 0, id = 0) {
        console.log(`Here's the score: ${score},
Here's the id: ${id}`);
    }
    createHTMLTemplate() {
        return `
        <section class="series">
          <h2 class="section-title">${this.sectionTitle}</h2>
          ${new SeriesList('section.series-pending', List.pending, 
        // 'Pending series',
        // 'You have FIXME SOON MATE series pending',
        this.changeScore.bind(this)).template}
            ${new SeriesList('section.series-watched', List.watched, 
        // 'Watched series',
        // `You have FIXME SOON MATE series watched`,
        this.changeScore.bind(this)).template}
        </section>
    `;
    }
}
//# sourceMappingURL=main-container.js.map