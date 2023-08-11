const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const html = './../dist/index.html';

const { document } = (new JSDOM(html)).window;

test('Should render up to 4 questions on page load', () => {
  console.log(document);
  console.log(document.body);
});