import Navigation from './components/Navigation';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Content from './components/Content';
import Footer from './components/Footer';
 
document
    .querySelector('#root')
    .innerHTML = `
    ${Navigation}
    ${Header}
    ${Introduction}
    ${Content}
    ${Footer}
    `;