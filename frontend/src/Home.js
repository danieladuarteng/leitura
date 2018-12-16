import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import api from './LeituraAPI'
import './App.css';

class Home extends Component {
  render() {
    console.log('api', api)
    return (
      <div>
        <div className="home">
          <h1><strong>Leitura</strong></h1>
        </div>

        <div className="grid-posts">
          <div className="grid-posts-item1">

            <div className="post1">
              <Link to="/post"><h1>Como foi minha primeira vez em um Hackathon</h1></Link>



              <div className="cabecalho">
                <div className="box-1"><a href="blog/ti-para-todos/">TI PARA TODOS</a></div>
                <div className="box-2"><a href="sobre-mim">Daniela Duarte</a></div>
                <div className="box-3">20 de junho de 2018</div>
                <div className="box-4"></div>
                <div className="contador">32 comments</div>
              </div>

              <div className="conteudo-post">
                <p>Primeiro para quem não sabe:</p>

                <p>
                  <strong>
                    <em>
                      <a href="http://www.natura.com.br/e/entenda-o-que-e-hackathon" target="_blank">
                        Hackathon é um evento que reúne pessoas empreendedoras, apaixonadas por tecnologia e
                        sustentabilidade para uma maratona de programação, prototipagem e colaboração.
                      </a>
                    </em>
                  </strong>
                </p>
              </div>

              <a href="blog/ti-para-todos/como-foi-minha-primeira-vez-em-um-hackathon">
                <div className="botaoEnviar">CONTINUE LENDO</div>
                <div className="icons-post">
                  <div className="like-post"></div>
                  <div className="like-post-text">52</div>
                  <div className="deslike-post"></div>
                </div>
              </a>

              <div className="edit-or-remove">
                <Link to="/update"><div id="edit-post">EDIT</div></Link>
                <div id="remove-post">REMOVE</div>
              </div>
            </div>
          </div>


          <div className="grid-posts-item2">

            <div className="meconheca">
            <Link to="/update"><div className="botaoEnviar">NEW POST</div></Link>
              
            </div>

            <div className="categories">
              <h1>SORT BY </h1>
              <select>
                <option value="volvo">Date</option>
                <option value="saab">Title</option>
                <option value="opel">Author</option>
                <option value="audi">Comments</option>
                <option value="audi">More votes</option>
                <option value="audi">Less votes</option>
              </select>
            </div>

            <div className="atualizacoes">
              <h1>CATEGORIES</h1>
              <ul>
                <li>
                  <a href="blog/ti-para-todos/como-foi-o-meetup-front-end-study-1">
                    ALL CATEGORIES
						</a>
                </li>
                <li>
                  <a href="blog/ti-para-todos/como-foi-minha-primeira-vez-em-um-hackathon">
                    MULHERES NO TI
						</a>
                </li>
                <li>
                  <a href="blog/aprendizados/relacionamento-no-mundo-real-tambem-e-essencial">
                    TECNOLOGIA
						</a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Home;
