import { Header } from './components/header.js';
import { MainContainer } from './components/main-container.js';
(() => {
    document.addEventListener('DOMContentLoaded', main);
})();
function main() {
    new Header('.main-header');
    new MainContainer('section.series');
}
//# sourceMappingURL=app.js.map