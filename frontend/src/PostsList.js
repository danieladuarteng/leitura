import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class PostsList extends Component {
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
        } = this.props;

        return (
            <div className="post1">
                
                <Link to={`/${category}/${id}`}><h1>{title}</h1></Link>
                <div className="cabecalho">
                    <div className="box-1"><a href="blog/ti-para-todos/">{category}</a></div>
                    <div className="box-2"><a href="sobre-mim">{author}</a></div>
                    <div className="box-3">{timestamp}</div>
                    <div className="box-4"></div>
                    <div className="contador">{commentCount} comments</div>
                </div>

                <div className="conteudo-post">
                    <p>{body}</p>
                </div>

                <Link to={`/${category}/${id}`}>
                    <div className="botaoEnviar">CONTINUE LENDO</div>
                    <div className="icons-post">
                        <div className="like-post"></div>
                        <div className="like-post-text">{voteScore}</div>
                        <div className="deslike-post"></div>
                    </div>
                </Link>

                <div className="edit-or-remove">
                    <Link to="/update"><div id="edit-post">EDIT</div></Link>
                    <div id="remove-post">REMOVE</div>
                </div>
            </div>
        )
    }
}

export default PostsList
