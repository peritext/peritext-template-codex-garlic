import React, {PropTypes} from 'react';

export default ({
  story: {
    metadata
  }
}) => (
  <section
    id="front-cover"
    className={"front-cover-container" + ((metadata.covers && metadata.covers.codex) ? ' with-image' : '')}
  >
    {
      metadata.covers && metadata.covers.codex &&
      <img id="cover-image" src={metadata.covers.codex} />
    }
    <div className="cover-content">
      <h1 className="peritext-static-title">{metadata.title}</h1>
      {
        metadata.subtitle && 
        <h2 className="peritext-static-subtitle">{metadata.subtitle}</h2>
      }
      <h3 className="peritext-static-authors">
        {
          metadata.authors && 
          metadata.authors
          .map((author, index) => <span key={index}>{author.given} {author.family}</span>)
                .reduce((prev, curr, index) =>  index > 0 ? [prev, ', ', curr] : [curr], [])}
        }
      </h3>
    </div>
  </section>
)
