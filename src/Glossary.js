import React from 'react';
import PropTypes from 'prop-types';

import {buildGlossary} from 'peritext-rendering-utils';

const Glossary = ({
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

  const glossary = buildGlossary(story);

  return glossary.length ? (
    <section
      id={id}
      className={"glossary-container separate-pages bookmark-title bookmark-level-" + level}
      title={title}
    >
      <h1>{title}</h1>
      <ul className="mentions-container">
        {
          glossary.map((entry, index) => {
            const entryName = entry.title;
            return (
              <li 
                key={index} 
                id={entry.resource.metadata.id}
                className="mention-item"
              >
                <div 
                  className="index-list-title"
                >
                  {entry.resource.data.name}
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


Glossary.contextTypes = {
  LinkComponent: PropTypes.func,
  MentionComponent: PropTypes.func,
}


export default Glossary;