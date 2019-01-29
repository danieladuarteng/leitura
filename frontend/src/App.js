import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import ViewPost from './ViewPost';
import UpdatePost from './UpdatePost';
import { Route } from 'react-router-dom';
import * as LeituraAPI from './LeituraAPI'
import {connect} from 'react-redux'
import {seePosts} from './actions'


class App extends Component {
  state = {//colocamos no state para que o React gerencie as atualizações 
    
    categories: {},
  }

  async componentDidMount() {//deixa de forma assincrona
    const posts = await LeituraAPI.getAllPosts()//fala para esperar até pegar todos os dados
    const categories = await LeituraAPI.getAllCategories()

    this.seeAllPosts({posts})
    this.setState({ posts, categories})
  }

  render() {
    console.log("props", this.props)
    return (
      <div>
        <Route exact path="/" render={() => (
          <Home
            posts={this.state.posts}
            categories={this.state.categories}
          />
        )} />

        <Route path={'/:category/:id'} render={() => (
          <ViewPost />
        )} />


        <Route path="/update" render={() => (
          <UpdatePost />
        )} />
      </div>
    );
  }
}

function mapStateToProps (posts) {
    return posts
}

function mapDispatchToProps(dispatch){
  return {
    seeAllPosts: (data) => dispatch(seePosts(data))
} }

export default connect(mapStateToProps, mapDispatchToProps)(App);
