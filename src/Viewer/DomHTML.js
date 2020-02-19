import React, { PureComponent } from 'react';
import ReactDOMServer from 'react-dom/server';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-webpack-loader-syntax
import gtCss from '!!raw-loader!../MDediter/github.scss';

/**
 * DomHTML class
 */
export default class DomHTML extends PureComponent {
  /**
   * @static propTypes
   * @returns {{width: (boolean|*|string), height: (boolean|*|string), htmlCode: *}}
   */
  static get propTypes() {
    return {
      width    : PropTypes.number,
      height   : PropTypes.number,
      htmlCode : PropTypes.string.isRequired
    }
  }

  /**
   * @returns {{width: number, height: number, cssCode: string}}
   */
  static get defaultProps() {
    return {
      width    : 560,
      height   : 880
    }
  }

  /**
   * @returns {XML}
   */
  render() {
    // cache
    const { width, height } = this.props;
    const HtmlStyle = {
      maxWidth: "880px",
      margin: "0 auto",
      padding: "0 50px",
      width: width,
      height: height
    }

    // JSX template
    return (
      <html lang="jp">
        <head>
          <meta charset="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
          <title>nari19 MDediter</title>
          <style>{ gtCss }</style>
        </head>
        <body style={HtmlStyle} dangerouslySetInnerHTML={{
          __html: `<div class="markdown-body">${ReactDOMServer.renderToStaticMarkup(this.renderInnerHtml())}</div>`
        }}></body>
       </html>
    );
  }

  /**
   * @returns {XML}
   */
  renderInnerHtml() {
    // cache
    const { htmlCode } = this.props;

    // JSX template
    return (
      <div xmlns="http://www.w3.org/1999/xhtml" dangerouslySetInnerHTML={{
        __html: htmlCode
      }} />
    );
  }
}
