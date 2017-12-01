import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {ReferencesManager} from 'react-citeproc';
import {buildCitations} from 'peritext-rendering-utils';

import Renderer from './Renderer';

export default class DecoratedEndNotes extends Component {
  constructor(props) {
    super(props);
    
  }

  getChildContext = () => ({
    contextualizers: this.props.contextualizers,
    datasets: this.props.story.datasets,
    story: this.props.story,
  })

  render() {
    const {
      story,
      title,
      level=0,
      id,
      LinkComponent: propLinkComponent
    } = this.props;

    const {
      LinkComponent: contextLinkComponent
    } = this.context;
    const {
      sectionsOrder,
      sections
    } = story;

    const LinkComponent = propLinkComponent || contextLinkComponent;
    
    const citations = buildCitations(story);
    const citationStyle = story.settings.citationStyle.data;
    const citationLocale = story.settings.citationLocale.data;
    

    return (
      <section 
        className={"notes-container bookmark-title separate-pages bookmark-level-" + level}
        title={title}
        id={id}
      >
        <ReferencesManager
            style={citationStyle}
            locale={citationLocale}
            items={citations.citationItems}
            citations={citations.citationData}
            componentClass="references-manager"
        >
          <h1 className="section-title">{title}</h1>
          <ol> 
            {
              sectionsOrder.reduce((results, sectionId) => 
                results.concat(
                  Object.keys(sections[sectionId].notes)
                  .map(id => ({...sections[sectionId].notes[id], sectionId}))
                )
              , [])
              .map((note, index) => {
                return (
                  <li  id={`note-content-${note.id}`} key={index}>
                    <LinkComponent sectionId={note.sectionId} href={`#note-pointer-${note.id}`} className="note-number">
                      {index + 1}
                    </LinkComponent>
                    <Renderer raw={note.contents} />
                  </li>
                )
              })
            }
          </ol>
        </ReferencesManager>
      </section>
    );
  }
}

DecoratedEndNotes.childContextTypes = {
  story: PropTypes.object,
  datasets: PropTypes.datasets,
  contextualizers: PropTypes.object,
  LinkComponent: PropTypes.func,
}

DecoratedEndNotes.contextTypes = {
  LinkComponent: PropTypes.func,
}