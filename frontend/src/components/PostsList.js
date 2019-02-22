import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { voteScorePostAction } from '../actions/shared'
import { connect } from 'react-redux'
import moment from 'moment';

class PostsList extends Component {

    handleLike = (e, hasliked) => {

        e.preventDefault()

        const { dispatch, post } = this.props

        dispatch(voteScorePostAction({
            id: post.id,
            voteScore: hasliked

        }))
    }

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
        } = this.props.post;

        return (
            <div className="post1">

                <Link to={`/${category}/${id}`}><h1>{title}</h1></Link>
                
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

                <Link to={`/${category}/${id}`}>
                    <div className="botaoEnviar">CONTINUE LENDO</div>
                </Link>

                <div className="icons-post">
                    <div className="like-post" onClick={e => this.handleLike(e, true)}></div>
                    <div className="like-post-text">{voteScore}</div>
                    <div className="deslike-post" onClick={e => this.handleLike(e, false)}></div>
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

