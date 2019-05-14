import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { Row, Col } from 'reactstrap';
import { rgbToHex } from '@coreui/coreui/dist/js/coreui-utilities';
import { getDisplayImage } from "./logic";


class MemoPrint extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <div className="card">
          <div className="card-header">
            <i className="icon-drop"></i> Memo print
          </div>
          <div className="card-body" id="target">
            <p>aadfv</p>

            <div id="downloadImageButton" className="btn btn-primary btn-lg" onClick={this.handleClick} >Sava image</div>
            <a id="getImage" href="" className="d-none" download="image.png">画像保存</a>
          </div>
        </div>
      </div>
    );
  }

  handleClick = () => {
    getDisplayImage();
  };
}

export default MemoPrint;