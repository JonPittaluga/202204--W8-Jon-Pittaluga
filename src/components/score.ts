import { Component } from './abstract-component.js';

export class Score extends Component {
  template: string = '';

  constructor(public score: number, public selector?: string) {
    super();
    this.template = this.createHTMLTemplate();
    console.log(selector);
  }

  createHTMLTemplate() {
    return `
        <li class="score__star" role="button">
          <i class="icon--score ${
            this.score < 1 ? 'far' : 'fas'
          } fa-star" title="1/5"></i>
        </li>
        <li class="score__star" role="button">
          <i class="icon--score ${
            this.score < 2 ? 'far' : 'fas'
          } fa-star" title="2/5"></i>
        </li>
        <li class="score__star" role="button">
          <i class="icon--score ${
            this.score < 3 ? 'far' : 'fas'
          } fa-star" title="3/5"></i>
        </li>
        <li class="score__star" role="button">
          <i class="icon--score ${
            this.score < 4 ? 'far' : 'fas'
          } fa-star" title="4/5"></i>
        </li>
        <li class="score__star" role="button">
          <i class="icon--score ${
            this.score < 5 ? 'far' : 'fas'
          } fa-star" title="5/5"></i>
        </li>
    `;
  }
}
