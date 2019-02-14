import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import moment from 'moment';
import { handleInitialData, postDetails } from './actions/shared'

class PostDetails extends Component {    
    render() {
        console.log("view", this.props)
        const {title, category, author, timestamp, voteStore, body, commentCount} = this.props.post
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
                                <div className="like-button-text">{voteStore}</div>
                                <div className="deslike-button"></div>
                            </div>
                        </div>
                        <p>
                            {body}
                        </p>
                        <div className="comments">
                            <p>{commentCount} comments</p>
                            <div className="container-comments">
                                <div className="author">
                                    Ana
                            </div>
                                <div className="date">
                                    Commented at 01/30/2018
                            </div>
                                <div className="comment-content">
                                    Amei seu post, muito legal
                            </div>
                                <div className="edit-comment">
                                    EDIT
                            </div>
                                <div className="remove-comment">
                                    REMOVE
                            </div>
                                <div className="controls">
                                    <div className="like-comment"></div>
                                    <div className="like-comment-text">30</div>
                                    <div className="deslike-comment"></div>
                                </div>
                            </div>
                        </div>
                        <div className="formulario">
                            <form name="falecomigo" method="post">
                                <input id="nome" name="nome" type="text" placeholder="Name" required />
                                <textarea name="mensagem" id="mensagem" rows="5" placeholder="Messege" required></textarea>
                                <input type="submit" name="enviar" value="COMMENT" className="botaoEnviar" />
                            </form>
                        </div>
                    </div>
                    <div className="item-sidebar">
                        <Link to="/update"><div id="edit-post">EDIT</div></Link>
                        <div id="remove-post">REMOVE</div>
                    </div>

                </div>
            </div>
        );
    }
}

function mapStateToProps({ post},{id}) {
   //const post = Object.keys(posts).filter(item => posts[item].id  === id)
    return {
        post: post,
    }
  }

  export default connect(mapStateToProps)(PostDetails)
