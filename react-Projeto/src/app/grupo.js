import React, { Component } from 'react';
import { useState } from 'react';

class Grupo extends Component {
    state = {listaGrupos: [], dadosGrupo: null}

    constructor(props) {
        super(props);
      }

    async componentDidMount() {
        this.buscarDadosGrupos();
      }

    // vai buscar os dados dos grupos á base de dados
    async buscarDadosGrupos() {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("https://localhost:7152/api/Grupos", requestOptions)
      .then(res => res.json())
      .then(result => this.array[result])
      .catch(error => { console.log('error', error) });
  }

  buscarDetalhes(id) {
    fetch("https://localhost:7152/api/Grupos/" + id)
      .then(res => res.json())
      .then(result => console.log( result ))
      .catch(error => console.log('error', error));
  }

  // cria o grupo
  async criarGrupo() {

    var requestOptions = {
      method: 'POST',
      redirect: 'follow',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    };

    fetch("https://localhost:7152/api/Grupos/create", requestOptions)
      .then(res => res.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  // edita oo grupo
  async editarGrupo(id) {

    var requestOptions = {
      method: 'PUT',
      redirect: 'follow',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    };

    fetch("https://localhost:7152/api/Grupos/update", requestOptions)
      .then(res => res.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  // elimina o grupo
  async removerGrupo(id) {
    var requestOptions = {
      method: 'DELETE',
      redirect: 'follow'
    };

    fetch("https://localhost:7152/api/Grupos/delete/" + id, requestOptions)
      .then(res => res.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  

  // cria uma lista de grupos com um botão com a opção de trocar de grupo
  render() {
    this.array.forEach(element => this.listaGrupos.push(<li key={this.id} className='lista-grupo' > {(this.buscarDetalhes(element.id))} 
    <button onClick={(dadosGrupo) => this.entrarGrupo(dadosGrupo)}>{this.active ? "Entrar" : "Adicionado"}</button> </li>));
    return ;
  }
}

// muda o grupo em que o jogador está
export const EntrarGrupo = (dadosGrupo) => {
  const [active, setActive] = useState(false);
  this.props.jogador.Grupo = Grupo.id;
}

export default Grupo;

