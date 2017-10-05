import React from 'react';

export default ({
  story: {
    metadata
  }
}) => (
  <section
    id="back-cover"
    className="back-cover-container"
  >
    <h2 className="peritext-static-back-title">{metadata.title}</h2>
    {metadata.subtitle && <h3 className="peritext-static-back-subtitle">{metadata.subtitle}</h3>}
    {metadata.authors && <h3 className="peritext-static-authors">
      {metadata.authors
        .map((author, index) => <span key={index}>{author.given} {author.family}</span>)
                .reduce((prev, curr, index) => index > 0 ? [prev, ', ', curr] : [curr], [])
      }
    </h3>}
    {metadata.description && <div className="description">
      {
        metadata.description
        .split('\n')
        .map((content, id) => {
          return <p key={id}>{content}</p>
        })
      }
    </div>}
  </section>
)