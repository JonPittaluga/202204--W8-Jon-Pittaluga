import { Component } from './abstract-component.js';
export class Series extends Component {
    constructor(section, selector) {
        super();
        this.section = section;
        this.selector = selector;
        this.template = '';
        this.sectionTitle = section;
        this.template = this.createHTMLTemplate();
        this.addRender(this.selector);
    }
    createHTMLTemplate() {
        // TODO: Quitar componentes de aquí y voy pasándolos a otros bloques
        return `
    <h1>${this.sectionTitle}</h1>
    `;
    }
}
//# sourceMappingURL=series.js.map