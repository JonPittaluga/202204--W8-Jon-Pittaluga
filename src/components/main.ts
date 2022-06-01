import { Component } from './abstract-component.js';
import { SeriesList } from './series-list.js';
import { List } from '../models/series.model.js';

export class Main extends Component {
  sectionTitle: string = 'Series list';
  template: string = '';
  sectionSeriesPending: object = {};
  sectionSeriesWatched: object = {};

  constructor(public selector: string) {
    super();
    this.render();
    this.changeScore();
  }

  render() {
    this.template = this.createHTMLTemplate();
    this.outerRender(this.selector);
    // TODO: Manage component… this.manageComponent()
  }

  changeScore(score: number = 0, id: number = 0) {
    console.log(`Here's the score: ${score},
Here's the id: ${id}`);
  }

  createHTMLTemplate() {
    return `
        <section class="series">
          <h2 class="section-title">${this.sectionTitle}</h2>
          ${
            new SeriesList(
              'section.series-pending',
              List.pending,
              this.changeScore.bind(this)
            ).template
          }
            ${
              new SeriesList(
                'section.series-watched',
                List.watched,
                this.changeScore.bind(this)
              ).template
            }
        </section>
    `;
  }
}
