import React, { Component } from 'react';
import Home from './Home';
import UpdatePost from './UpdatePost';
import { Route, HashRouter as Router, Switch } from "react-router-dom"
import { connect } from 'react-redux'
import { handleInitialData } from './actions/shared'
import PostDetails from './PostDetails';

import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route path={"/:category/:id"} component={PostDetails} />

          <Route path="/update" component={UpdatePost} />
        </Switch>
      </Router>
    )
  }
}

export default connect()(App);
