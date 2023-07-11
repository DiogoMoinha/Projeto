import React, { Component } from 'react';
import Grupo from './grupo';
import Loja from './loja';
import Mensagens from './mensagens';
import Creditos from './creditos';
import Pontuacao from './pontucao';

class Botao extends Component {
  state = {nome:"", clique: 1, pontuacao: 0, id: 0, imagem: "../imagens/botaoRed.png", pagina: 0}

  
  async componentDidMount() {
    this.buscarDadosIniciais();
  }

  // vai buscar os dados dos jogadores á base de dados
  async buscarDadosIniciais() {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("https://localhost:7152/api/jogadores", requestOptions)
      .then(res => res.json())
      .then(result => console.log( result ))
      .catch(error => { console.log('error', error) });
  }

  buscarDetalhes(id) {
    fetch("https://localhost:7152/api/jogadores/" + id)
      .then(res => res.json())
      .then(result => console.log( result ))
      .catch(error => console.log('error', error));
  }

  // cria o jogador
  async criarUltilizador() {


    var requestOptions = {
      method: 'POST',
      redirect: 'follow',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    };

    fetch("https://localhost:7152/api/jogadores/create", requestOptions)
      .then(res => res.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  // deixa editar o jogador
  async editarUtilizador(id) {

    var requestOptions = {
      method: 'PUT',
      redirect: 'follow',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    };

    fetch("https://localhost:7152/api/jogadores/update", requestOptions)
      .then(res => res.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  // elimina o jogador
  async removerUtilizador(id) {
    var requestOptions = {
      method: 'DELETE',
      redirect: 'follow'
    };

    fetch("https://localhost:7152/api/jogadores/delete/" + id, requestOptions)
      .then(res => res.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
  
  // atualiza a pontuação do jogador
  async clique(){
    this.state.pontuacao = this.state.pontuacao + this.state.clique;
  }

  // mostrar a loja, pontuação do jogador, o botão, os grupos no site e o botão para a pagina da bibliografia 
  // OU a bibliografia
  render(){
    // se o estado da página estiver a 0, chama a loja, o botão e os grupos
    if (this.state.pagina == 0){
    return (
        <div className='loja'><Loja /></div>,
        <div className="botao">
          <img src="../imagens/botaoRed.png" onClick={() => this.clique()}/>
        </div>,
        <div className='grupo'><Grupo /></div>,
        <button className='bio' onClick={() => this.Creditos()}>Creditos</button>,
        <div className='pontucacao'><Pontuacao /></div>
        );
    }
    else {
      // se não estiver a 0, chama a página da bibliografia
      return <Creditos />;
    }
  }

  // abre uma pagina para a bibliografia do trablaho
  Creditos(){
    this.setState({ pagina : 1})
  }

}


export default Botao;