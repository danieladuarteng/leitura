import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as LeituraAPI from '../LeituraAPI'
import Button from '@material-ui/core/Button';
import PostsList from './PostsList';
import _ from 'underscore';
import moment from 'moment'
import { connect } from 'react-redux'
import { handleInitialData, handleGetAllCategories, handlePostsForCategory } from '../actions/shared'

class Home extends Component {
  state = {
    categorySelected: 'all',
    sort: 'voteScore',
  }

  componentDidMount() {
    this.props.dispatch(handleInitialData())
    this.props.dispatch(handleGetAllCategories())

  }

  onClick = (categorySelected) => {
    if (categorySelected !== 'all') {
      this.props.dispatch(handlePostsForCategory(categorySelected))
    }
    else {
      this.props.dispatch(handleInitialData())
    }
    this.setState({ categorySelected })
  }

  onSortBy = (e) => {
    this.setState({
      sort: e.target.value,
    })
  }

  render() {
    const { renderForVoteScore, renderForTimestamp, categories } = this.props;
    const { categorySelected, sort } = this.state;

    console.log(this.props)

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
                <li>
                  <Button
                    onClick={() => { this.onClick('all'); }}
                  >
                    All categories
                  </Button>
                </li>
                {categories.map(category => (
                  <li key={category}>
                    <Button
                      onClick={() => { this.onClick(category); }}
                    >
                      {category}
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

function mapStateToProps({ posts, categories }) {
  return {
    posts,
    renderForVoteScore: Object.keys(posts)
      .sort((a, b) => posts[b].voteScore - posts[a].voteScore),
    renderForTimestamp: Object.keys(posts)
      .sort((a, b) => posts[b].timestamp - posts[a].timestamp),
    categories: Object.values(categories).map(category => category.name)
  }
}

export default connect(mapStateToProps)(Home)
