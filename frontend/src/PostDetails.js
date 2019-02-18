import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import moment from 'moment';
import { postDetails, postComments } from './actions/shared'
import CommentsList from './CommentsList'

class PostDetails extends Component {
    componentDidMount() {
        this.props.dispatch(postDetails(this.props.match.params.id))
        this.props.dispatch(postComments(this.props.match.params.id))
    }

    render() {
        const { id, title, category, author, timestamp, voteScore, body, commentCount } = this.props.post
        return (
            <div>
                <div className="home">
                    <h1><strong>Leitura</strong></h1>
                </div>

                <div className="container-view">
                    <div className="item-main">
                        <h1>{title}</h1>
                        <div className="cabecalho">
                            <div className="box-1">{category}</div>
                            <div className="box-2">{author}</div>
                            <div className="box-3">{moment(timestamp).format('DD/MM/YYYY')}</div>
                            <div className="icons">
                                <div className="like-button"></div>
                                <div className="like-button-text">{voteScore}</div>
                                <div className="deslike-button"></div>
                            </div>
                        </div>
                        <p>
                            {body}
                        </p>
                        <CommentsList
                            id={id}
                            commentCount={commentCount}
                        />
                    </div>
                    <div className="item-sidebar">
                    <Link to={`/update/${id}`}><div id="edit-post">EDIT</div></Link>
                        <div id="remove-post">REMOVE</div>
                    </div>
                </div>
            </div>
        );
    }
}


function mapStateToProps({ post }) {
    return {
        post,
    }
}

export default connect(mapStateToProps)(PostDetails)
