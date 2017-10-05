import React from 'react';

import Renderer from './Renderer';

export default ({
  story: {
    sectionsOrder,
    sections
  },
  title,
  level=0,
  id,
}) => (
  <section 
    className={"notes-container bookmark-title separate-pages bookmark-level-" + level}
    title={title}
    id={id}
  >
    <h1 className="section-title">{title}</h1>
    <ol className="end-notes"> 
      {
        sectionsOrder.reduce((results, sectionId) => 
          results.concat(
            Object.keys(sections[sectionId].notes)
            .map(id => sections[sectionId].notes[id])
          )
        , [])
        .map((note, index) => {
          return (
            <li id={`note-content-${note.id}`} key={index}>
              <a href={`#note-pointer-${note.id}`} className="note-number">
                {index + 1}
              </a>
              <Renderer raw={note.editorState} />
            </li>
          )
        })
      }
    </ol>
  </section>
);