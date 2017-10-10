module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("peritext-rendering-utils");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/keys");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-citeproc");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _redraft = __webpack_require__(17);

var _redraft2 = _interopRequireDefault(_redraft);

var _Link = __webpack_require__(18);

var _Link2 = _interopRequireDefault(_Link);

var _BlockAssetWrapper = __webpack_require__(19);

var _BlockAssetWrapper2 = _interopRequireDefault(_BlockAssetWrapper);

var _InlineAssetWrapper = __webpack_require__(20);

var _InlineAssetWrapper2 = _interopRequireDefault(_InlineAssetWrapper);

var _NotePointer = __webpack_require__(21);

var _NotePointer2 = _interopRequireDefault(_NotePointer);

var _Footnote = __webpack_require__(22);

var _Footnote2 = _interopRequireDefault(_Footnote);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// just a helper to add a <br /> after each block
/**
 * This module exports a statefull reusable draft-js raw-to-react renderer component
 * It wrapps around the redraft engine that converts draft-s raw to a react representation,
 * providing it specific settings and callbacks.
 */
var addBreaklines = function addBreaklines(children) {
  return children.map(function (child) {
    return [child, _react2.default.createElement('br', null)];
  });
};

/**
 * Define the renderers
 */
var renderers = {
  /**
   * Those callbacks will be called recursively to render a nested structure
   */
  inline: {
    // The key passed here is just an index based on rendering order inside a block
    BOLD: function BOLD(children, _ref) {
      var key = _ref.key;
      return _react2.default.createElement(
        'strong',
        { key: key },
        children
      );
    },
    ITALIC: function ITALIC(children, _ref2) {
      var key = _ref2.key;
      return _react2.default.createElement(
        'em',
        { key: key },
        children
      );
    },
    UNDERLINE: function UNDERLINE(children, _ref3) {
      var key = _ref3.key;
      return _react2.default.createElement(
        'u',
        { key: key },
        children
      );
    },
    CODE: function CODE(children, _ref4) {
      var key = _ref4.key;
      return _react2.default.createElement(
        'span',
        { key: key },
        children
      );
    }
  },
  /**
   * Blocks receive children and depth
   * Note that children are an array of blocks with same styling,
   */
  blocks: {
    'unstyled': function unstyled(children) {
      return children.map(function (child) {
        return _react2.default.createElement(
          'p',
          null,
          child
        );
      });
    },
    'blockquote': function blockquote(children) {
      return _react2.default.createElement(
        'blockquote',
        null,
        addBreaklines(children)
      );
    },
    'header-one': function headerOne(children, _ref5) {
      var keys = _ref5.keys;
      return children.map(function (child, index) {
        return _react2.default.createElement(
          'h1',
          { key: index, id: keys[index] },
          child
        );
      });
    },
    'header-two': function headerTwo(children, _ref6) {
      var keys = _ref6.keys;
      return children.map(function (child, index) {
        return _react2.default.createElement(
          'h2',
          { key: index, id: keys[index] },
          child
        );
      });
    },
    'header-three': function headerThree(children, _ref7) {
      var keys = _ref7.keys;
      return children.map(function (child, index) {
        return _react2.default.createElement(
          'h3',
          { key: index, id: keys[index] },
          child
        );
      });
    },
    'header-four': function headerFour(children, _ref8) {
      var keys = _ref8.keys;
      return children.map(function (child, index) {
        return _react2.default.createElement(
          'h4',
          { key: index, id: keys[index] },
          child
        );
      });
    },
    'header-five': function headerFive(children, _ref9) {
      var keys = _ref9.keys;
      return children.map(function (child, index) {
        return _react2.default.createElement(
          'h5',
          { key: index, id: keys[index] },
          child
        );
      });
    },
    'header-six': function headerSix(children, _ref10) {
      var keys = _ref10.keys;
      return children.map(function (child, index) {
        return _react2.default.createElement(
          'h6',
          { key: index, id: keys[index] },
          child
        );
      });
    },

    // You can also access the original keys of the blocks
    'code-block': function codeBlock(children, _ref11) {
      var keys = _ref11.keys;
      return _react2.default.createElement(
        'pre',
        { key: keys[0] },
        addBreaklines(children)
      );
    },
    // or depth for nested lists
    'unordered-list-item': function unorderedListItem(children, _ref12) {
      var depth = _ref12.depth,
          keys = _ref12.keys;
      return _react2.default.createElement(
        'ul',
        { key: keys[keys.length - 1], className: 'ul-level-' + depth },
        children.map(function (child, index) {
          return _react2.default.createElement(
            'li',
            { key: index },
            child
          );
        })
      );
    },
    'ordered-list-item': function orderedListItem(children, _ref13) {
      var depth = _ref13.depth,
          keys = _ref13.keys;
      return _react2.default.createElement(
        'ol',
        { key: keys.join('|'), className: 'ol-level-' + depth },
        children.map(function (child, index) {
          return _react2.default.createElement(
            'li',
            { key: keys[index] },
            child
          );
        })
      );
    }
    // If your blocks use meta data it can also be accessed like keys
    // atomic: (children, { keys, data }) => children.map((child, i) => <Atomic key={keys[i]} {...data[i]}>{child}</Atomic>),
  },
  /**
   * Entities receive children and the entity data
   */
  entities: {
    //   // key is the entity key value from raw
    LINK: function LINK(children, data, _ref14) {
      var key = _ref14.key;
      return _react2.default.createElement(
        _Link2.default,
        { key: key, to: data.url },
        children
      );
    },
    BLOCK_ASSET: function BLOCK_ASSET(children, data, _ref15) {
      var key = _ref15.key;

      return _react2.default.createElement(_BlockAssetWrapper2.default, { key: key, data: data });
    },
    INLINE_ASSET: function INLINE_ASSET(children, data, _ref16) {
      var key = _ref16.key;

      return _react2.default.createElement(_InlineAssetWrapper2.default, { data: data, key: key });
    },
    NOTE_POINTER: function NOTE_POINTER(children, data, _ref17) {
      var key = _ref17.key;

      return _react2.default.createElement(_NotePointer2.default, { key: key, children: children, noteId: data.noteId });
    }
  }
};

/**
 * Renderer class for building raw-to-react rendering react component instances
 */

var Renderer = function (_Component) {
  (0, _inherits3.default)(Renderer, _Component);

  /**
   * constructor
   * @param {object} props - properties given to instance at instanciation
   */
  function Renderer(props) {
    (0, _classCallCheck3.default)(this, Renderer);
    return (0, _possibleConstructorReturn3.default)(this, (Renderer.__proto__ || (0, _getPrototypeOf2.default)(Renderer)).call(this, props));
  }

  /**
   * Determines whether to update the component or not
   * @param {object} nextProps - the future properties of the component
   * @return {boolean} shouldUpdate - yes or no
   */


  (0, _createClass3.default)(Renderer, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return true;
      // return this.props.raw !== nextProps.raw;
    }

    /**
     * Displays something when no suitable content state is provided to the renderer
     * @return {ReactElement} default message
     */

  }, {
    key: 'renderWarning',
    value: function renderWarning() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'p',
          null,
          'Intentionnellement vide.'
        )
      );
    }

    /**
     * Renders the component
     * @return {ReactElement} component - the component
     */

  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          raw = _props.raw,
          notesMode = _props.notesMode;

      if (!raw) {
        return this.renderWarning();
      }
      if (notesMode === 'foot') {
        renderers.entities.NOTE_POINTER = function (children, data, _ref18) {
          var key = _ref18.key;

          return _react2.default.createElement(_Footnote2.default, { key: key, children: children, noteId: data.noteId });
        };
      }
      var rendered = (0, _redraft2.default)(raw, renderers);
      // redraft can return a null if there's nothing to render
      if (!rendered) {
        return this.renderWarning();
      }
      return _react2.default.createElement(
        'div',
        null,
        rendered
      );
    }
  }]);
  return Renderer;
}(_react.Component);

/**
 * Component's properties types
 */


Renderer.propTypes = {
  /**
   * Draft-js raw representation of some contents
   * see https://draftjs.org/docs/api-reference-data-conversion.html
   */
  raw: _propTypes2.default.object
};

exports.default = Renderer;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/toConsumableArray");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _peritextRenderingUtils = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StaticReferences = function StaticReferences(_ref, _ref2) {
  var story = _ref.story,
      title = _ref.title,
      _ref$level = _ref.level,
      level = _ref$level === undefined ? 0 : _ref$level,
      id = _ref.id,
      propLinkComponent = _ref.LinkComponent,
      propMentionComponent = _ref.MentionComponent;
  var contextLinkComponent = _ref2.LinkComponent,
      contextMentionComponent = _ref2.MentionComponent;

  var LinkComponent = propLinkComponent || contextLinkComponent;
  var MentionComponent = propMentionComponent || contextMentionComponent;
  var citations = (0, _peritextRenderingUtils.buildCitations)(story);
  var references = (0, _peritextRenderingUtils.buildBibliography)(story, citations);
  return references.length ? _react2.default.createElement(
    'section',
    {
      id: id,
      className: "references-container separate-pages bookmark-title bookmark-level-" + level,
      title: 'Références'
    },
    _react2.default.createElement(
      'h1',
      null,
      title
    ),
    _react2.default.createElement(
      'ul',
      { className: 'mentions-container' },
      references.map(function (entry, index) {
        var entryName = entry.title;
        return _react2.default.createElement(
          'li',
          {
            key: index,
            id: entry.citationKey,
            className: 'mention-item'
          },
          _react2.default.createElement(
            'div',
            {
              className: 'index-list-title'
            },
            _react2.default.createElement('div', { dangerouslySetInnerHTML: {
                __html: entryName
              } })
          ),
          _react2.default.createElement(
            'div',
            { className: 'mentions-list' },
            'Mentions: ',
            entry.mentions.filter(function (mention) {
              return mention !== undefined && mention.contextContent;
            }).map(function (mention, count) {
              var _mention$contextConte = mention.contextContent,
                  targetContents = _mention$contextConte.targetContents,
                  contents = _mention$contextConte.contents,
                  sectionTitle = _mention$contextConte.sectionTitle,
                  sectionId = _mention$contextConte.sectionId,
                  id = mention.id;

              return _react2.default.createElement(MentionComponent, {
                key: count,
                href: '#' + id,
                sectionId: sectionId
              });
            }).reduce(function (prev, curr) {
              return [prev, ', ', curr];
            }, [])
          )
        );
      })
    )
  ) : null;
};

StaticReferences.contextTypes = {
  LinkComponent: _propTypes2.default.func,
  MentionComponent: _propTypes2.default.func
};

exports.default = StaticReferences;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _peritextRenderingUtils = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Glossary = function Glossary(_ref, _ref2) {
  var story = _ref.story,
      title = _ref.title,
      _ref$level = _ref.level,
      level = _ref$level === undefined ? 0 : _ref$level,
      id = _ref.id,
      propLinkComponent = _ref.LinkComponent,
      propMentionComponent = _ref.MentionComponent;
  var contextLinkComponent = _ref2.LinkComponent,
      contextMentionComponent = _ref2.MentionComponent;

  var LinkComponent = propLinkComponent || contextLinkComponent;
  var MentionComponent = propMentionComponent || contextMentionComponent;

  var glossary = (0, _peritextRenderingUtils.buildGlossary)(story);

  return glossary.length ? _react2.default.createElement(
    'section',
    {
      id: id,
      className: "glossary-container separate-pages bookmark-title bookmark-level-" + level,
      title: title
    },
    _react2.default.createElement(
      'h1',
      null,
      title
    ),
    _react2.default.createElement(
      'ul',
      { className: 'mentions-container' },
      glossary.map(function (entry, index) {
        var entryName = entry.title;
        return _react2.default.createElement(
          'li',
          {
            key: index,
            id: entry.resource.metadata.id,
            className: 'mention-item'
          },
          _react2.default.createElement(
            'div',
            {
              className: 'index-list-title'
            },
            entry.resource.data.name
          ),
          _react2.default.createElement(
            'div',
            { className: 'mentions-list' },
            'Mentions: ',
            entry.mentions.filter(function (mention) {
              return mention !== undefined && mention.contextContent;
            }).map(function (mention, count) {
              var _mention$contextConte = mention.contextContent,
                  targetContents = _mention$contextConte.targetContents,
                  contents = _mention$contextConte.contents,
                  sectionTitle = _mention$contextConte.sectionTitle,
                  sectionId = _mention$contextConte.sectionId,
                  id = mention.id;

              return _react2.default.createElement(MentionComponent, {
                key: count,
                href: '#' + id,
                sectionId: sectionId
              });
            }).reduce(function (prev, curr) {
              return [prev, ', ', curr];
            }, [])
          )
        );
      })
    )
  ) : null;
};

Glossary.contextTypes = {
  LinkComponent: _propTypes2.default.func,
  MentionComponent: _propTypes2.default.func
};

exports.default = Glossary;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _peritextRenderingUtils = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AuthorsIndex = function AuthorsIndex(_ref, _ref2) {
  var story = _ref.story,
      title = _ref.title,
      _ref$level = _ref.level,
      level = _ref$level === undefined ? 0 : _ref$level,
      id = _ref.id,
      propLinkComponent = _ref.LinkComponent,
      propMentionComponent = _ref.MentionComponent;
  var contextLinkComponent = _ref2.LinkComponent,
      contextMentionComponent = _ref2.MentionComponent;

  var LinkComponent = propLinkComponent || contextLinkComponent;
  var MentionComponent = propMentionComponent || contextMentionComponent;

  var authors = (0, _peritextRenderingUtils.buildAuthorsIndex)(story);

  return authors.length ? _react2.default.createElement(
    'section',
    {
      id: id,
      className: "authors-index-container separate-pages bookmark-title bookmark-level-" + level,
      title: title
    },
    _react2.default.createElement(
      'h1',
      null,
      title
    ),
    _react2.default.createElement(
      'ul',
      { className: 'mentions-container' },
      authors.sort(function (a, b) {
        if (a.id > b.id) {
          return 1;
        } else return -1;
      }).map(function (entry, index) {
        var entryName = entry.given + ' ' + entry.family;
        return _react2.default.createElement(
          'li',
          {
            key: index,
            id: entry.id,
            className: 'mention-item'
          },
          _react2.default.createElement(
            'div',
            {
              className: 'index-list-title'
            },
            entryName
          ),
          _react2.default.createElement(
            'div',
            { className: 'mentions-list' },
            'Mentions: ',
            entry.mentions.filter(function (mention) {
              return mention !== undefined && mention.contextContent;
            }).map(function (mention, count) {
              var _mention$contextConte = mention.contextContent,
                  targetContents = _mention$contextConte.targetContents,
                  contents = _mention$contextConte.contents,
                  sectionTitle = _mention$contextConte.sectionTitle,
                  sectionId = _mention$contextConte.sectionId,
                  id = mention.id;

              return _react2.default.createElement(MentionComponent, {
                key: count,
                href: '#' + id,
                sectionId: sectionId
              });
            }).reduce(function (prev, curr) {
              return [prev, ', ', curr];
            }, [])
          )
        );
      })
    )
  ) : null;
};

AuthorsIndex.contextTypes = {
  LinkComponent: _propTypes2.default.func,
  MentionComponent: _propTypes2.default.func
};

exports.default = AuthorsIndex;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(8);

var _keys2 = _interopRequireDefault(_keys);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Renderer = __webpack_require__(10);

var _Renderer2 = _interopRequireDefault(_Renderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var _ref$story = _ref.story,
      sectionsOrder = _ref$story.sectionsOrder,
      sections = _ref$story.sections,
      title = _ref.title,
      _ref$level = _ref.level,
      level = _ref$level === undefined ? 0 : _ref$level,
      id = _ref.id;
  return _react2.default.createElement(
    'section',
    {
      className: "notes-container bookmark-title separate-pages bookmark-level-" + level,
      title: title,
      id: id
    },
    _react2.default.createElement(
      'h1',
      { className: 'section-title' },
      title
    ),
    _react2.default.createElement(
      'ol',
      { className: 'end-notes' },
      sectionsOrder.reduce(function (results, sectionId) {
        return results.concat((0, _keys2.default)(sections[sectionId].notes).map(function (id) {
          return sections[sectionId].notes[id];
        }));
      }, []).map(function (note, index) {
        return _react2.default.createElement(
          'li',
          { id: 'note-content-' + note.id, key: index },
          _react2.default.createElement(
            'a',
            { href: '#note-pointer-' + note.id, className: 'note-number' },
            index + 1
          ),
          _react2.default.createElement(_Renderer2.default, { raw: note.editorState })
        );
      })
    )
  );
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("redraft");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders a link as a pure component
 * @param {object} props
 * @param {string} props.to - the url to point to
 * @param {array} props.children - children elements of the component
 * @return {ReactElement} component - the component
 */
/**
 * This module exports a stateless reusable external link component
 * ============
 * @module perinext/components/Link
 */
var Link = function Link(_ref) {
  var to = _ref.to,
      children = _ref.children;
  return _react2.default.createElement(
    'a',
    { href: to, target: 'blank' },
    children
  );
};

/**
 * Component's properties types
 */
Link.propTypes = {
  /**
   * url to point to
   */
  to: _propTypes2.default.string,
  /**
   * children react elements
   */
  children: _propTypes2.default.array
};

exports.default = Link;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This module exports a stateless reusable block asset wrapper component
 * It handles the connection to context's data and builds proper data to render the asset
 * ============
 */
var BlockAssetWrapper = function BlockAssetWrapper(_ref, context) {
  var data = _ref.data;

  var assetId = data.asset.id;
  var contextualization = context.story && context.story.contextualizations && context.story.contextualizations[assetId];
  if (!contextualization) {
    return null;
  }
  var story = context.story;
  var contextualizer = story.contextualizers[contextualization.contextualizerId];
  var resource = story.resources[contextualization.resourceId];
  var dimensions = context.dimensions || {};
  var fixedPresentationId = context.fixedPresentationId;
  var onPresentationExit = context.onPresentationExit;
  var inNote = context.inNote;
  var contextualizers = context.contextualizers;
  var contextualizerModule = contextualizers[contextualizer.type];

  var Component = contextualizerModule && contextualizerModule.BlockStatic;

  if (contextualization && Component) {
    var hideInCodexMode = contextualizer.visibility !== undefined ? !contextualizer.visibility.codex : false;
    return hideInCodexMode ? null : _react2.default.createElement(
      'figure',
      {
        className: 'block-contextualization-container ' + contextualizer.type,
        style: {
          position: 'relative',
          minHeight: contextualizer.type === 'data-presentation' ? dimensions.height : '20px'
        },
        id: assetId },
      _react2.default.createElement(Component, {
        resource: resource,
        contextualizer: contextualizer,
        contextualization: contextualization,

        fixed: fixedPresentationId === assetId,
        allowInteractions: inNote || fixedPresentationId === assetId
      }),
      _react2.default.createElement(
        'figcaption',
        null,
        _react2.default.createElement(
          'h4',
          null,
          contextualization.title || resource.metadata.title
        ),
        _react2.default.createElement(
          'p',
          null,
          contextualization.legend || resource.metadata.description
        ),
        resource.metadata.source && _react2.default.createElement(
          'p',
          null,
          'Source: ',
          _react2.default.createElement(
            'i',
            null,
            resource.metadata.source
          )
        )
      )
    );
  } else {
    return null;
  }
};
/**
 * Component's properties types
 */
BlockAssetWrapper.propTypes = {
  /**
   * Corresponds to the data initially embedded in a draft-js entity
   */
  data: _propTypes2.default.shape({
    asset: _propTypes2.default.shape({
      id: _propTypes2.default.string
    })
  })
};
/**
 * Component's context used properties
 */
BlockAssetWrapper.contextTypes = {
  /**
   * The active story data
   */
  story: _propTypes2.default.object,
  /**
   * Dimensions of the wrapping element
   */
  dimensions: _propTypes2.default.object,
  /**
   * Id of the presentation being displayed full screen if any
   */
  fixedPresentationId: _propTypes2.default.string,
  /**
   * Whether the block asset is displayed in a note (and not in main content)
   */
  inNote: _propTypes2.default.bool,

  contextualizers: _propTypes2.default.object
};

exports.default = BlockAssetWrapper;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InlineAssetWrapper = function InlineAssetWrapper(_ref, context) {
  var data = _ref.data;
  var story = context.story;

  var assetId = data.asset && data.asset.id;
  if (!assetId || !story) {
    return null;
  }
  var contextualization = story.contextualizations[assetId];
  if (!contextualization) {
    return null;
  }

  var contextualizer = story.contextualizers[contextualization.contextualizerId];
  var resource = story.resources[contextualization.resourceId];

  var contextualizers = context.contextualizers;
  var contextualizerModule = contextualizers[contextualizer.type];

  var Component = contextualizerModule && contextualizerModule.InlineStatic;

  if (contextualizer && Component) {
    return _react2.default.createElement(Component, {
      contextualization: contextualization,
      contextualizer: contextualizer,
      resource: resource
    });
  }
  return null;
};

/**
 * Component's properties types
 */
InlineAssetWrapper.propTypes = {
  /**
   * Corresponds to the data initially embedded in a draft-js entity
   */
  data: _propTypes2.default.shape({
    asset: _propTypes2.default.shape({
      id: _propTypes2.default.string
    })
  })
};
/**
 * Component's context used properties
 */
InlineAssetWrapper.contextTypes = {
  story: _propTypes2.default.object,
  contextualizers: _propTypes2.default.object
};

exports.default = InlineAssetWrapper;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders a not pointer as a pure component
 * @param {object} props
 * @param {array} props.children - children elements of the component
 * @param {array} props.noteId - the id of the note to point to
 * @param {object} context - the context data of the component
 * @return {ReactElement} component - the component
 */
/**
 * This module exports a stateless reusable note pointer component
 * ============
 * @module quinoa-story-player/components/NotePointer
 */
var NotePointer = function NotePointer(_ref, context) {
  var children = _ref.children,
      _ref$noteId = _ref.noteId,
      noteId = _ref$noteId === undefined ? '' : _ref$noteId;

  var notes = context.notes;
  var NoteLinkComponent = context.NoteLinkComponent;
  if (notes) {
    var note = notes[noteId];
    if (note) {
      return _react2.default.createElement(
        'sup',
        { className: 'note-pointer', id: 'note-pointer-' + noteId },
        NoteLinkComponent ? _react2.default.createElement(
          NoteLinkComponent,
          { href: '#note-content-' + noteId },
          note.order,
          children
        ) : _react2.default.createElement(
          'a',
          { href: '#note-content-' + noteId },
          note.order,
          children
        )
      );
    }
    return null;
  }
  return null;
};

/**
 * Component's properties types
 */
NotePointer.propTypes = {
  /**
   * Children react components
   */
  children: _propTypes2.default.array,
  /**
   * id of the note to render
   */
  noteId: _propTypes2.default.string
};

/**
 * Component's context used properties
 */
NotePointer.contextTypes = {
  /**
   * Map of available notes to look into
   */
  notes: _propTypes2.default.object,
  /**
   * Triggers a callback upstream when the pointer is clicked
   */
  onNoteContentPointerClick: _propTypes2.default.func,

  NoteLinkComponent: _propTypes2.default.func
};

exports.default = NotePointer;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FootnoteRenderer = __webpack_require__(33);

var _FootnoteRenderer2 = _interopRequireDefault(_FootnoteRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders a not pointer as a pure component
 * @param {object} props
 * @param {array} props.children - children elements of the component
 * @param {array} props.noteId - the id of the note to point to
 * @param {object} context - the context data of the component
 * @return {ReactElement} component - the component
 */
var Footnote = function Footnote(_ref, context) {
  var children = _ref.children,
      _ref$noteId = _ref.noteId,
      noteId = _ref$noteId === undefined ? '' : _ref$noteId;

  var notes = context.notes;
  if (notes) {
    var note = notes[noteId];
    if (note) {
      return _react2.default.createElement(
        'sup',
        { className: 'footnote', id: 'note-pointer-' + noteId },
        _react2.default.createElement(
          'span',
          { className: 'footnote-content' },
          _react2.default.createElement(_FootnoteRenderer2.default, { raw: note.editorState })
        )
      );
    }
    return null;
  }
  return null;
};

/**
 * Component's properties types
 */
/**
 * This module exports a stateless reusable note pointer component
 * ============
 * @module quinoa-story-player/components/NotePointer
 */
Footnote.propTypes = {
  /**
   * Children react components
   */
  children: _propTypes2.default.array,
  /**
   * id of the note to render
   */
  noteId: _propTypes2.default.string
};

/**
 * Component's context used properties
 */
Footnote.contextTypes = {
  /**
   * Map of available notes to look into
   */
  notes: _propTypes2.default.object
};

exports.default = Footnote;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Renderer = __webpack_require__(10);

var _Renderer2 = _interopRequireDefault(_Renderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Section = function (_Component) {
  (0, _inherits3.default)(Section, _Component);

  function Section(props) {
    (0, _classCallCheck3.default)(this, Section);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Section.__proto__ || (0, _getPrototypeOf2.default)(Section)).call(this, props));

    _this.getChildContext = function () {
      return {
        notes: _this.props.section.notes
      };
    };

    _this.render = function () {
      var _this$props = _this.props,
          _this$props$section = _this$props.section,
          id = _this$props$section.id,
          _this$props$section$m = _this$props$section.metadata,
          title = _this$props$section$m.title,
          level = _this$props$section$m.level,
          subtitle = _this$props$section$m.subtitle,
          _this$props$section$m2 = _this$props$section$m.authors,
          authors = _this$props$section$m2 === undefined ? [] : _this$props$section$m2,
          contents = _this$props$section.contents,
          notes = _this$props$section.notes,
          notesPosition = _this$props.notesPosition;

      return _react2.default.createElement(
        'section',
        {
          className: "section-container bookmark-title separate-pages bookmark-level-" + level,
          title: title,
          id: id
        },
        _react2.default.createElement(
          'h1',
          { className: 'section-title' },
          title
        ),
        subtitle && _react2.default.createElement(
          'h2',
          { className: 'section-subtitle' },
          subtitle
        ),
        _react2.default.createElement(
          'h3',
          { className: 'section-authors' },
          authors.length > 0 && authors.map(function (author, index) {
            return _react2.default.createElement(
              'span',
              { key: index },
              author.given,
              ' ',
              author.family
            );
          }).reduce(function (prev, curr, index) {
            return index > 0 ? [prev, ', ', curr] : [curr];
          }, [])
        ),
        _react2.default.createElement(_Renderer2.default, { raw: contents, notesMode: notesPosition })
      );
    };

    return _this;
  }

  return Section;
}(_react.Component);

exports.default = Section;


Section.childContextTypes = {
  notes: _propTypes2.default.object
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Template = __webpack_require__(25);

var _Template2 = _interopRequireDefault(_Template);

var _DecoratedSection = __webpack_require__(38);

var _DecoratedSection2 = _interopRequireDefault(_DecoratedSection);

var _References = __webpack_require__(13);

var _References2 = _interopRequireDefault(_References);

var _Glossary = __webpack_require__(14);

var _Glossary2 = _interopRequireDefault(_Glossary);

var _AuthorsIndex = __webpack_require__(15);

var _AuthorsIndex2 = _interopRequireDefault(_AuthorsIndex);

var _EndNotes = __webpack_require__(16);

var _EndNotes2 = _interopRequireDefault(_EndNotes);

var _DecoratedEndNotes = __webpack_require__(39);

var _DecoratedEndNotes2 = _interopRequireDefault(_DecoratedEndNotes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stylesheet = __webpack_require__(40);

var metadata = {
  name: 'codex garlic',
  type: 'peritext-codex-template',
  id: 'codex-garlic',
  options: [{
    id: 'displayFrontCodexCover',
    type: 'boolean',
    title: {
      fr: 'Afficher la première de couverture',
      en: 'Display front cover page'
    }
  }, {
    id: 'displayBackCodexCover',
    type: 'boolean',
    title: {
      fr: 'Afficher la quatrième de couverture',
      en: 'Display back cover page'
    }
  }, {
    id: 'displaySecondFront',
    type: 'boolean',
    title: {
      fr: 'Afficher la deuxième de couverture',
      en: 'Display "deuxième de couverture"'
    }
  }, {
    type: 'select',
    id: 'staticNotesPosition',
    title: {
      fr: 'Position des notes',
      en: 'Notes position'
    },
    options: [{
      id: 'foot',
      labels: {
        fr: 'Fin de page',
        en: 'Page end'
      }
    }, {
      id: 'end',
      labels: {
        fr: 'Fin de récit',
        en: 'Story end'
      }
    }]
  }]
};

exports.default = {
  component: _Template2.default,
  DecoratedSection: _DecoratedSection2.default,
  EndNotes: _EndNotes2.default,
  DecoratedEndNotes: _DecoratedEndNotes2.default,
  References: _References2.default,
  Glossary: _Glossary2.default,
  AuthorsIndex: _AuthorsIndex2.default,
  metadata: metadata,
  typefaceNames: ['roboto', 'merriweather']
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = __webpack_require__(11);

var _extends3 = _interopRequireDefault(_extends2);

var _keys = __webpack_require__(8);

var _keys2 = _interopRequireDefault(_keys);

var _toConsumableArray2 = __webpack_require__(12);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactCiteproc = __webpack_require__(9);

var _peritextRenderingUtils = __webpack_require__(6);

var _Head = __webpack_require__(26);

var _Head2 = _interopRequireDefault(_Head);

var _LayoutProvider = __webpack_require__(27);

var _LayoutProvider2 = _interopRequireDefault(_LayoutProvider);

var _FrontCover = __webpack_require__(29);

var _FrontCover2 = _interopRequireDefault(_FrontCover);

var _SecondFront = __webpack_require__(30);

var _SecondFront2 = _interopRequireDefault(_SecondFront);

var _BackCover = __webpack_require__(31);

var _BackCover2 = _interopRequireDefault(_BackCover);

var _TableOfContents = __webpack_require__(32);

var _TableOfContents2 = _interopRequireDefault(_TableOfContents);

var _References = __webpack_require__(13);

var _References2 = _interopRequireDefault(_References);

var _Glossary = __webpack_require__(14);

var _Glossary2 = _interopRequireDefault(_Glossary);

var _AuthorsIndex = __webpack_require__(15);

var _AuthorsIndex2 = _interopRequireDefault(_AuthorsIndex);

var _EndNotes = __webpack_require__(16);

var _EndNotes2 = _interopRequireDefault(_EndNotes);

var _DefaultLinkComponent = __webpack_require__(35);

var _DefaultLinkComponent2 = _interopRequireDefault(_DefaultLinkComponent);

var _DefaultMentionComponent = __webpack_require__(36);

var _DefaultMentionComponent2 = _interopRequireDefault(_DefaultMentionComponent);

var _Section = __webpack_require__(23);

var _Section2 = _interopRequireDefault(_Section);

var _defaultLocales = __webpack_require__(37);

var _defaultLocales2 = _interopRequireDefault(_defaultLocales);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import NotesContainer from '../components/NotesContainer';

var EmptyPage = function EmptyPage() {
  return _react2.default.createElement('div', { className: 'empty-page' });
};

var Template = function (_Component) {
  (0, _inherits3.default)(Template, _Component);

  function Template(props) {
    (0, _classCallCheck3.default)(this, Template);
    return (0, _possibleConstructorReturn3.default)(this, (Template.__proto__ || (0, _getPrototypeOf2.default)(Template)).call(this, props));
  }

  (0, _createClass3.default)(Template, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        LinkComponent: this.props.LinkComponent || _DefaultLinkComponent2.default,
        MentionComponent: this.props.MentionComponent || _DefaultMentionComponent2.default
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          story = _props.story,
          _props$locales = _props.locales,
          locales = _props$locales === undefined ? _defaultLocales2.default : _props$locales,
          contextualizers = _props.contextualizers,
          locale = _props.locale;
      var _story$metadata = story.metadata,
          pageTitle = _story$metadata.title,
          _story$metadata$autho = _story$metadata.authors,
          authors = _story$metadata$autho === undefined ? [] : _story$metadata$autho,
          _story$metadata$tags = _story$metadata.tags,
          tags = _story$metadata$tags === undefined ? [] : _story$metadata$tags,
          _story$metadata$descr = _story$metadata.description,
          description = _story$metadata$descr === undefined ? '' : _story$metadata$descr,
          _story$metadata$url = _story$metadata.url,
          url = _story$metadata$url === undefined ? '' : _story$metadata$url,
          _story$settings = story.settings,
          codex = _story$settings.css.codex,
          _story$settings$displ = _story$settings.displayFrontCodexCover,
          displayFrontCodexCover = _story$settings$displ === undefined ? true : _story$settings$displ,
          _story$settings$displ2 = _story$settings.displayBackCodexCover,
          displayBackCodexCover = _story$settings$displ2 === undefined ? true : _story$settings$displ2,
          _story$settings$displ3 = _story$settings.displaySecondFront,
          displaySecondFront = _story$settings$displ3 === undefined ? true : _story$settings$displ3;

      var citations = (0, _peritextRenderingUtils.buildCitations)(story);

      var citationStyle = story.settings.citationStyle.data;
      var citationLocale = story.settings.citationLocale.data;
      var notesPosition = story.settings.options.staticNotesPosition || 'foot';
      var toc = [].concat((0, _toConsumableArray3.default)(story.sectionsOrder.map(function (sectionId) {
        var section = story.sections[sectionId];
        return {
          id: sectionId,
          title: section.metadata.title,
          level: section.metadata.level,
          component: _Section2.default,
          props: {
            section: section,
            notesPosition: notesPosition
          }
        };
      })), [
      // references list
      (0, _keys2.default)(story.resources).length > 0 ? {
        id: 'static-references',
        title: locales.references,
        component: _References2.default,
        level: 0,
        props: {
          story: story
        }
      } : undefined,
      // glossary list
      (0, _keys2.default)(story.resources).filter(function (rId) {
        return story.resources[rId].metadata.type === 'glossary';
      }).length > 0 ? {
        id: 'static-glossary',
        title: locales.glossary,
        component: _Glossary2.default,
        level: 0,
        props: {
          story: story
        }
      } : undefined,
      // authors index list
      (0, _keys2.default)(story.resources).filter(function (key) {
        var res = story.resources[key];
        var authors = res.authors;
        return authors && authors.length;
      }).length > 0 ? {
        id: 'static-authors-index',
        title: locales.authorsIndex,
        component: _AuthorsIndex2.default,
        level: 0,
        props: {
          story: story
        }
      } : undefined]).filter(function (part) {
        return part !== undefined;
      });
      if (notesPosition === 'end') {
        toc.push({
          id: 'end-notes',
          title: locales.notes,
          component: _EndNotes2.default,
          level: 0,
          props: {
            story: story
          }
        });
      }
      return _react2.default.createElement(
        'html',
        null,
        _react2.default.createElement(_Head2.default, {
          pageTitle: pageTitle,
          authors: authors,
          tags: tags,
          description: description,
          url: url
        }),
        _react2.default.createElement(
          'body',
          null,
          _react2.default.createElement(
            _LayoutProvider2.default,
            {
              contextualizers: contextualizers,
              story: story,
              locale: locale
            },
            _react2.default.createElement(
              'section',
              { className: 'contents-wrapper' },
              _react2.default.createElement(
                _reactCiteproc.ReferencesManager,
                {
                  style: citationStyle,
                  locale: citationLocale,
                  items: citations.citationItems,
                  citations: citations.citationData,
                  componentClass: 'references-manager'
                },
                displayFrontCodexCover && _react2.default.createElement(_FrontCover2.default, { story: story }),
                _react2.default.createElement(EmptyPage, null),
                displaySecondFront && _react2.default.createElement(_SecondFront2.default, { story: story }),
                displaySecondFront && _react2.default.createElement(EmptyPage, null),
                _react2.default.createElement(_TableOfContents2.default, { title: locales.tableOfContents, toc: toc }),
                _react2.default.createElement(EmptyPage, null),
                toc.map(function (item, index) {
                  var Component = item.component;
                  return _react2.default.createElement(Component, (0, _extends3.default)({
                    key: index,
                    id: item.id,
                    title: item.title,
                    level: item.level
                  }, item.props));
                }),
                displayBackCodexCover && _react2.default.createElement(EmptyPage, null),
                displayBackCodexCover && _react2.default.createElement(_BackCover2.default, { story: story })
              )
            )
          ),
          _react2.default.createElement(
            'style',
            null,
            codex
          )
        )
      );
    }
  }]);
  return Template;
}(_react.Component);

exports.default = Template;


Template.childContextTypes = {
  LinkComponent: _propTypes2.default.func,
  MentionComponent: _propTypes2.default.func
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var pageTitle = _ref.pageTitle,
      _ref$authors = _ref.authors,
      authors = _ref$authors === undefined ? [] : _ref$authors,
      _ref$tags = _ref.tags,
      tags = _ref$tags === undefined ? [] : _ref$tags,
      _ref$description = _ref.description,
      description = _ref$description === undefined ? '' : _ref$description,
      _ref$url = _ref.url,
      url = _ref$url === undefined ? '' : _ref$url;

  var authorsStr = authors.map(function (author) {
    return author.given + ' ' + author.family;
  }).join(', ');
  return _react2.default.createElement(
    'head',
    null,
    _react2.default.createElement(
      'title',
      null,
      pageTitle
    ),
    _react2.default.createElement('meta', { name: 'generator', content: 'peritext' }),
    _react2.default.createElement('meta', { name: 'DC.Title', lang: 'fr', content: pageTitle }),
    _react2.default.createElement('meta', { name: 'DC.Date.created', schema: 'W3CDTF', content: new Date().toISOString() }),
    _react2.default.createElement('meta', { name: 'author', content: authorsStr }),
    _react2.default.createElement('meta', { name: 'keywords', content: tags.join(',') }),
    _react2.default.createElement('meta', { name: 'description', content: description }),
    _react2.default.createElement('meta', { name: 'viewport', content: 'user-scalable=no,width=device-width' }),
    _react2.default.createElement('meta', { name: 'twitter:card', value: 'summary' }),
    _react2.default.createElement('meta', { name: 'twitter:site', content: url }),
    _react2.default.createElement('meta', { name: 'twitter:title', content: pageTitle }),
    _react2.default.createElement('meta', { name: 'twitter:description', content: description }),
    _react2.default.createElement('meta', { itemProp: 'name', content: pageTitle }),
    _react2.default.createElement('meta', { itemProp: 'description', content: description }),
    _react2.default.createElement('meta', { property: 'og:title', content: pageTitle }),
    _react2.default.createElement('meta', { property: 'og:type', content: 'website' }),
    _react2.default.createElement('meta', { property: 'og:url', content: url }),
    _react2.default.createElement('meta', { property: 'og:description', content: description })
  );
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _toConsumableArray2 = __webpack_require__(12);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _keys = __webpack_require__(8);

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp, _initialiseProps;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _garlic = __webpack_require__(28);

var _garlic2 = _interopRequireDefault(_garlic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LayoutProvider = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(LayoutProvider, _Component);

  function LayoutProvider(props) {
    (0, _classCallCheck3.default)(this, LayoutProvider);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LayoutProvider.__proto__ || (0, _getPrototypeOf2.default)(LayoutProvider)).call(this, props));

    _initialiseProps.call(_this);

    _this.state = {
      styles: _this.updateStyles(props)
    };
    return _this;
  }

  (0, _createClass3.default)(LayoutProvider, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.story !== nextProps.story || this.props.contextualizers !== nextProps.contextualizers) {
        this.setState({
          styles: this.updateStyles(nextProps)
        });
      }
    }
  }]);
  return LayoutProvider;
}(_react.Component), _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.getChildContext = function () {
    return {
      story: _this2.props.story,
      contextualizers: _this2.props.contextualizers
    };
  };

  this.updateStyles = function (props) {
    var _props$story = props.story,
        story = _props$story === undefined ? {
      settings: {}
    } : _props$story,
        _props$contextualizer = props.contextualizers,
        contextualizers = _props$contextualizer === undefined ? {} : _props$contextualizer;


    var contextualizersStyles = (0, _keys2.default)(contextualizers).map(function (type) {
      return contextualizers[type] && contextualizers[type].defaultCss;
    }).join('\n');
    var storyStyles = story.settings.css && story.settings.css.codex ? story.settings.css.codex : '';

    return [_garlic2.default].concat((0, _toConsumableArray3.default)(contextualizersStyles), [storyStyles]).join('\n');
  };

  this.render = function () {
    var styles = _this2.state.styles;
    var children = _this2.props.children;

    return _react2.default.createElement(
      'section',
      { className: 'garlic-player' },
      children,
      _react2.default.createElement('style', { dangerouslySetInnerHTML: {
          __html: styles
        }
      })
    );
  };
}, _temp);
exports.default = LayoutProvider;


LayoutProvider.propTypes = {
  story: _propTypes2.default.object,
  contextualizers: _propTypes2.default.object
};

LayoutProvider.childContextTypes = {
  story: _propTypes2.default.object,
  contextualizers: _propTypes2.default.object
};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\n * Template-specific reusable elements (variables, mixins, abstract classes)\n */\nbody {\n  font-family: Merriweather, serif;\n  color: #414E4D; }\n\n* {\n  prince-footnote-policy: keep-with-block;\n  prince-bookmark-label: none;\n  quotes: \"« \" \" »\"; }\n\np {\n  text-indent: 0.6664rem; }\n\np,\nli,\npre,\nblockquote,\nfigcaption {\n  line-height: 0.79968rem;\n  font-size: 0.576rem; }\n\nli {\n  margin-bottom: 0.6664rem; }\n\nfigure {\n  background: #FDFFF8;\n  padding: 0.4rem;\n  font-size: 0.36rem; }\n\na {\n  color: inherit;\n  text-decoration: none;\n  border-bottom: 1px solid #F32E36; }\n\nh1, h2, h3, h4, h5, h6 {\n  font-family: Roboto, serif;\n  page-break-inside: avoid; }\n\n.section-title {\n  font-size: 2.3593rem; }\n\nh1 {\n  font-size: 1.47456rem; }\n\nh2 {\n  font-size: 0.9216rem; }\n\nh3 {\n  font-size: 0.576rem; }\n\n.block-contextualization-container,\nsvg,\nimg {\n  max-width: 100%;\n  overflow: hidden; }\n\n/**\n * Notes styling\n */\n.footnote {\n  display: prince-footnote;\n  counter-increment: footnote;\n  footnote-display: inline; }\n\n.footnote-content {\n  font-size: 0.36rem; }\n  .footnote-content .footnote-p,\n  .footnote-content .footnote-h1,\n  .footnote-content .footnote-h2,\n  .footnote-content .footnote-h3,\n  .footnote-content .footnote-h4,\n  .footnote-content .footnote-h5,\n  .footnote-content .footnote-h6,\n  .footnote-content .footnote-ul,\n  .footnote-content .footnote-ol,\n  .footnote-content .footnote-li,\n  .footnote-content .footnote-pre,\n  .footnote-content .footnote-blockquote {\n    display: block; }\n  .footnote-content .footnote-p {\n    text-indent: 0.4rem; }\n  .footnote-content .footnote-h1,\n  .footnote-content .footnote-h2,\n  .footnote-content .footnote-h3,\n  .footnote-content .footnote-h4,\n  .footnote-content .footnote-h5,\n  .footnote-content .footnote-h6 {\n    font-size: 0.576rem; }\n\n.footnote::footnote-call {\n  content: counter(footnote);\n  font-size: 83%;\n  vertical-align: super;\n  line-height: none; }\n\n@page {\n  padding: 1cm;\n  @footnotes {\n    padding-top: 0.4rem; } }\n\nimg {\n  width: 9999em;\n  max-width: 100%;\n  height: auto;\n  max-height: 100%; }\n\n.section-container {\n  text-align: justify;\n  text-justify: inter-word; }\n\n@page {\n  @bottom {\n    content: counter(page); } }\n\n.table-of-contents-container a::after,\n.table-of-figures-container a::after {\n  content: leader(\".\") target-counter(attr(href), page); }\n\n.page-link {\n  content: target-counter(attr(href), page); }\n\n.separate-pages {\n  page-break-before: always;\n  page-break-after: always; }\n\n.empty-page {\n  page-break-after: always;\n  page: empty-page; }\n\n@page empty-page {\n  @bottom {\n    content: none; } }\n\n.bookmark-level-0 {\n  prince-bookmark-level: 1; }\n\n.bookmark-level-1 {\n  prince-bookmark-level: 2; }\n\n.bookmark-level-2 {\n  prince-bookmark-level: 3; }\n\n.bookmark-level-3 {\n  prince-bookmark-level: 4; }\n\n.bookmark-level-4 {\n  prince-bookmark-level: 5; }\n\n.bookmark-level-5 {\n  prince-bookmark-level: 6; }\n\n.bookmark-level-6 {\n  prince-bookmark-level: 7; }\n\n.bookmark-title {\n  prince-bookmark-label: attr(title); }\n\n/**\n * Cover styling\n */\n#front-cover {\n  page: front-cover; }\n\n.front-cover-container {\n  page-break-after: always;\n  page-break-before: never;\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  justify-contents: center; }\n  .front-cover-container.with-image .cover-content {\n    display: none; }\n  .front-cover-container .cover-content {\n    padding: 5cm; }\n    .front-cover-container .cover-content h1, .front-cover-container .cover-content h2, .front-cover-container .cover-content h3 {\n      color: #414E4D;\n      background: #FDFFF8;\n      padding: 0.6664rem;\n      display: inline-block; }\n    .front-cover-container .cover-content h1 {\n      font-size: 2.3593rem; }\n\n@page front-cover {\n  background: #414E4D;\n  color: #FDFFF8; }\n\n#cover-image {\n  position: absolute;\n  min-height: 100%;\n  min-width: 100%; }\n\n.cover-content {\n  position: absolute;\n  left: 1rem;\n  top: 1rem; }\n\n@page :first {\n  margin: 0;\n  page-break-after: always;\n  padding: 0;\n  @bottom {\n    content: none; } }\n\n.second-front-cover-container {\n  text-align: center;\n  padding-top: 10cm;\n  page: second-front; }\n  .second-front-cover-container h1, .second-front-cover-container h2, .second-front-cover-container h3 {\n    font-family: Merriweather, serif; }\n\n@page second-front {\n  @bottom {\n    content: none; } }\n\n@page back-cover {\n  margin: 0;\n  page-break-before: always;\n  background: #414E4D;\n  color: #FDFFF8;\n  padding: 5cm;\n  @bottom {\n    content: none; } }\n\n.back-cover-container {\n  page: back-cover;\n  page-break-before: always;\n  font-size: 1.47456rem; }\n  .back-cover-container p {\n    font-size: 0.576rem; }\n  .back-cover-container p, .back-cover-container h2, .back-cover-container h3 {\n    color: #FDFFF8; }\n  .back-cover-container .peritext-static-back-subtitle {\n    font-style: italic;\n    margin-left: 0.6664rem; }\n\n.table-of-contents {\n  page: table-of-contents; }\n\n/**\n * Special pages\n */\n.mentions-container {\n  padding: 0;\n  margin: 0; }\n  .mentions-container ul, .mentions-container ol {\n    padding: 0;\n    margin: 0; }\n  .mentions-container li {\n    list-style-type: none;\n    padding: 0;\n    margin-bottom: 0.6664rem; }\n  .mentions-container .mentions-list {\n    font-size: 0.36rem;\n    margin-top: 0.4rem;\n    font-style: italic;\n    text-indent: 0.4rem; }\n\n/**\n * Fix for citations numbering\n */\n.csl-left-margin,\n.csl-right-inline {\n  display: inline-block; }\n\n.end-notes {\n  padding: 0;\n  margin: 0; }\n  .end-notes li {\n    margin: 0;\n    padding: 0;\n    margin-bottom: 0.6664rem;\n    list-style-type: none; }\n    .end-notes li > div {\n      margin-top: -0.864rem;\n      margin-left: 0.6664rem; }\n\n/**\n * Figures\n */\ntable {\n  max-width: 100%;\n  font-size: 0.36rem;\n  font-family: Roboto, serif;\n  text-align: left;\n  width: 90%;\n  border-collapse: collapse;\n  border: solid 1px #414E4D;\n  font-weight: 200; }\n\ntable thead tr {\n  background: #414E4D;\n  color: white; }\n\ntable tbody tr:nth-child(even) {\n  background: #FDFFF8; }\n\ntable th {\n  border: solid 1px #414E4D;\n  padding: 0.4rem; }\n\n/**\n * Contextualizers setting\n */\n.peritext-contextualizer-codefiles {\n  font-family: monospace; }\n  .peritext-contextualizer-codefiles pre {\n    counter-reset: line; }\n  .peritext-contextualizer-codefiles .code-line {\n    display: block;\n    line-height: 0.6664rem; }\n    .peritext-contextualizer-codefiles .code-line:before {\n      width: 0.6664rem;\n      text-align: right;\n      counter-increment: line;\n      content: counter(line);\n      display: inline-block;\n      border-right: 1px solid #ddd;\n      padding: 0 .5em;\n      margin-right: .5em;\n      color: #888; }\n"

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var metadata = _ref.story.metadata;
  return _react2.default.createElement(
    "section",
    {
      id: "front-cover",
      className: "front-cover-container" + (metadata.covers && metadata.covers.codex ? ' with-image' : '')
    },
    metadata.covers && metadata.covers.codex && _react2.default.createElement("img", { id: "cover-image", src: metadata.covers.codex }),
    _react2.default.createElement(
      "div",
      { className: "cover-content" },
      _react2.default.createElement(
        "h1",
        { className: "peritext-static-title" },
        metadata.title
      ),
      metadata.subtitle && _react2.default.createElement(
        "h2",
        { className: "peritext-static-subtitle" },
        metadata.subtitle
      ),
      _react2.default.createElement(
        "h3",
        { className: "peritext-static-authors" },
        metadata.authors && metadata.authors.map(function (author, index) {
          return _react2.default.createElement(
            "span",
            { key: index },
            author.given,
            " ",
            author.family
          );
        }).reduce(function (prev, curr, index) {
          return index > 0 ? [prev, ', ', curr] : [curr];
        }, [])
      )
    )
  );
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var metadata = _ref.story.metadata;
  return _react2.default.createElement(
    "section",
    {
      id: "second-front-cover",
      className: "second-front-cover-container" + (metadata.covers && metadata.covers.codex ? ' with-image' : '')
    },
    _react2.default.createElement(
      "div",
      { className: "cover-content" },
      _react2.default.createElement(
        "h1",
        { className: "peritext-static-title" },
        metadata.title
      ),
      metadata.subtitle && _react2.default.createElement(
        "h2",
        { className: "peritext-static-subtitle" },
        metadata.subtitle
      ),
      _react2.default.createElement(
        "h3",
        { className: "peritext-static-authors" },
        metadata.authors && metadata.authors.map(function (author, index) {
          return _react2.default.createElement(
            "span",
            { key: index },
            author.given,
            " ",
            author.family
          );
        }).reduce(function (prev, curr, index) {
          return index > 0 ? [prev, ', ', curr] : [curr];
        }, [])
      )
    )
  );
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var metadata = _ref.story.metadata;
  return _react2.default.createElement(
    "section",
    {
      id: "back-cover",
      className: "back-cover-container"
    },
    _react2.default.createElement(
      "h2",
      { className: "peritext-static-back-title" },
      metadata.title
    ),
    metadata.subtitle && _react2.default.createElement(
      "h3",
      { className: "peritext-static-back-subtitle" },
      metadata.subtitle
    ),
    metadata.authors && _react2.default.createElement(
      "h3",
      { className: "peritext-static-authors" },
      metadata.authors.map(function (author, index) {
        return _react2.default.createElement(
          "span",
          { key: index },
          author.given,
          " ",
          author.family
        );
      }).reduce(function (prev, curr, index) {
        return index > 0 ? [prev, ', ', curr] : [curr];
      }, [])
    ),
    metadata.description && _react2.default.createElement(
      "div",
      { className: "description" },
      metadata.description.split('\n').map(function (content, id) {
        return _react2.default.createElement(
          "p",
          { key: id },
          content
        );
      })
    )
  );
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TocElement = function TocElement(_ref) {
  var title = _ref.title,
      id = _ref.id,
      _ref$level = _ref.level,
      level = _ref$level === undefined ? 0 : _ref$level,
      _ref$padding = _ref.padding,
      padding = _ref$padding === undefined ? '1' : _ref$padding;
  return _react2.default.createElement(
    'section',
    {
      className: 'table-of-contents-element-container',
      style: { paddingLeft: level * padding + 'cm' }
    },
    _react2.default.createElement(
      'a',
      { href: '#' + id },
      title
    )
  );
};

exports.default = function (_ref2) {
  var toc = _ref2.toc,
      title = _ref2.title;
  return _react2.default.createElement(
    'section',
    {
      title: title,
      className: 'table-of-contents-container separate-pages bookmark-title bookmark-level-0'
    },
    _react2.default.createElement(
      'h2',
      null,
      title
    ),
    _react2.default.createElement(
      'section',
      { className: 'table-of-contents-elements-container' },
      toc.map(function (item, index) {
        return _react2.default.createElement(TocElement, { key: index, title: item.title, id: item.id, level: item.level });
      })
    )
  );
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _defineProperty2 = __webpack_require__(34);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _redraft = __webpack_require__(17);

var _redraft2 = _interopRequireDefault(_redraft);

var _Link = __webpack_require__(18);

var _Link2 = _interopRequireDefault(_Link);

var _BlockAssetWrapper = __webpack_require__(19);

var _BlockAssetWrapper2 = _interopRequireDefault(_BlockAssetWrapper);

var _InlineAssetWrapper = __webpack_require__(20);

var _InlineAssetWrapper2 = _interopRequireDefault(_InlineAssetWrapper);

var _NotePointer = __webpack_require__(21);

var _NotePointer2 = _interopRequireDefault(_NotePointer);

var _Footnote = __webpack_require__(22);

var _Footnote2 = _interopRequireDefault(_Footnote);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// just a helper to add a <br /> after each block
/**
 * This module exports a statefull reusable draft-js raw-to-react renderer component
 * It wrapps around the redraft engine that converts draft-s raw to a react representation,
 * providing it specific settings and callbacks.
 */
var addBreaklines = function addBreaklines(children) {
  return children.map(function (child) {
    return [child, _react2.default.createElement('br', null)];
  });
};

/**
 * Define the renderers
 */
var renderers = {
  /**
   * Those callbacks will be called recursively to render a nested structure
   */
  inline: {
    // The key passed here is just an index based on rendering order inside a block
    BOLD: function BOLD(children, _ref) {
      var key = _ref.key;
      return _react2.default.createElement(
        'strong',
        { key: key },
        children
      );
    },
    ITALIC: function ITALIC(children, _ref2) {
      var key = _ref2.key;
      return _react2.default.createElement(
        'em',
        { key: key },
        children
      );
    },
    UNDERLINE: function UNDERLINE(children, _ref3) {
      var key = _ref3.key;
      return _react2.default.createElement(
        'u',
        { key: key },
        children
      );
    },
    CODE: function CODE(children, _ref4) {
      var key = _ref4.key;
      return _react2.default.createElement(
        'span',
        { key: key },
        children
      );
    }
  },
  /**
   * Blocks receive children and depth
   * Note that children are an array of blocks with same styling,
   */
  blocks: {
    'unstyled': function unstyled(children) {
      return children.map(function (child) {
        return _react2.default.createElement(
          'span',
          { className: 'footnote-p' },
          child
        );
      });
    },
    'blockquote': function blockquote(children) {
      return _react2.default.createElement(
        'span',
        { className: 'footnote-blockquote' },
        addBreaklines(children)
      );
    },
    'header-one': function headerOne(children, _ref5) {
      var keys = _ref5.keys;
      return children.map(function (child, index) {
        return _react2.default.createElement(
          'span',
          { className: 'footnote-h1', key: index, id: keys[index] },
          child
        );
      });
    },
    'header-two': function headerTwo(children, _ref6) {
      var keys = _ref6.keys;
      return children.map(function (child, index) {
        return _react2.default.createElement(
          'span',
          { className: 'footnote-h2', key: index, id: keys[index] },
          child
        );
      });
    },
    'header-three': function headerThree(children, _ref7) {
      var keys = _ref7.keys;
      return children.map(function (child, index) {
        return _react2.default.createElement(
          'span',
          { className: 'footnote-h3', key: index, id: keys[index] },
          child
        );
      });
    },
    'header-four': function headerFour(children, _ref8) {
      var keys = _ref8.keys;
      return children.map(function (child, index) {
        return _react2.default.createElement(
          'span',
          { className: 'footnote-h4', key: index, id: keys[index] },
          child
        );
      });
    },
    'header-five': function headerFive(children, _ref9) {
      var keys = _ref9.keys;
      return children.map(function (child, index) {
        return _react2.default.createElement(
          'span',
          { className: 'footnote-h5', key: index, id: keys[index] },
          child
        );
      });
    },
    'header-six': function headerSix(children, _ref10) {
      var keys = _ref10.keys;
      return children.map(function (child, index) {
        return _react2.default.createElement(
          'span',
          { className: 'footnote-h6', key: index, id: keys[index] },
          child
        );
      });
    },

    // You can also access the original keys of the blocks
    'code-block': function codeBlock(children, _ref11) {
      var keys = _ref11.keys;
      return _react2.default.createElement(
        'span',
        { className: 'footnote-pre', key: keys[0] },
        addBreaklines(children)
      );
    },
    // or depth for nested lists
    'unordered-list-item': function unorderedListItem(children, _ref12) {
      var depth = _ref12.depth,
          keys = _ref12.keys;
      return _react2.default.createElement(
        'span',
        (0, _defineProperty3.default)({ className: 'footnote-ul', key: keys[keys.length - 1] }, 'className', 'ul-level-' + depth),
        children.map(function (child, index) {
          return _react2.default.createElement(
            'span',
            { className: 'footnote-li', key: index },
            child
          );
        })
      );
    },
    'ordered-list-item': function orderedListItem(children, _ref13) {
      var depth = _ref13.depth,
          keys = _ref13.keys;
      return _react2.default.createElement(
        'span',
        (0, _defineProperty3.default)({ className: 'footnote-ol', key: keys.join('|') }, 'className', 'ol-level-' + depth),
        children.map(function (child, index) {
          return _react2.default.createElement(
            'span',
            { className: 'footnote-li', key: keys[index] },
            child
          );
        })
      );
    }
    // If your blocks use meta data it can also be accessed like keys
    // atomic: (children, { keys, data }) => children.map((child, i) => <Atomic key={keys[i]} {...data[i]}>{child}</Atomic>),
  },
  /**
   * Entities receive children and the entity data
   */
  entities: {
    //   // key is the entity key value from raw
    LINK: function LINK(children, data, _ref14) {
      var key = _ref14.key;
      return _react2.default.createElement(
        _Link2.default,
        { key: key, to: data.url },
        children
      );
    },
    BLOCK_ASSET: function BLOCK_ASSET(children, data, _ref15) {
      var key = _ref15.key;

      return _react2.default.createElement(_BlockAssetWrapper2.default, { key: key, data: data });
    },
    INLINE_ASSET: function INLINE_ASSET(children, data, _ref16) {
      var key = _ref16.key;

      return _react2.default.createElement(_InlineAssetWrapper2.default, { data: data, key: key });
    }
  }
};

/**
 * Renderer class for building raw-to-react rendering react component instances
 */

var Renderer = function (_Component) {
  (0, _inherits3.default)(Renderer, _Component);

  /**
   * constructor
   * @param {object} props - properties given to instance at instanciation
   */
  function Renderer(props) {
    (0, _classCallCheck3.default)(this, Renderer);
    return (0, _possibleConstructorReturn3.default)(this, (Renderer.__proto__ || (0, _getPrototypeOf2.default)(Renderer)).call(this, props));
  }

  /**
   * Determines whether to update the component or not
   * @param {object} nextProps - the future properties of the component
   * @return {boolean} shouldUpdate - yes or no
   */


  (0, _createClass3.default)(Renderer, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return true;
      // return this.props.raw !== nextProps.raw;
    }

    /**
     * Displays something when no suitable content state is provided to the renderer
     * @return {ReactElement} default message
     */

  }, {
    key: 'renderWarning',
    value: function renderWarning() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'p',
          null,
          'Intentionnellement vide.'
        )
      );
    }

    /**
     * Renders the component
     * @return {ReactElement} component - the component
     */

  }, {
    key: 'render',
    value: function render() {
      var raw = this.props.raw;

      if (!raw) {
        return this.renderWarning();
      }
      var rendered = (0, _redraft2.default)(raw, renderers);
      // redraft can return a null if there's nothing to render
      if (!rendered) {
        return this.renderWarning();
      }
      return _react2.default.createElement(
        'span',
        null,
        rendered
      );
    }
  }]);
  return Renderer;
}(_react.Component);

/**
 * Component's properties types
 */


Renderer.propTypes = {
  /**
   * Draft-js raw representation of some contents
   * see https://draftjs.org/docs/api-reference-data-conversion.html
   */
  raw: _propTypes2.default.object
};

exports.default = Renderer;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/defineProperty");

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var href = _ref.href,
      target = _ref.target,
      children = _ref.children,
      className = _ref.className,
      id = _ref.id,
      style = _ref.style;
  return _react2.default.createElement(
    'a',
    { href: href, target: target, className: className, id: id, style: style },
    children
  );
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var href = _ref.href,
      target = _ref.target,
      children = _ref.children,
      className = _ref.className,
      id = _ref.id,
      style = _ref.style;
  return _react2.default.createElement(
    "a",
    { href: href, target: target, className: className, id: id, style: id },
    "p. ",
    _react2.default.createElement("span", { className: "page-link", href: href })
  );
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  references: 'Références',
  tableOfContents: 'Sommaire',
  tablOfFigures: 'Table des figures',
  authorsIndex: 'Index des auteurs',
  glossary: 'Glossaire',
  notes: 'Notes'
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactCiteproc = __webpack_require__(9);

var _peritextRenderingUtils = __webpack_require__(6);

var _Section = __webpack_require__(23);

var _Section2 = _interopRequireDefault(_Section);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DecoratedSection = function (_Component) {
  (0, _inherits3.default)(DecoratedSection, _Component);

  function DecoratedSection(props) {
    (0, _classCallCheck3.default)(this, DecoratedSection);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DecoratedSection.__proto__ || (0, _getPrototypeOf2.default)(DecoratedSection)).call(this, props));

    _this.getChildContext = function () {
      return {
        story: _this.props.story,
        contextualizers: _this.props.contextualizers,
        ReferenceLinkComponent: _this.props.ReferenceLinkComponent || _this.context.ReferenceLinkComponent,
        GlossaryLinkComponent: _this.props.GlossaryLinkComponent || _this.context.GlossaryLinkComponent,
        NoteLinkComponent: _this.props.NoteLinkComponent || _this.context.NoteLinkComponent
      };
    };

    _this.render = function () {
      var _this$props = _this.props,
          story = _this$props.story,
          contextualizers = _this$props.contextualizers,
          locale = _this$props.locale,
          sectionId = _this$props.sectionId;

      var citations = (0, _peritextRenderingUtils.buildCitations)(story);
      var citationStyle = story.settings.citationStyle.data;
      var citationLocale = story.settings.citationLocale.data;
      var section = story.sections[sectionId];
      return _react2.default.createElement(
        _reactCiteproc.ReferencesManager,
        {
          style: citationStyle,
          locale: citationLocale,
          items: citations.citationItems,
          citations: citations.citationData,
          componentClass: 'references-manager'
        },
        _react2.default.createElement(_Section2.default, {
          section: section
        })
      );
    };

    return _this;
  }

  return DecoratedSection;
}(_react.Component);

exports.default = DecoratedSection;


DecoratedSection.contextTypes = {
  LinkComponent: _propTypes2.default.func
};

DecoratedSection.childContextTypes = {
  contextualizers: _propTypes2.default.object,
  story: _propTypes2.default.object,
  ReferenceLinkComponent: _propTypes2.default.func,
  GlossaryLinkComponent: _propTypes2.default.func,
  NoteLinkComponent: _propTypes2.default.func
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = __webpack_require__(11);

var _extends3 = _interopRequireDefault(_extends2);

var _keys = __webpack_require__(8);

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactCiteproc = __webpack_require__(9);

var _peritextRenderingUtils = __webpack_require__(6);

var _Renderer = __webpack_require__(10);

var _Renderer2 = _interopRequireDefault(_Renderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DecoratedEndNotes = function (_Component) {
  (0, _inherits3.default)(DecoratedEndNotes, _Component);

  function DecoratedEndNotes(props) {
    (0, _classCallCheck3.default)(this, DecoratedEndNotes);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DecoratedEndNotes.__proto__ || (0, _getPrototypeOf2.default)(DecoratedEndNotes)).call(this, props));

    _this.getChildContext = function () {
      return {
        contextualizers: _this.props.contextualizers,
        story: _this.props.story
      };
    };

    return _this;
  }

  (0, _createClass3.default)(DecoratedEndNotes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          story = _props.story,
          title = _props.title,
          _props$level = _props.level,
          level = _props$level === undefined ? 0 : _props$level,
          id = _props.id,
          propLinkComponent = _props.LinkComponent;
      var contextLinkComponent = this.context.LinkComponent;
      var sectionsOrder = story.sectionsOrder,
          sections = story.sections;


      var LinkComponent = propLinkComponent || contextLinkComponent;

      var citations = (0, _peritextRenderingUtils.buildCitations)(story);
      var citationStyle = story.settings.citationStyle.data;
      var citationLocale = story.settings.citationLocale.data;

      return _react2.default.createElement(
        'section',
        {
          className: "notes-container bookmark-title separate-pages bookmark-level-" + level,
          title: title,
          id: id
        },
        _react2.default.createElement(
          _reactCiteproc.ReferencesManager,
          {
            style: citationStyle,
            locale: citationLocale,
            items: citations.citationItems,
            citations: citations.citationData,
            componentClass: 'references-manager'
          },
          _react2.default.createElement(
            'h1',
            { className: 'section-title' },
            title
          ),
          _react2.default.createElement(
            'ol',
            null,
            sectionsOrder.reduce(function (results, sectionId) {
              return results.concat((0, _keys2.default)(sections[sectionId].notes).map(function (id) {
                return (0, _extends3.default)({}, sections[sectionId].notes[id], { sectionId: sectionId });
              }));
            }, []).map(function (note, index) {
              return _react2.default.createElement(
                'li',
                { id: 'note-content-' + note.id, key: index },
                _react2.default.createElement(
                  LinkComponent,
                  { sectionId: note.sectionId, href: '#note-pointer-' + note.id, className: 'note-number' },
                  index + 1
                ),
                _react2.default.createElement(_Renderer2.default, { raw: note.editorState })
              );
            })
          )
        )
      );
    }
  }]);
  return DecoratedEndNotes;
}(_react.Component);

exports.default = DecoratedEndNotes;


DecoratedEndNotes.childContextTypes = {
  story: _propTypes2.default.object,
  contextualizers: _propTypes2.default.object,
  LinkComponent: _propTypes2.default.func
};

DecoratedEndNotes.contextTypes = {
  LinkComponent: _propTypes2.default.func
};

/***/ }),
/* 40 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ])["default"];