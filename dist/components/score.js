import { Component } from './abstract-component.js';
export class Score extends Component {
    constructor(score, selector, changeScore) {
        super();
        this.score = score;
        this.selector = selector;
        this.changeScore = changeScore;
        this.template = '';
        this.render();
        this.eventManager();
        // this.manageComponent();
    }
    render() {
        this.template = this.createHTMLTemplate();
        super.render(`${this.selector}`);
    }
    createHTMLTemplate() {
        let count = 0;
        count++;
        console.log('count', count);
        return `
        <li class="score__star">
          <i class="icon--score ${this.score < 1 ? 'far' : 'fas'} fa-star" title="1/5"></i>
        </li>
        <li class="score__star">
          <i class="icon--score ${this.score < 2 ? 'far' : 'fas'} fa-star" title="2/5"></i>
        </li>
        <li class="score__star">
          <i class="icon--score ${this.score < 3 ? 'far' : 'fas'} fa-star" title="3/5"></i>
        </li>
        <li class="score__star">
          <i class="icon--score ${this.score < 4 ? 'far' : 'fas'} fa-star" title="4/5"></i>
        </li>
        <li class="score__star">
          <i class="icon--score ${this.score < 5 ? 'far' : 'fas'} fa-star" title="5/5"></i>
        </li>
    `;
    }
    eventManager() {
        document
            .querySelectorAll('li.score__star')
            .forEach((item) => item.addEventListener('click', this.handlerScore));
    }
    // manageComponent() {
    //   document.querySelectorAll('i.icon--score').forEach((button) => {
    //     // document.querySelectorAll('.icon--score').forEach((button) => {
    //     button.addEventListener('click', this.handlerScore.bind(this));
    //   });
    //   // document.querySelectorAll('i.icon--delete').forEach((button) => {
    //   //   button.addEventListener('click', this.handlerDelete.bind(this));
    //   // });
    // }
    handlerScore(ev) {
        console.log('clicked');
        let newScore = ev.target;
        newScore = +newScore.title[0];
        let serieId = ev.target;
        serieId = serieId.closest('[data-id]').dataset.id;
        console.log('newScore', newScore);
        console.log('serieId', serieId);
        this.changeScore(newScore, serieId);
    }
}
//# sourceMappingURL=score.js.map