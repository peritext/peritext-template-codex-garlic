import React from 'react';
import PropTypes from 'prop-types';

import {buildBibliography, buildCitations} from 'peritext-rendering-utils';

const StaticReferences = ({
  story,
  title,
  level = 0,
  id,
  LinkComponent: propLinkComponent,
  MentionComponent: propMentionComponent,
}, {
  LinkComponent: contextLinkComponent,
  MentionComponent: contextMentionComponent,
}) => {
  const LinkComponent = propLinkComponent || contextLinkComponent;
  const MentionComponent = propMentionComponent || contextMentionComponent;
  const citations = buildCitations(story);
  const references = buildBibliography(story, citations);
  return references.length ? (
    <section
      id={id}
      className={"references-container separate-pages bookmark-title bookmark-level-" + level}
      title={'Références'}
    >
      <h1>{title}</h1>
      <ul className="mentions-container">
        {
          references.map((entry, index) => {
            const entryName = entry.title;
            return (
              <li 
                key={index} 
                id={entry.citationKey}
                className="mention-item"
              >
                <div 
                  className="index-list-title"
                >
                  <div dangerouslySetInnerHTML={{
                    __html: entryName
                  }} />
                </div>
                  <div className="mentions-list">
                    Mentions: {
                      entry.mentions
                      .filter(mention => mention !== undefined && mention.contextContent)
                      .map((mention, count) => {
                        const {
                            contextContent: {
                              targetContents,
                              contents,
                              sectionTitle,
                              sectionId,
                            },
                            id,
                        } = mention;
                        return (
                          <MentionComponent 
                            key={count} 
                            href={`#${id}`}
                            sectionId={sectionId} 
                          />                     
                        )
                      })
                      .reduce((prev, curr) => [prev, ', ', curr], [])
                    }
                  </div>
                </li>
            );
          })
        }
      </ul>
    </section>
  ) : null;
};

StaticReferences.contextTypes = {
  LinkComponent: PropTypes.func,
  MentionComponent: PropTypes.func,
}

export default StaticReferences;