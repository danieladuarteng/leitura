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
import UpdateComment from './UpdateComment';

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route path="/edit-post/:id" component={UpdatePost} />

          <Route path="/edit-comment/:id" component={UpdateComment}/>
          
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
