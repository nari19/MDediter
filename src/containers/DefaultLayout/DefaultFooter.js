import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultFooter extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <span><a href="https://coreui.io/react">nari19</a> &copy; 2019 creativeLabs.</span>
        <span className="ml-auto">Powerd by..&nbsp; 
          <a href="https://reactjs.org/">react&nbsp; </a>
          <a href="https://coreui.io/react/">coreui&nbsp; </a>
          <a href="https://html2canvas.hertzen.com/">html2canvas&nbsp; </a>
          <a href="https://github.com/markedjs/marked">marked</a>
        </span>
      </React.Fragment>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
