const path = require('path');
const fs = require('fs');
const generatePdf = require('peritext-generator-pdf');
const generateEpub = require('peritext-generator-epub');
const template = require('./dist/index');
const story1 = require('./examples/story-1');
const story2 = require('./examples/story-2');
const storyLinks = require('./examples/story-links');
const exampleLocale = require('./example-locale');

const templateCss = fs.readFileSync(__dirname + '/dist/main.css', 'utf8');

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

const stories = [story1, story2, storyLinks].reduce((p, story) => 
  new Promise((resolve, reject) => {
    generateEpub({
      story: story1,
      contextualizers,
      template: template,
      locale: exampleLocale,
      additionalStylesheets: [
        templateCss
      ],
      tempDirPath: path.resolve(__dirname + '/temp'),
      outputDirPath: path.resolve(__dirname + '/examples')
    }, (err) => {
      if (err) {
        reject(err);
      } else resolve(null);
    });
  }),
  Promise.resolve());