import React from 'react';
import { Button } from 'reactstrap';
import { findDOMNode } from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import CommonComponent from './CommonComponent';
import PropTypes from 'prop-types';

/**
 * @type {Symbol}
 */
const keyOfStaticHtmlBlob = Symbol('staticHtmlBlob');

/**
 * @type {string|*}
 */
let lastHtmlUrl;

/**
 * Viewer component class
 */
export default class Viewer extends CommonComponent {
  /**
   * @static
   * @returns {{className: (number|boolean|*|string), isDisabled: *, onError: *}}
   */
  static get propTypes() {
    return {
      className: PropTypes.string,
      isDisabled: PropTypes.bool,
      onError   : PropTypes.func.isRequired
    }
  }

  /**
   * @static
   * @returns {{isDisabled: boolean}}
   */
  static get defaultProps() {
    return {
      isDisabled: false
    }
  }

  /**
   * @constructor
   * @param props
   */
  constructor(props) {
    // inherit
    super(props);

    // property
    this[keyOfStaticHtmlBlob] = null;

    // bind context
    this.bindContextAll(
      'clickDownloadButtonHandler'
    );
  }

  /**
   * lifecycle
   */
  componentDidMount() {
    this[keyOfStaticHtmlBlob] = this.drawCanvas();
  }

  /**
   * lifecycle
   */
  componentDidUpdate() {
    this[keyOfStaticHtmlBlob] = this.drawCanvas();
  }

  /**
   * @returns {XML}
   */
  render() {
    // cache
    const { html } = this.props;

    // JSX Template
    return (
      <div>
        <canvas className="d-none" ref="canvas" width={html.props.width} height={html.props.height} />

        {/* get html ボタン */}
          <div>
            {['html'].map((val) => (
              <p key={val}><Button className="btn-lg pull-right" color="primary" value={val} onClick={this.clickDownloadButtonHandler}>In a new tab</Button></p>
            ))}
          </div>
      </div>
      
    );
  }

  /**
   * @returns {*}
   */
  renderHtmlToStaticMarkup() {
    // cache
    const { html } = this.props;

    return ReactDOMServer.renderToStaticMarkup(html)
  }

  /**
   * draw html to canvas
   * @returns {*}
   */
  drawCanvas() {
    if (this.props.isDisabled) {
      return;
    }

    // cache
    const canvas        = findDOMNode(this.refs.canvas);
    const context       = canvas.getContext('2d');
    const imageEl       = new Image();
    const staticHtmlBlob = new Blob([this.renderHtmlToStaticMarkup()], { type: 'text/html;charset=utf-8' });
    const url           = URL.createObjectURL(staticHtmlBlob);

    // set load event handler
    imageEl.onload = () => {
      // draw image
      context.fillStyle = '#fff';
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.drawImage(imageEl, 0, 0);

      // revoke url
      URL.revokeObjectURL(url);
    };

    // set error event handler
    imageEl.onError = () => {
      this.props.onError();
    };

    // load image
    imageEl.crossOrigin = 'Anonymous';
    imageEl.src = url;

    // return staticHtmlBlob
    return staticHtmlBlob;
  }

  /**
   * @listen click on <button>
   * @param ev
   */
  clickDownloadButtonHandler(ev) {
    ev.preventDefault();

    // cache
    const { value } = ev.target;
    const canvas  = findDOMNode(this.refs.canvas);
    let url;

    // cancel process when has no canvas
    if (!canvas) {
      return;
    }

    // set url
    switch (value) {
    case 'html':
      url = URL.createObjectURL(this[keyOfStaticHtmlBlob]);
      break;
    default:
      return;
    }

    // open in new window
    if (lastHtmlUrl) {
      URL.revokeObjectURL(lastHtmlUrl);
    }
    lastHtmlUrl = url;
    window.open(lastHtmlUrl, 'generatedImage');
  }
}
