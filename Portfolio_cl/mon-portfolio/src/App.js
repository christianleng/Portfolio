import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./style.css"
import Home from "./project/Home";

export default class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      scrolled: false,
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 1
      if(isTop !== true) {
        this.setState({ scrolled: true })
      } else {
        this.setState({ scrolled: false })
      }
    })
  }

  componentWillUnmount() {
    window.removeEventListener("scroll")
  }
  render () {
    return (
      <Router>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
          <a href="#" id="toTop" className={this.state.scrolled ? 'toTop' : 'noTop'}>
              <span className="screen-reader-text"><i class="fas fa-angle-up"></i></span>
          </a>
      </Router>
    )
  }
}

