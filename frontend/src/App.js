import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import ViewPost from './ViewPost';
import UpdatePost from './UpdatePost';
import { Route } from  'react-router-dom';
import * as LeituraAPI from './LeituraAPI'

class App extends Component {
  state = {//colocamos no state para que o React gerencie as atualizações 
    posts: [],
  }

async componentDidMount() {//deixa de forma assincrona
    const posts = await LeituraAPI.getAllPosts()//fala para esperar até pegar todos os dados
    this.setState({posts})
  }
  
  render() {
    console.log('posts', this.state.posts) 
    return (
      <div>
      <Route exact path="/" render={() =>(
        <Home 
          posts={this.state.posts}
        />
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
