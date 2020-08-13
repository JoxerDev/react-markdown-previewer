import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import marked from "marked";

marked.setOptions({
  breaks: true
});

const defaultText =
  "# React Markdown Heading\n\nEdit or replace this Header\n-----------\n\n### Another deeper heading\n\nParagraphs are separated by a blank line.\n\nSimply press enter for a line break\n\nText attributes: *italic*, **bold**,\n***italic & bold*** , ~~strikethrough~~ .\n\nUnordered list:\n\n  * HTML\n  * CSS\n  * JavaScript\n\nNumbered list:\n\n  1. HTML \n  2. CSS\n  3. JavaScript\n\n---";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: defaultText
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  render() {
    return (
      <div className="container-fluid" id="main">
        <div className="row justify-content-center" id="title">
          <div className="col-xs-12">
          <h1>React Markdown Previewer</h1>
        </div>
        </div>
        <div className="row" id="content-box">
          <div className="col-sm-6">
            <h3 className="box-title">Editor</h3>
            <textarea
              type="text"
              id="editor"
              value={this.state.input}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="col-sm-6">
            <h3 className="box-title previewtitle">Preview</h3>
            <div id="preview">
              <ConvertMarkdown markdown={this.state.input}></ConvertMarkdown>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class ConvertMarkdown extends React.Component {
  createMarkup() {
    return { __html: marked(this.props.markdown) };
  }

  render() {
    return (
      <div dangerouslySetInnerHTML={this.createMarkup()}></div>
    );
  }
}

export default App;
