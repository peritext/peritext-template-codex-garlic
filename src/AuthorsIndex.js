import React from 'react';
import PropTypes from 'prop-types';

import {buildAuthorsIndex} from 'peritext-rendering-utils';

const AuthorsIndex = ({
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

  const authors = buildAuthorsIndex(story);

  return authors.length ? (
    <section
      id={id}
      className={"authors-index-container separate-pages bookmark-title bookmark-level-" + level}
      title={title}
    >
      <h1>{title}</h1>
      <ul className="mentions-container">
        {
          authors
          .sort((a, b) => {
            if (a.id > b.id) {
              return 1;
            } else return -1;
          })
          .map((entry, index) => {
            const entryName = entry.given + ' ' + entry.family;
            return (
              <li 
                key={index} 
                id={entry.id}
                className="mention-item"
              >
                <div 
                  className="index-list-title"
                >
                  {entryName}
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
                        );
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
  ): null
};


AuthorsIndex.contextTypes = {
  LinkComponent: PropTypes.func,
  MentionComponent: PropTypes.func,
}

export default AuthorsIndex;