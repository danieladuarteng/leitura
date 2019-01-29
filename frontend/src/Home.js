import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import * as LeituraAPI from './LeituraAPI'
import Button from '@material-ui/core/Button';
import Post from './Post';
import _ from 'underscore';
import  moment from 'moment'
import './App.css';


const categoriesList = [
  {
    id: 0,
    title: 'All Categories',
    category: 'all',
  },
  {
    id: 1,
    title: 'React',
    category: 'react',
  },
  {
    id: 2,
    title: 'Redux',
    category: 'redux',
  },
  {
    id: 3,
    title: 'Udacity',
    category: 'udacity',
  },
];

class Home extends Component {
  state = {
    categorySelected: 'all',
    sort: '!voteScore',
  }

  onClick = async (categorySelected) => {
    if (categorySelected !== 'all') {
      await LeituraAPI.getPostsForCategories(categorySelected)
    }
    this.setState({ categorySelected })
  }

  onSortBy = (e) => {
    this.setState({
      sort: e.target.value,
    })
  }

  onViewDetails = async (e, post) =>{
    await LeituraAPI.getPostDetails(post)
  }

  render() {
    const { posts } = this.props;
    const { categorySelected, sort } = this.state;
    console.log('posts', posts)

    const postsRender = _.sortBy(posts, sort);

    return (
      <div>
        <div className="home">
          <h1><strong>Leitura</strong></h1>
        </div>

        <div className="grid-posts">
          <div className="grid-posts-item1">
            {

              categorySelected === 'all' ?
                postsRender.map(post => (

                  <Post
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    category={post.category}
                    author={post.author}
                    timestamp={moment(post.timestamp).format('DD/MM/YYYY')}
                    commentCount={post.commentCount}
                    body={post.body}
                    voteScore={post.voteScore}
                    onChange={(e) => this.onViewDetails(e, post.id)}
                  />
                ))
                :
                postsRender.filter(a => a.category === categorySelected).map(post => (
                  <Post
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    category={post.category}
                    author={post.author}
                    timestamp={moment(post.timestamp).format('DD/MM/YYYY')}
                    commentCount={post.commentCount}
                    body={post.body}
                    voteScore={post.voteScore}
                    onChange={(e) => this.onViewDetails(e, post.id)}
                  />
                ))
            }
          </div>

          <div className="grid-posts-item2">
            <div className="meconheca">
              <Link to="/update"><div className="botaoEnviar">NEW POST</div></Link>
            </div>

            <div className="categories">
              <h1>SORT BY </h1>
              <select onChange={(e) => this.onSortBy(e)}>
                <option value="!voteScore">Votes</option>
                <option value="timestamp">Date</option>
                <option value="!commentCount">Comments</option>
              </select>
            </div>

            <div className="atualizacoes">
              <h1>CATEGORIES</h1>
              <ul>
                {categoriesList.map(item => (
                  <li key={item.id}>
                    <Button
                      onClick={() => { this.onClick(item.category); }}
                    >
                      {item.title}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  posts: PropTypes.array.isRequired,
  categories: PropTypes.object.isRequired,
};

export default Home;