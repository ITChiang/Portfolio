import React, { Component, useState, useRef } from "react";
import { hot } from "react-hot-loader";
import { HashRouter as Router, Route, Redirect, Switch, withRouter } from "react-router-dom";
import projectList from './projects/project.content'
import { Fade, Grow } from '@material-ui/core';
import ReactMarkdown from 'react-markdown';
import './project.css';




class project extends Component {
  constructor(props) {
    super();
    this.state = {
      content: ""
    }

  }
  componentDidMount() {


    if (this.props.location.data !== undefined)
      import(`./projects/${this.props.location.data.file_name}/README.md`).then(res => this.setState({ content: res.default }));
      else{
        const file = this.props.location.pathname.split('/');
        console.log("trigger!",this.props.location.data);
        import(`./projects/${file[file.length-1]}/README.md`).then(res => this.setState({ content: res.default }));
      }
   
  
  }

  render() {
    return (
      <div className="App">
        <Fade in={true} timeout={1200}>
          <div className="project_Detail">
            <ReactMarkdown children={this.state.content !== undefined ? this.state.content : "NULL"} />
          </div>
        </Fade>
      </div>
    );
  }

}


export default withRouter(project);