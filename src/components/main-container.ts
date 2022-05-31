import { Component } from './abstract-component.js';
import { SeriesList } from './series-list.js';
import { List } from '../models/series.model.js';

export class MainContainer extends Component {
  sectionTitle: string = 'Series list';
  template: string = '';
  sectionSeriesPending: object = {};
  sectionSeriesWatched: object = {};

  constructor(public selector: string) {
    super();
    this.render();
    // this.manageComponent()
  }

  render() {
    this.template = this.createHTMLTemplate();
    this.outerRender(this.selector);
    // TODO: Manage component…
  }

  methodExample() {
    console.log('this works');
  }

  createHTMLTemplate() {
    return `
        <section class="series">
          <h2 class="section-title">${this.sectionTitle}</h2>
          ${
            new SeriesList(
              'section.series-pending',
              List.pending,
              'Pending series',
              'You have FIXME SOON MATE series pending',
              this.methodExample.bind(this)
            ).template
          }
            ${
              new SeriesList(
                'section.series-watched',
                List.watched,
                'Watched series',
                `You have FIXME SOON MATE series watched`,
                this.methodExample.bind(this)
              ).template
            }
        </section>
    `;
  }

  manageComponent() {}
}
