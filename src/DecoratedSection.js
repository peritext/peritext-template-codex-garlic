import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {ReferencesManager} from 'react-citeproc';
import {buildCitations} from 'peritext-rendering-utils';

import Section from './Section';

export default class DecoratedSection extends Component {
  constructor(props) {
    super(props);
    
  }

  getChildContext = () => ({
    story: this.props.story,
    contextualizers: this.props.contextualizers,
    ReferenceLinkComponent: this.props.ReferenceLinkComponent || this.context.ReferenceLinkComponent,
    GlossaryLinkComponent: this.props.GlossaryLinkComponent || this.context.GlossaryLinkComponent,
    NoteLinkComponent: this.props.NoteLinkComponent || this.context.NoteLinkComponent,
    SectionLinkComponent: this.props.SectionLinkComponent || this.context.SectionLinkComponent,
  })

  render = () => {
    const {
      story,
      contextualizers,
      locale,
      sectionId
    } = this.props;
    const citations = buildCitations(story);
    const citationStyle = story.settings.citationStyle.data;
    const citationLocale = story.settings.citationLocale.data;
    const section = story.sections[sectionId];
    return (
      <ReferencesManager
          style={citationStyle}
          locale={citationLocale}
          items={citations.citationItems}
          citations={citations.citationData}
          componentClass="references-manager"
      >
        <Section
          section={section}
        />
      </ReferencesManager>
    );
  }
}

DecoratedSection.contextTypes = {
  LinkComponent: PropTypes.func,
}

DecoratedSection.childContextTypes = {
  contextualizers: PropTypes.object,
  story: PropTypes.object,
  ReferenceLinkComponent: PropTypes.func,
  GlossaryLinkComponent: PropTypes.func,
  NoteLinkComponent: PropTypes.func,
  SectionLinkComponent: PropTypes.func,
}

