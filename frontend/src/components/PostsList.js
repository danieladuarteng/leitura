import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { voteScorePostAction } from '../actions/shared'
import { connect } from 'react-redux'
import moment from 'moment';

class PostsList extends Component {

    state = {
        upvote: 'upVote',
        downvote: 'downVote',
    }

    handleLike = (id, vote) => {
        const { dispatch } = this.props
        dispatch(voteScorePostAction(id, vote))
    }

    handlePostDetails = (history, post) =>
        history.push({
            pathname: `/${post.category}/${post.id}`,
            state: { id: post.id }
        })

    render() {
        const {
            id,
            title,
            category,
            author,
            timestamp,
            commentCount,
            body,
            voteScore,
        } = this.props.post

        const { post, history } = this.props


        const { location } = this.props.history

        console.log(this.props.history)

        const { upvote, downvote } = this.state
        return (
            <div className="post1">

                <h1>{title}</h1>

                <div className="cabecalho">
                    <div className="box-1">{category}</div>
                    <div className="box-2">{author}</div>
                    <div className="box-3">{moment(timestamp).format('DD/MM/YYYY')}</div>
                    <div className="box-4"></div>
                    <div className="contador">{commentCount} comments</div>
                </div>

                <div className="conteudo-post">
                    <p>{body}</p>
                </div>


                <div
                    className="botaoEnviar"
                    onClick={() => this.handlePostDetails(history, post)}
                >
                    CONTINUE LENDO
                </div>


                <div className="icons-post">
                    <div className="like-post" onClick={() => this.handleLike(id, upvote)}></div>
                    <div className="like-post-text">{voteScore}</div>
                    <div className="deslike-post" onClick={() => this.handleLike(id, downvote)}></div>
                </div>
            </div>
        )
    }
}
function mapStateToProps({ posts }, { id }) {
    const post = posts[id]
    return {
        post
    }
}

export default connect(mapStateToProps)(PostsList)

