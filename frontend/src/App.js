import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import ViewPost from './ViewPost';
import UpdatePost from './UpdatePost';
import { Route } from 'react-router-dom';
import * as LeituraAPI from './LeituraAPI'

class App extends Component {
  state = {//colocamos no state para que o React gerencie as atualizações 
    posts: [],
    categories: {},
  }

  async componentDidMount() {//deixa de forma assincrona
    const posts = await LeituraAPI.getAllPosts()//fala para esperar até pegar todos os dados
    const categories = await LeituraAPI.getAllCategories()
   
    this.setState({ posts, categories})
  }

  render() {
    return (
      <div>
        <Route exact path="/" render={() => (
          <Home
            posts={this.state.posts}
            categories={this.state.categories}
          />
        )} />

        <Route path="/post" render={() => (
          <ViewPost />
        )} />


        <Route path="/update" render={() => (
          <UpdatePost />
        )} />
      </div>
    );
  }
}

export default App;
