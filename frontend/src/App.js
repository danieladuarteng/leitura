import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import ViewPost from './ViewPost';
import UpdatePost from './UpdatePost';
import { Route } from  'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
      <Route exact path="/" render={() =>(
        <Home />
      )}/>

      <Route path="/post" render={() =>(
        <ViewPost />
      )}/>


      <Route path="/update" render={() =>(
        <UpdatePost />
      )}/>
      </div>
    );
  }
}

export default App;
