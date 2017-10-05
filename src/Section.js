import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Renderer from './Renderer';

class Section extends Component {
  constructor(props) {
    super(props);
    
  }

  getChildContext = () => ({
    notes: this.props.section.notes
  })

  render = () => {
    const {
      section: {
        id,
        metadata: {
          title,
          level,
          subtitle,
          authors = [],
        },
        contents,
        notes,
      },
      notesPosition
    } = this.props;
    return (
      <section 
        className={"section-container bookmark-title separate-pages bookmark-level-" + level}
        title={title}
        id={id}
      >
        <h1 className="section-title">{title}</h1>

        {subtitle && <h2 className="section-subtitle">{subtitle}</h2>}
        <h3 className="section-authors">
        {
          authors.length > 0 && 
          authors
          .map((author, index) => <span key={index}>{author.given} {author.family}</span>)
                .reduce((prev, curr, index) =>  index > 0 ? [prev, ', ', curr] : [curr], [])
        }
      </h3>
        <Renderer raw={contents} notesMode={notesPosition} />
      </section>
    );
  }
}

export default Section;

Section.childContextTypes = {
  notes: PropTypes.object,
}