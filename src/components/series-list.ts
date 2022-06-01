import { SeriesItem } from './series-item.js';
import { iSerieModel, List } from './../models/series.model.js';
import { Component } from './abstract-component.js';
import { seriesData } from '../models/series.data.js';

export class SeriesList extends Component {
  template: string = ''; // to export the final html template
  templateItem: any = ''; // To generate
  series: any = []; // to load the data
  seriesItems: any = []; // to load the data without mutating series[]
  count: number = 3; // TODO: Add this dynamically

  constructor(
    public selector: string,
    public group: List,
    public changeScore: (score: number, id: number) => void
  ) {
    super();
    this.render();
  }

  render() {
    this.series = seriesData;
    this.seriesItems = [];
    this.filterSeries();
    this.seriesItems = this.createSeriesTemplate();
    this.template = this.createHTMLTemplate();
    // this.changeScore();
    super.render(this.selector);
  }

  filterSeries() {
    this.group === 'watched'
      ? (this.series = this.series.filter(
          (serie: { watched: boolean }) => serie.watched
        ))
      : (this.series = seriesData.filter(
          (serie: { watched: boolean }) => !serie.watched
        ));
  }

  createSeriesTemplate() {
    this.series.forEach((item: iSerieModel) => {
      return this.seriesItems.push(
        new SeriesItem(
          item.id,
          item.name,
          item.creator,
          item.year,
          item.poster,
          item.watched,
          item.score,
          item.emmies,
          this.changeScore.bind(this)
        )
      );
    });
    this.seriesItems.forEach((card: { template: any }) => {
      this.templateItem += card.template;
    });
  }

  createHTMLTemplate() {
    return (
      `<h3 class="subsection-title">${
        this.group === 'watched' ? 'Watched series' : 'Pending series'
      }</h3>
      <p class="info">${
        this.group === 'watched'
          ? `You have  ${this.series.length} series watched`
          : `You have  ${this.series.length} series pending`
      } </p>
      <ul class="series-list">` +
      this.templateItem +
      '</ul>'
    );
  }
}

// CREAR UNA FUNCIÓN EN EL PADRE - EL DE LA LÓGICA… DECLARO
// AL CONSTRUCTOR DEL HIJO PASARLE UN PARÁMETRO… EJECTUTO
