import React, { Component } from 'react';
import { connect } from 'react-redux'
import { get } from 'lodash'
import moment from 'moment';

import './App.css';

class CommentsList extends Component {

    handleComments = () => {
        const { post } = this.props
        const commentsList = get(post, 'comments', []);
        return commentsList
    }

    render() {
        return (
            <div className="comments">
                <p>{this.props.commentCount} comments</p>
                <div className="formulario">
                    <form name="falecomigo" method="post">
                        <input id="nome" name="nome" type="text" placeholder="Name" required />
                        <textarea name="mensagem" id="mensagem" rows="5" placeholder="Write your comment" required></textarea>
                        <input type="submit" name="enviar" value="COMMENT" className="botaoEnviar" />
                    </form>
                </div>
                {this.handleComments().map(comment => (
                    <div className="container-comments" key={comment.id}>
                        <div className="author">
                            {comment.author}
                        </div>
                        <div className="date">
                            Commented at {moment(comment.timestamp).format('DD/MM/YYYY')}
                        </div>
                        <div className="comment-content">
                            {comment.body}
                        </div>

                        <div className="edit-comment">
                            EDIT
                                </div>
                        <div className="remove-comment">
                            REMOVE
                                </div>
                        <div className="controls">
                            <div className="like-comment"></div>
                            <div className="like-comment-text">{comment.voteScore}</div>
                            <div className="deslike-comment"></div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

function mapStateToProps({ post }) {
    return {
        post,
    }
}

export default connect(mapStateToProps)(CommentsList)
