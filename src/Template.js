import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {ReferencesManager} from 'react-citeproc';
import {buildCitations} from 'peritext-rendering-utils';

import HeadMaker from './Head';
import LayoutProvider from './LayoutProvider';
// import NotesContainer from '../components/NotesContainer';

import FrontCover from './FrontCover';
import SecondFront from './SecondFront';
import BackCover from './BackCover';
import TableOfContents from './TableOfContents';
import References from './References';
import Glossary from './Glossary';
import AuthorsIndex from './AuthorsIndex';
import EndNotes from './EndNotes';
import DefaultLinkComponent from './DefaultLinkComponent';
import DefaultMentionComponent from './DefaultMentionComponent';

import Section from './Section';

import defaultLocales from './defaultLocales';

const EmptyPage = () => (
  <div className="empty-page" />
)

export default class Template extends Component {
  constructor(props) {
    super(props);
    
  }

  getChildContext() {
    return {
      LinkComponent: this.props.LinkComponent || DefaultLinkComponent,
      MentionComponent: this.props.MentionComponent || DefaultMentionComponent,
    };
  }

  render () {
    const {
      props: {
        story,
        locales = defaultLocales,
        contextualizers,
        locale,
      },
    } = this;

    const {
      metadata: {
        title: pageTitle,
        authors = [],
        tags = [],
        description = '',
        url = ''
      },
      settings: {
        css: {
          codex
        },
        displayFrontCodexCover = true,
        displayBackCodexCover = true,
        displaySecondFront = true,
      }
    } = story;
    const citations = buildCitations(story);

    const citationStyle = story.settings.citationStyle.data;
    const citationLocale = story.settings.citationLocale.data;
    const notesPosition = story.settings.options.staticNotesPosition || 'foot';
    const toc = [
      // sections
      ...story.sectionsOrder.map(sectionId => {
        const section = story.sections[sectionId];
        return {
          id: sectionId,
          title: section.metadata.title,
          level: section.metadata.level,
          component: Section,
          props: {
            section,
            notesPosition,
          }
        }
      }),
      // references list
      (
        Object.keys(story.resources).length > 0 ?
        {
          id: 'static-references',
          title: locales.references,
          component: References,
          level: 0,
          props: {
            story: story
          }
        } : undefined
      ),
      // glossary list
      (
        Object.keys(story.resources)
        .filter(rId => story.resources[rId].metadata.type === 'glossary')
        .length > 0 ?
        {
          id: 'static-glossary',
          title: locales.glossary,
          component: Glossary,
          level: 0,
          props: {
            story: story
          }
        } : undefined
      ),
      // authors index list
      (
        Object.keys(story.resources)
        .filter(key => {
          const res = story.resources[key];
          const authors = res.authors;
          return authors && authors.length;
        })
        .length > 0 ?
        {
          id: 'static-authors-index',
          title: locales.authorsIndex,
          component: AuthorsIndex,
          level: 0,
          props: {
            story: story
          }
        } : undefined
      ),
    ].filter(part => part !== undefined);
    if (notesPosition ==='end') {
      toc.push({
        id: 'end-notes',
        title: locales.notes,
        component: EndNotes,
        level: 0,
        props: {
          story: story,
        }
      })
    }
    return (
      <html>
        <HeadMaker
          pageTitle={pageTitle}
          authors={authors}
          tags={tags}
          description={description}
          url={url}
        />
        <body>
          <LayoutProvider 
            contextualizers={contextualizers} 
            story={story}
            locale={locale}
          >
            <section className="contents-wrapper">
              <ReferencesManager
                style={citationStyle}
                locale={citationLocale}
                items={citations.citationItems}
                citations={citations.citationData}
                componentClass="references-manager"
              >
                {displayFrontCodexCover && <FrontCover story={story} />}
                <EmptyPage />
                {displaySecondFront && <SecondFront story={story} />}
                {displaySecondFront && <EmptyPage /> }
                
                <TableOfContents title={locales.tableOfContents} toc={toc} />
                <EmptyPage />
                {
                  toc.map((item, index) => {
                    const Component = item.component;
                    return <Component 
                              key={index}
                              id={item.id}
                              title={item.title}
                              level={item.level}
                              {...item.props}
                            />
                  })
                }
                {displayBackCodexCover && <EmptyPage />}
                {displayBackCodexCover && <BackCover story={story} />}
              </ReferencesManager>
            </section>
          </LayoutProvider>
          <style>
            {codex}
          </style>
        </body>
      </html>
    )
  }
}

Template.childContextTypes = {
  LinkComponent: PropTypes.func,
  MentionComponent: PropTypes.func,
}