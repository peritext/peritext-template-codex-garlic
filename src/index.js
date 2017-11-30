import Template from './Template';

import DecoratedSection from './DecoratedSection';
import References from './References';
import Glossary from './Glossary';
import AuthorsIndex from './AuthorsIndex';
import EndNotes from './EndNotes';
import DecoratedEndNotes from './DecoratedEndNotes';

const stylesheet = require('./garlic.scss');

const metadata = {
  name: 'codex garlic',
  type: 'peritext-codex-template',
  id:'codex-garlic',
  options: [
    {
      id: 'displayFrontCodexCover',
      type: 'boolean',
      title: {
        fr: 'Afficher la première de couverture',
        en: 'Display front cover page',
      }
    },
    {
      id: 'displayBackCodexCover',
      type: 'boolean',
      title: {
        fr: 'Afficher la quatrième de couverture',
        en: 'Display back cover page',
      }
    },
    {
      id: 'displaySecondFront',
      type: 'boolean',
      title: {
        fr: 'Afficher la deuxième de couverture',
        en: 'Display "deuxième de couverture"',
      }
    },
    {
      type: 'select',
      id: 'staticNotesPosition',
      title: {
        fr: 'Position des notes',
        en: 'Notes position'
      },
      options: [
        {
          id: 'foot',
          labels: {
            fr: 'Fin de page',
            en: 'Page end'
          }
        },
        {
          id: 'end',
          labels: {
            fr: 'Fin de récit',
            en: 'Story end'
          }
        },
      ]
    }
  ]
}

export default {
  component: Template,
  DecoratedSection,
  EndNotes,
  DecoratedEndNotes,
  References,
  Glossary,
  AuthorsIndex,
  metadata,
  stylesheet,
  typefaceNames: ['roboto', 'merriweather']
};

