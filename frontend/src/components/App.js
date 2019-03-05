import React, { Component } from 'react'
import Home from './Home'
import UpdatePost from './UpdatePost'
import { Route, HashRouter as Router, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import PostDetails from './PostDetails'
import NewPost from './NewPost'
import Page404 from './Page404'
import { handleInitialData } from '../actions/shared'

import './App.css';

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route path="/update/:id" component={UpdatePost} />

          <Route path="/:category/:id" render={props => {
              console.log(props)
              return <PostDetails {...props} />
          }} />

          <Route path="/newpost" component={NewPost} />

          <Route
            path='/:category'
            render={props => {
              return <Home {...props} />
            }}
          />
        </Switch>
      </Router>
    )
  }
}

export default connect()(App);
