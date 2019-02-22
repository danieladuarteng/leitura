import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as LeituraAPI from '../LeituraAPI'
import Button from '@material-ui/core/Button';
import PostsList from './PostsList';
import _ from 'underscore';
import moment from 'moment'
import { connect } from 'react-redux'

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
    sort: 'voteScore',
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

  render() {
    const { renderForVoteScore, renderForTimestamp } = this.props;
    const { categorySelected, sort } = this.state;

    return (
      <div>
        <div className="home">
          <h1><strong>Leitura</strong></h1>
        </div>

        <div className="grid-posts">
          <div className="grid-posts-item1">
            {sort === 'voteScore' ?
              renderForVoteScore.map((id) => (
                <PostsList
                  id={id}
                  key={id}
                />
              ))
              :
              renderForTimestamp.map((id) => (
                <PostsList
                  id={id}
                  key={id}
                />
              ))
            }
          </div>

          <div className="grid-posts-item2">
            <div className="meconheca">
              <Link to="/newpost"><div className="botaoEnviar">NEW POST</div></Link>
            </div>

            <div className="categories">
              <h1>SORT BY </h1>
              <select onChange={(e) => this.onSortBy(e)}>
                <option value="voteScore">Votes</option>
                <option value="timestamp">Date</option>
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

function mapStateToProps({ posts }) {
  return {
    posts,
    renderForVoteScore: Object.keys(posts)
      .sort((a, b) => posts[b].voteScore - posts[a].voteScore),
    renderForTimestamp: Object.keys(posts)
      .sort((a, b) => posts[b].timestamp - posts[a].timestamp),
  }
}

export default connect(mapStateToProps)(Home)