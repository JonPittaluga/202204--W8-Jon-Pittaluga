import { Component } from './abstract-component.js';
export class Header extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.template = '';
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
//# sourceMappingURL=header.js.map