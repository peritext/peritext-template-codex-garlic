const path = require('path');
const generatePdf = require('peritext-generator-pdf');
const template = require('./dist/index');
const story1 = require('./examples/story-1');
const story2 = require('./examples/story-2');
const exampleLocale = require('./example-locale');

const contextualizers = {
  bib: require('peritext-contextualizer-bib'),
  codefiles: require('peritext-contextualizer-codefiles'),
  vegalite: require('peritext-contextualizer-vegalite'),
  p5: require('peritext-contextualizer-p5'),
  glossary: require('peritext-contextualizer-glossary'),
  video: require('peritext-contextualizer-video'),
  embed: require('peritext-contextualizer-embed'),
  image: require('peritext-contextualizer-image'),
  table: require('peritext-contextualizer-table'),
  dicto: require('peritext-contextualizer-dicto'),
  webpage: require('peritext-contextualizer-webpage'),
  'data-presentation': require('peritext-contextualizer-data-presentation'),
};

generatePdf({
  story: story1,
  contextualizers,
  template: template,
  locale: exampleLocale,
  tempDirPath: path.resolve(__dirname + '/temp'),
  outputDirPath: path.resolve(__dirname + '/examples')
});
generatePdf({
  story: story2,
  contextualizers,
  template: template,
  locale: exampleLocale,
  tempDirPath: path.resolve(__dirname + '/temp'),
  outputDirPath: path.resolve(__dirname + '/examples')
});