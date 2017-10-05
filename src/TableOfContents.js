import React from 'react';

const TocElement = ({
  title,
  id,
  level = 0,
  padding = '1'
}) => (
  <section
    className="table-of-contents-element-container"
    style={{paddingLeft: level * padding + 'cm'}}
  >
    <a href={'#' + id}>{title}</a>
  </section>
)

export default ({
  toc,
  title
}) => (
  <section
    title={title}
    className="table-of-contents-container separate-pages bookmark-title bookmark-level-0"
  >
    <h2>{title}</h2>
    <section className="table-of-contents-elements-container">
      {toc.map((item, index) =>{
        return <TocElement key={index} title={item.title} id={item.id} level={item.level} />
      })}
    </section>
  </section>
)