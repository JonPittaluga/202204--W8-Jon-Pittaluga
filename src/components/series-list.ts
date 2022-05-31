import { SeriesItem } from './series-item.js';
import { iSerieModel, List } from './../models/series.model.js';
import { Component } from './abstract-component.js';
import { seriesData } from '../models/series.data.js';

export class SeriesList extends Component {
  sectionTitle: string;
  sectionInfo: string;
  template: string = '';
  series: any = []; // FOR STATE MANAGEMENT… BECAREFUL
  seriesItems: any = [];
  templateItem: any = '';
  count: number = 3; // TODO: Add this dynamically

  constructor(
    public selector: string,
    public group: List,
    public title: string,
    public info: string,
    public methodExample: () => void // no recibe
  ) {
    super();
    this.sectionTitle = title;
    this.sectionInfo = info;
    this.render();
    this.manageComponent();
  }

  render() {
    this.series = seriesData;
    this.seriesItems = [];
    this.filterSeries();
    this.seriesItems = this.createSeriesTemplate();
    this.template = this.createHTMLTemplate();
    this.methodExample();
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
      this.seriesItems.push(
        new SeriesItem(
          item.id,
          item.name,
          item.creator,
          item.year,
          item.poster,
          item.watched,
          item.score,
          item.emmies
        )
      );
    });
    this.seriesItems.forEach((card: { template: any }) => {
      this.templateItem += card.template;
    });
  }

  createHTMLTemplate() {
    return (
      `<h3 class="subsection-title">${this.sectionTitle}</h3>
      <p class="info">${
        this.group === 'watched'
          ? `You have  ${this.count} series watched`
          : `You have  ${this.count} series pending`
      } </p>
      <ul class="series-list">` +
      this.templateItem +
      '</ul>'
    );
  }

  manageComponent() {
    // document.querySelectorAll('[role="button"]').forEach((button) => {
    document.querySelectorAll('i.icon--score').forEach((button) => {
      button.addEventListener('click', this.handlerScore.bind(this));
    });
    document.querySelectorAll('i.icon--delete').forEach((button) => {
      button.addEventListener('click', this.handlerDelete.bind(this));
    });
  }

  handlerScore(ev: Event) {
    let newScore: any = <HTMLElement>ev.target;
    newScore = newScore.title[0];
    let serieId: any = <HTMLElement>ev.target;
    serieId = serieId.closest('[data-id]').dataset.id as string;
    console.log('NEW SCORE', newScore);
    // this.score = newScore;
    this.render();
  }

  handlerDelete(ev: Event) {
    let serieId: any = <HTMLElement>ev.target;
    serieId = serieId.previousElementSibling.dataset.id;
    console.log('DELETE THIS ID', serieId);
    this.render();
  }
}

// CREAR UNA FUNCIÓN EN EL PADRE - EL DE LA LÓGICA… DECLARO
// AL CONSTRUCTOR DEL HIJO PASARLE UN PARÁMETRO… EJECTUTO
