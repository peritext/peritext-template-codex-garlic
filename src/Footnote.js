/**
 * This module exports a stateless reusable note pointer component
 * ============
 * @module quinoa-story-player/components/NotePointer
 */
import React from 'react';
import PropTypes from 'prop-types';

import Renderer from './FootnoteRenderer';

/**
 * Renders a not pointer as a pure component
 * @param {object} props
 * @param {array} props.children - children elements of the component
 * @param {array} props.noteId - the id of the note to point to
 * @param {object} context - the context data of the component
 * @return {ReactElement} component - the component
 */
const Footnote = ({
  children,
  noteId = ''
}, context) => {
  const notes = context.notes;
  if (notes) {
    const note = notes[noteId];
    if (note) {
      return (
        <sup className="footnote" id={`note-pointer-${noteId}`}>
          <span className="footnote-content">
            <Renderer raw={note.contents} />
          </span>
        </sup>
      );
    }
    return null;
  }
  return null;
};

/**
 * Component's properties types
 */
Footnote.propTypes = {
  /**
   * Children react components
   */
  children: PropTypes.array,
  /**
   * id of the note to render
   */
  noteId: PropTypes.string,
};

/**
 * Component's context used properties
 */
Footnote.contextTypes = {
  /**
   * Map of available notes to look into
   */
  notes: PropTypes.object,
};

export default Footnote;
