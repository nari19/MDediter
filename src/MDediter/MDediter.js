import React, { Component } from 'react';
import { getDisplayImage } from "./logic";
import "../scss/_custom.scss";
import "./github.scss";
import Viewer from '../Viewer/Viewer';
import DomHTML from '../Viewer/DomHTML';
import { Button, Card, CardFooter, CardHeader, Col, Row } from 'reactstrap';
import {Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap';
import marked from "marked";

class MDediter extends Component {
  // Markdown react  https://tech.innovator.jp.net/entry/2017/12/08/120000
  constructor(props) {
    super();
    this.state = { html : "" };
    this.updateMarkdown = this.updateMarkdown.bind(this);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: new Array(4).fill('1'),
    };
  }

  toggle(tabPane, tab) {
    const newArray = this.state.activeTab.slice()
    newArray[tabPane] = tab
    this.setState({
      activeTab: newArray,
    });
  }

  tabPane() {
    return (
      <>
        <TabPane tabId="1">
          <div dangerouslySetInnerHTML={{ __html: this.state.html }}></div>
        </TabPane>
        <TabPane tabId="2">
          <div>{ this.state.html }</div>  
        </TabPane>
      </>
    );
  }
  
  updateMarkdown(event) {
    this.setState({
      html: marked(event.target.value)
    });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="12" md="6" lg="7">
            <Card>
              <CardHeader>
                <i className="icon-note"></i> Input
              </CardHeader>
              
              <textarea className="card-body"  
                        onChange={this.updateMarkdown} defaultValue="## You can write Markdown notation here."
              ></textarea>
              
              <CardFooter>
                  <Button id="downloadImageButton" className="btn-lg pull-right" color="primary" onClick={this.handleClick} >Sava image</Button>
                  <a id="getImage" href="./" className="d-none" download="image.png">画像保存</a>
                  {/* <Button id="downloadImageButton" className="btn-lg pull-right" color="primary" onClick={this.handleClick} >Open in a new tab</Button> */}
                  <Viewer svg={this.renderSvg()} />
              </CardFooter>
            </Card>
          </Col>

          <Col xs="12" sm="12" md="6" lg="5">
            <Nav tabs>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '1'}
                  onClick={() => { this.toggle(0, '1'); }}
                >
                  Preview
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '2'}
                  onClick={() => { this.toggle(0, '2'); }}
                 >
                   Output
                 </NavLink>
               </NavItem>
             </Nav>
             <TabContent activeTab={this.state.activeTab[0]} className="card textarea-style markdown-body" id="target">
               {this.tabPane()}
             </TabContent>
           </Col>
        </Row>
      </div>
    );
  }
  handleClick = () => {
    getDisplayImage();
  }

  /**
   * @returns {XML}
   */
  renderSvg() {
    const { html } = this.props;
    return (
      <DomHTML htmlCode={html}/>
    );
  }
}

export default MDediter;
