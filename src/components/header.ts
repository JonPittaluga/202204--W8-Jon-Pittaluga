import { Component } from './abstract-component.js';

export class Header extends Component {
  template: string = '';

  constructor(public selector: string) {
    super();
    this.template = this.createHTMLTemplate();
    this.outerRender(this.selector);
  }

  createHTMLTemplate() {
    return `
      <header class="main-header">
        <h1 class="main-title">My Series</h1>
      </header>
    `;
  }
}
