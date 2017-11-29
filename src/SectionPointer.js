/**
 * This module exports a stateless reusable section pointer component
 * ============
 * @module quinoa-story-player/components/SectionPointer
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Renders a section pointer as a pure component
 * @param {object} props
 * @param {array} props.children - children elements of the component
 * @param {array} props.sectionId - the id of the section to point to
 * @param {object} context - the context data of the component
 * @return {ReactElement} component - the component
 */
const SectionPointer = ({
  children,
  sectionId = ''
}, context) => {
  const sections = context.story && context.story.sections;
  const SectionLinkComponent = context.SectionLinkComponent;
  if (sections) {
    const section = sections[sectionId];
    if (section) {
      return (
        <span className="section-pointer" id={`section-pointer-${sectionId}`}>
          {SectionLinkComponent ? 
            <SectionLinkComponent sectionId={sectionId}>
            {section.order}
            {children}
          </SectionLinkComponent>
          : <a href={`#section-content-${sectionId}`}>
            {section.order}
            {children}
          </a>}
        </span>
      );
    }
    return null;
  }
  return null;
};

/**
 * Component's properties types
 */
SectionPointer.propTypes = {
  /**
   * Children react components
   */
  children: PropTypes.array,
  /**
   * id of the section to render
   */
  sectionId: PropTypes.string,
};

/**
 * Component's context used properties
 */
SectionPointer.contextTypes = {
  /**
   * Story to look into
   */
  story: PropTypes.object,
  /**
   * Triggers a callback upstream when the pointer is clicked
   */
  onSectionContentPointerClick: PropTypes.func,

  SectionLinkComponent: PropTypes.func,
};

export default SectionPointer;
