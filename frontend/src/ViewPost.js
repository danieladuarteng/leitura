import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

class ViewPost extends Component {
    render() {
        return (
            <div>
                <div className="home">
                    <h1><strong>Leitura</strong></h1>
                </div>

                <div className="container-view">
                    <div className="item-main">
                        <h1>Tecnologia é só coisa de homem?</h1>
                        <div className="cabecalho">
                            <div className="box-1"><a href="../mulheres-ti/">MULHERES TI</a></div>
                            <div className="box-2"><a href="../../sobre-mim">Daniela Duarte</a></div>
                            <div className="box-3">07 de dezembro de 2017</div>
                            <div className="icons">
                                <div className="like-button"></div>
                                <div className="like-button-text">30</div>
                                <div className="deslike-button"></div>
                            </div>
                        </div>
                        <p>
                            Toda vez que falamos do departamento de tecnologia,
                            se imagina um grupo de homens sentados em frente ao computador,
                            mas afinal essa área só contrata homem? Claro que não.
                            A área de tecnologia é como as outras, feita de homens e mulheres.
                        </p>
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
                        <div class="formulario">
                            <form name="falecomigo" method="post">
                                <input id="nome" name="nome" type="text" placeholder="Name" required />
                                <textarea name="mensagem" id="mensagem" rows="5" placeholder="Messege" required></textarea>
                                <input type="submit" name="enviar" value="COMMENT" class="botaoEnviar"/>
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

export default ViewPost;
