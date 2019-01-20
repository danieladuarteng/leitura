import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import * as LeituraAPI from './LeituraAPI'
import Button from '@material-ui/core/Button';
import Post from './Post';
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
  }

  onClick = async (categorySelected) => {
    if (categorySelected !== 'all') {
      const ab = await LeituraAPI.getPostsForCategories(categorySelected)
    }
    this.setState({ categorySelected })
  }

  render() {
    const { posts } = this.props;
    const { categorySelected } = this.state;

    return (
      <div>
        <div className="home">
          <h1><strong>Leitura</strong></h1>
        </div>

        <div className="grid-posts">
          <div className="grid-posts-item1">
            {
              categorySelected === 'all' ?
                posts.map(post => (
                  <Post
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    category={post.category}
                    author={post.author}
                    timestamp={post.timestamp}
                    commentCount={post.commentCount}
                    body={post.body}
                    voteScore={post.voteScore}
                  />
                ))
                :
                posts.filter(a => a.category === categorySelected).map(post => (
                  <Post
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    category={post.category}
                    author={post.author}
                    timestamp={post.timestamp}
                    commentCount={post.commentCount}
                    body={post.body}
                    voteScore={post.voteScore}
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
              <select>
                <option value="volvo">Date</option>
                <option value="saab">Title</option>
                <option value="opel">Author</option>
                <option value="audi">Comments</option>
                <option value="audi">More votes</option>
                <option value="audi">Less votes</option>
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
