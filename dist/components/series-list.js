import { SeriesItem } from './series-item.js';
import { Component } from './abstract-component.js';
import { seriesData } from '../models/series.data.js';
export class SeriesList extends Component {
    constructor(selector, group, changeScore, deleteSerie) {
        super();
        this.selector = selector;
        this.group = group;
        this.changeScore = changeScore;
        this.deleteSerie = deleteSerie;
        this.template = ''; // to export the final html template
        this.templateItem = ''; // To generate
        this.series = []; // to load the data
        this.seriesItems = []; // to load the data without mutating series[]
        this.count = 3; // TODO: Add this dynamically
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
            ? (this.series = this.series.filter((serie) => serie.watched))
            : (this.series = seriesData.filter((serie) => !serie.watched));
    }
    createSeriesTemplate() {
        this.series.forEach((item) => {
            return this.seriesItems.push(new SeriesItem('caca de vaca', item.id, item.name, item.creator, item.year, item.poster, item.watched, item.score, item.emmies, this.changeScore.bind(this), this.deleteSerie.bind(this)));
        });
        this.seriesItems.forEach((card) => {
            this.templateItem += card.template;
        });
    }
    createHTMLTemplate() {
        return (`<h3 class="subsection-title">${this.group === 'watched' ? 'Watched series' : 'Pending series'}</h3>
      <p class="info">${this.group === 'watched'
            ? `You have  ${this.series.length} series watched`
            : `You have  ${this.series.length} series pending`} </p>
      <ul class="series-list">` +
            this.templateItem +
            '</ul>');
    }
}
//# sourceMappingURL=series-list.js.map