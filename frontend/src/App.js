import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import PostsList from './PostsList';
import UpdatePost from './UpdatePost';
import { Route } from 'react-router-dom';
import * as LeituraAPI from './LeituraAPI'
import { connect } from 'react-redux'
import {handleInitialData} from './actions/shared'
import PostDetails from './UpdatePost';



class App extends Component {

  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render() {
    console.log("props", this.props)
    return (
      <div>
        <Route exact path="/" render={() => (
          <Home />
        )} />

        <Route path={'/:category/:id'} render={() => (
          <PostDetails />
        )} />


        <Route path="/update" render={() => (
          <UpdatePost />
        )} />
      </div>
    );
  }
}



export default connect()(App);
