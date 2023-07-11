import React, { Component } from 'react';

class Pontuacao extends Component{

    constructor(props) {
        super(props);
      }


    // mostra a pontuação do jogador
      render(){
        return(
        <h1>Pontuação:</h1>, 
        this.state.jogador.pontuacao
        );
      }
    
}

export default Pontuacao;

