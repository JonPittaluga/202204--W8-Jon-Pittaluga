import { Component } from './abstract-component.js';
export class Score extends Component {
    constructor(score, selector, changeScore) {
        super();
        this.score = score;
        this.selector = selector;
        this.changeScore = changeScore;
        this.template = '';
        this.template = this.createHTMLTemplate();
        this.eventManager();
        // this.manageComponent();
    }
    createHTMLTemplate() {
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
        // document
        //   .querySelectorAll('li.score__star')
        //   .forEach((item) =>
        //     item.addEventListener('click', () =>
        //       console.log('clicked a "i.icon--score"')
        //     )
        //   );
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
        // let newScore: any = <HTMLElement>ev.target;
        // newScore = +newScore.title[0];
        // let serieId: any = <HTMLElement>ev.target;
        // serieId = serieId.closest('[data-id]').dataset.id as number;
        // console.log('NEW SCORE', newScore);
        // this.changeScore(newScore, serieId);
    }
}
//# sourceMappingURL=score.js.map