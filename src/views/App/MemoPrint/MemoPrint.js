import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { Row, Col } from 'reactstrap';
import { rgbToHex } from '@coreui/coreui/dist/js/coreui-utilities';
import html2canvas from "html2canvas";

function getDisplayImage(){
  //html2canvas実行
  html2canvas(document.getElementById("target")).then(function(canvas) {
      downloadImage(canvas.toDataURL());
  });
}
  
function downloadImage (data) {
  var fname ="download.png";
  var encdata= atob(data.replace(/^.*,/, ''));
  var outdata = new Uint8Array(encdata.length);

  for (var i = 0; i < encdata.length; i++) {
      outdata[i] = encdata.charCodeAt(i);
  }
  
  var blob = new Blob([outdata], ["image/png"]);
  if (window.navigator.msSaveBlob) {
      //IE用
      window.navigator.msSaveOrOpenBlob(blob, fname);
  } else {
      //それ以外？
      document.getElementById("getImage").href=data; //base64そのまま設定
      document.getElementById("getImage").download=fname; //ダウンロードファイル名設定
      document.getElementById("getImage").click(); //自動クリック
  }
}


class MemoPrint extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div className="card">
          <div className="card-header">
            <i className="icon-drop"></i> Memo print
          </div>
          <div className="card-body" id="target">
            <p>aaaaaaaaaaaa</p>

            <div id="downloadImageButton" class="btn btn-primary btn-lg" onclick="getDisplayImage();" >Sava image</div>
            <a id="getImage" href=""  style="display:none;"  download="image.png">画像保存</a>
          </div>
        </div>
      </div>
    );
  }
}

export default MemoPrint;