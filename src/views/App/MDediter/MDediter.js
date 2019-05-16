import React, { Component } from 'react';
import { getDisplayImage } from "./logic";
import "../../../scss/_custom.scss";
import "./github.scss";
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Row } from 'reactstrap';
import marked from "marked";

class MDediter extends Component {
  // Markdown react  https://tech.innovator.jp.net/entry/2017/12/08/120000
  constructor(props) {
    super();
    this.state = { html :"You can write Markdown notation here." };
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
        <Row>
          <Col xs="12" sm="7" md="7">
            <Card>
              <CardHeader>
                <i className="icon-note"></i> Input
              </CardHeader>
              
              <textarea className="card-body"  
                        onChange={this.updateMarkdown} defaultValue={this.state.html}></textarea>
              
              <CardFooter>
                  <Button id="downloadImageButton" className="btn-lg pull-right" color="primary" onClick={this.handleClick} >Sava image</Button>
                  <a id="getImage" href="" className="d-none" download="image.png">画像保存</a>
                  <Button id="downloadImageButton" className="btn-lg pull-right" color="primary" onClick={this.handleClick} >Open in a new tab</Button>
              </CardFooter>
            </Card>
          </Col>

          <Col xs="12" sm="5" md="5">
            <h4 className="text-muted" >Preview</h4>
            <div className="card textarea-style markdown-body" id="target">
              <CardBody>
                  <div dangerouslySetInnerHTML={{ __html: html }}></div>
              </CardBody>
            </div>
              <p>{html}</p>
          </Col>
        </Row>
      </div>
    );
  }
  handleClick = () => {
    getDisplayImage();
  };
}

export default MDediter;
