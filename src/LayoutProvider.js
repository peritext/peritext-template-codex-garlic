import React, {Component} from 'react';
import PropTypes from 'prop-types';

import stylesheet from '!raw-loader!sass-loader!./garlic.scss';

export default class LayoutProvider extends Component{
  constructor(props) {
    super(props);
    this.state = {
      styles: this.updateStyles(props)
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.story !== nextProps.story || this.props.contextualizers !== nextProps.contextualizers) {
      this.setState({
        styles: this.updateStyles(nextProps)
      })
    }
  }

  getChildContext = () => ({
    story: this.props.story,
    contextualizers: this.props.contextualizers,
  })

  updateStyles = (props) => {
    const {
      story = {
        settings: {}
      },
      contextualizers = {}
    } = props;

    const contextualizersStyles = Object.keys(contextualizers)
      .map(type => contextualizers[type] && contextualizers[type].defaultCss)
      .join('\n');
    const storyStyles = story.settings.css && story.settings.css.codex ? story.settings.css.codex : '';
    
    return [
      stylesheet, 
      ...contextualizersStyles, 
      storyStyles
    ]
    .join('\n');
  }

  render = () => {
    const {
      styles
    } = this.state;
    const {
      children
    } = this.props;
    return (
      <section className="garlic-player">
        {children}
        <style dangerouslySetInnerHTML={{ 
          __html: styles
        }}
           />
      </section>
    )
  }
}

LayoutProvider.propTypes = {
  story: PropTypes.object,
  contextualizers: PropTypes.object,
}

LayoutProvider.childContextTypes = {
  story: PropTypes.object,
  contextualizers: PropTypes.object,
}