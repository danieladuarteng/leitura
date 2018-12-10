import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ViewPost extends Component {
    render() {
        return (
            <div>
                <div className="home">
                    <h1><strong>Leitura</strong></h1>
                </div>

                <div class="estrutura-blog">
                    <div class="conteudo-blog">
                        <h1>Tecnologia é só coisa de homem?</h1>
                        <div class="cabecalho">
                            <div class="box-1"><a href="../mulheres-ti/">MULHERES TI</a></div>
                            <div class="box-2"><a href="../../sobre-mim">Daniela Duarte</a></div>
                            <div class="box-3">07 de dezembro de 2017</div>
                            <div className="icons">
                                <div className="like-button"></div>
                                Contador
                                <div className="deslike-button"></div>
                                Contador
                            </div>
                        </div>
                        <p>
                        Toda vez que falamos do departamento de tecnologia,
                        se imagina um grupo de homens sentados em frente ao computador,
                        mas afinal essa área só contrata homem? Claro que não.
			            A área de tecnologia é como as outras, feita de homens e mulheres.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewPost;
