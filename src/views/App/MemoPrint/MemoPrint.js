import React, { Component } from 'react';
import { getDisplayImage } from "./logic";
import "../../../scss/_custom.scss";


class MemoPrint extends Component {
  // textareaをDOMに書き出す  https://qiita.com/kadowakid/items/ab6231347098d24dd7ab
  constructor(props) {
    super();
    this.state = {text :"You can write notes."}
  }
  changeText(e){
    this.setState({text : e.target.value});
  }
  editText(text) {
    const regExp = /(https?:\/\/\S+|\n)/;
    const regExpBr = /\n/;
    const regExpLink = /https?:\/\/\S+/;
    return text.split(regExp).map(function (line,i) {
        return line.match(regExpBr)
          ? (<br key={i} />) 
          : line.match(regExpLink)
            ? (<a target="_blank" href={line} key={i}>{line}</a>)
            : line
    });
  } 

  render() {
    return (
      <div className="animated fadeIn">
        <div className="card">
          <div className="card-header">
            <i className="icon-notebook"></i> Memo print
          </div>
          <textarea className="card-body"  
                    onChange={(e)=>this.changeText(e)} defaultValue={this.state.text}></textarea>
          <div id="downloadImageButton" className="btn btn-primary btn-lg" onClick={this.handleClick} >Sava image</div>
            <a id="getImage" href="" className="d-none" download="image.png">画像保存</a>
          </div>

          <h4 className="text-muted" >Preview</h4>
          <div className="card textarea-style" id="target">
            <div className="cardBody">
               <p>{this.editText(this.state.text)}</p>
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