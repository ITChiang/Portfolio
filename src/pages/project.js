import React, { Component, useState, useRef } from "react";
import { hot } from "react-hot-loader";
import { HashRouter as Router, Route, Redirect, Switch, withRouter } from "react-router-dom";
import projectList from './projects/project.content'
import { Fade, Grow } from '@material-ui/core';
import ReactMarkdown from 'react-markdown';
import ReactGA from 'react-ga';
import './project.css';




class project extends Component {
  constructor(props) {
    super();
    this.state = {
      content: ""
    }

  }
  componentDidMount() {
    ReactGA.pageview('/project');


    if (this.props.location.data !== undefined)
      import(`./projects/${this.props.location.data.file_name}/README.md`).then(res => this.setState({ content: res.default })); // set and get the URL of each project
      else{
        const file = this.props.location.pathname.split('/');
        console.log("trigger!",this.props.location.data);
        import(`./projects/${file[file.length-1]}/README.md`).then(res => this.setState({ content: res.default }));
      }
   
  
  }
  /**
   * 
   * Use ReactMarkdown to display each project.
   * Need to check the status of the file before use it.
   */

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