import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import PostsList from './PostsList';
import { connect } from 'react-redux'
import {
  handleInitialData,
  handleGetAllCategories,
  handlePostsForCategory
} from '../actions/shared'

class Home extends Component {
  state = {
    categorySelected: 'all',
    sort: 'voteScore',
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(handleInitialData())
    dispatch(handleGetAllCategories())
  }

  onClick = (categorySelected) => {
    const { history, dispatch } = this.props

    if (categorySelected !== 'all') {
      dispatch(handlePostsForCategory(categorySelected))
        .then(history.push(`${categorySelected}`))
    }
    else {
      dispatch(handleInitialData())
        .then(history.push(""))
    }
    this.setState({ categorySelected })
  }

  onSortBy = (e) => {
    this.setState({
      sort: e.target.value,
    })
  }

  render() {
    const { renderForVoteScore, renderForTimestamp, categories, history } = this.props;
    const { sort } = this.state;

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
                  history={history}
                />
              ))
              :
              renderForTimestamp.map((id) => (
                <PostsList
                  id={id}
                  key={id}
                  history={history}
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
