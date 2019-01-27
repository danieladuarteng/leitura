import React, { Component } from 'react';
import './App.css';

class ViewPost extends Component {
    render() {
        return (
            <div>
                <div className="home">
                    <h1><strong>Leitura</strong></h1>
                </div>

                <div className="container-view">
                    <div className="item-main">
                        <div className="formulario">
                            <form name="falecomigo" method="post">
                               <input id="nome" name="nome" type="text" placeholder="Title" required />
                               <input id="nome" name="nome" type="text" placeholder="Categorie" required />
                               <input id="nome" name="nome" type="text" placeholder="Author" required />
                                <textarea name="mensagem" id="mensagem" rows="5" placeholder="Body" required></textarea>
                                <input type="submit" name="enviar" value="UPDATE" class="botaoEnviar"/>
                            </form>
                        </div>
                        <div className="white-line"></div>
                        <div className="comments">
                            <p>26 comments</p>
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
                                <input type="submit" name="enviar" value="COMMENT" class="botaoEnviar"/>
                            </form>
                        </div>
                    </div>
                    <div className="item-sidebar">
                        <div id="edit-post">EDIT</div>
                        <div id="remove-post">REMOVE</div>
                    </div>
                       
                </div>
            </div>
        );
    }
}

export default ViewPost;
