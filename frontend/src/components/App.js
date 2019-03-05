import React, { Component } from 'react'
import Home from './Home'
import UpdatePost from './UpdatePost'
import { Route, HashRouter as Router, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import PostDetails from './PostDetails'
import NewPost from './NewPost'
import { handleInitialData } from '../actions/shared'

import './App.css';

class App extends Component {
  render() {

    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route path="/update/:id" component={UpdatePost} />

          <Route path="/:category/:id" component={PostDetails} />

          <Route path="/newpost" component={NewPost} />
        </Switch>
      </Router>
    )
  }
}

export default connect()(App);
