import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div class="home">
          <h1><strong>Leitura</strong></h1>
        </div>

<div class="grid-posts">
  <div class="grid-posts-item1">
  
    <div class="post1">
      <a href="blog/ti-para-todos/como-foi-minha-primeira-vez-em-um-hackathon">
        <h1>Como foi minha primeira vez em um Hackathon</h1>
      </a>
       
      <div class="cabecalho">
        <div class="box-1"><a href="blog/ti-para-todos/">TI PARA TODOS</a></div>
        <div class="box-2"><a href="sobre-mim">Daniela Duarte</a></div>
        <div class="box-3">20 de junho de 2018</div>
      </div>
    
      <div class="conteudo-post">
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
      <div class="botaoEnviar">CONTINUE LENDO</div>
      <div className="icons">
        <div className="like-button"></div>
        <div className="deslike-button"></div>
      </div>
      <div>
     
      </div>
      </a>
    </div>
  </div>
  
  
  <div class="grid-posts-item2">
    
    <div class="meconheca">
      <div class="botaoEnviar"><a href="sobre-mim">NEW POST</a></div>
    </div>

    <div className="atualizacoes">
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

export default App;
