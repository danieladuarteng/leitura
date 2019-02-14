import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import PostsList from './PostsList';
import UpdatePost from './UpdatePost';
import { Route, HashRouter as Router, Switch } from "react-router-dom"
import * as LeituraAPI from './LeituraAPI'
import { connect } from 'react-redux'
import {handleInitialData, postDetails} from './actions/shared'
import PostDetails from './PostDetails';

class App extends Component {

  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render() {
    console.log("props", this.props)
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Home />} />

          <Route path={"/:category/:id"} render={() => <PostDetails />} />

          <Route path="/update" render={() => <UpdatePost />} />
        </Switch>
      </Router>
    )
  
  }
}



export default connect()(App);
