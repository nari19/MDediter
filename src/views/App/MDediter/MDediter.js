import React, { Component } from 'react';
import {  } from "./logic";
import "../../../scss/_custom.scss";
import marked from "marked";

class MDediter extends Component {
  // Markdown react  https://tech.innovator.jp.net/entry/2017/12/08/120000
  constructor(props) {
    super();
    this.state = { html :"You can write notes." };
    this.updateMarkdown = this.updateMarkdown.bind(this);
  }
  
  updateMarkdown(event) {
    this.setState({
      html: marked(event.target.value)
    });
  }

  render() {
    const html = this.state.html;

    return (
      <div className="animated fadeIn">
        <div className="card">
          <div className="card-header">
            <i className="icon-note"></i> MDediter
          </div>
          <textarea className="card-body"  
                    onChange={this.updateMarkdown} defaultValue={this.state.html}></textarea>
          <a className="btn btn-primary btn-lg" href="data:text/html;charset=UTF-8,<html contenteditable>">Open in a new tab</a>
        </div>

        <h4 className="text-muted" >Preview</h4>
        <div className="card textarea-style" id="target">
          <div className="cardBody">
              <div dangerouslySetInnerHTML={{ __html: html }}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default MDediter;
