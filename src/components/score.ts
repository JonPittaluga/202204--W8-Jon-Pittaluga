import { Component } from './abstract-component.js';

export class Score extends Component {
  template: string = '';

  constructor(
    public score: number,
    public selector: string,
    public changeScore: (score: number, id: number) => void
  ) {
    super();
    this.template = this.createHTMLTemplate();
    this.eventManager();
    // this.manageComponent();
  }

  createHTMLTemplate() {
    return `
        <li class="score__star">
          <i class="icon--score ${
            this.score < 1 ? 'far' : 'fas'
          } fa-star" title="1/5"></i>
        </li>
        <li class="score__star">
          <i class="icon--score ${
            this.score < 2 ? 'far' : 'fas'
          } fa-star" title="2/5"></i>
        </li>
        <li class="score__star">
          <i class="icon--score ${
            this.score < 3 ? 'far' : 'fas'
          } fa-star" title="3/5"></i>
        </li>
        <li class="score__star">
          <i class="icon--score ${
            this.score < 4 ? 'far' : 'fas'
          } fa-star" title="4/5"></i>
        </li>
        <li class="score__star">
          <i class="icon--score ${
            this.score < 5 ? 'far' : 'fas'
          } fa-star" title="5/5"></i>
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

  handlerScore(ev: Event) {
    console.log('clicked');
    // let newScore: any = <HTMLElement>ev.target;
    // newScore = +newScore.title[0];
    // let serieId: any = <HTMLElement>ev.target;
    // serieId = serieId.closest('[data-id]').dataset.id as number;
    // console.log('NEW SCORE', newScore);
    // this.changeScore(newScore, serieId);
  }

  // handlerDelete(ev: Event) {
  //   let serieId: any = <HTMLElement>ev.target;
  //   serieId = serieId.previousElementSibling.dataset.id;
  //   console.log('DELETE THIS ID', serieId);
  //   this.render();
  // }
}
