import React, { Component } from 'react';
import { useState } from 'react';
import createUtilityClassName from 'react-bootstrap/esm/createUtilityClasses';
import "react-datepicker/dist/react-datepicker.css";

class Loja extends Component {
    state = {listaItems: [], dadosItem: null, id:0}

    constructor(props) {
      super(props);
    }

    componentDidMount(){
        setInterval(()=>{
            this.buscarDadosLoja();
        }, 2000)
    }

    //vai boscar os dados do itens á base de dados
    async buscarDadosLoja() {
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
    
        fetch("https://localhost:7152/api/itens", requestOptions)
          .then(res => res.json())
          .then(result => this.array[result])
          .catch(error => { console.log('error', error) });
      }

      buscarDetalhes(id) {
        fetch("https://localhost:7152/api/itens/" + id)
          .then(res => res.json())
          .then(result => this.setState({dadosItem : result}))
          .catch(error => console.log('error', error));
      }

      async buscarDadosItensJogador() {
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
    
        fetch("https://localhost:7152/api/itens/User/", requestOptions)
          .then(res => res.json())
          .then(result => console.log( result ))
          .catch(error => { console.log('error', error) });
      }

      buscarDetalhes(id) {
        fetch("https://localhost:7152/api/itens/User/" + id)
          .then(res => res.json())
          .then(result => this.setState({dadosItem : result}))
          .catch(error => console.log('error', error));
      }
    
      // deixa criar itens e mete-los na base de dados
      async criarItems() {
    
        var requestOptions = {
          method: 'POST',
          redirect: 'follow',
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          }
        };
    
        fetch("https://localhost:7152/api/itens/create", requestOptions)
          .then(res => res.json())
          .then(result => console.log( result ))
          .catch(error => console.log('error', error));
      }

      // edita os itens na base de dados
      async editarItems(id) {
    
        var requestOptions = {
          method: 'PUT',
          redirect: 'follow',
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
        };
    
        fetch("https://localhost:7152/api/itens/update", requestOptions)
          .then(res => res.json())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
      }
    
      // elimina os itens da base de dados
      async removerItems(id) {
        var requestOptions = {
          method: 'DELETE',
          redirect: 'follow'
        };
    
        fetch("https://localhost:7152/api/itens/delete/" + id, requestOptions)
          .then(res => res.json())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
      }
      
      

    // adiciona mais 1 ao valor do clique
    async mais1(){
      this.props.clique= this.props.clique + 1;
      this.props.pontuacao = this.props.pontuacao - this.state.dadosItem.custo;
    }

    // adiciona mais 69 ao valor do clique
    async mais69(){
      this.props.clique= this.props.clique + 69;
      this.props.pontuacao = this.props.pontuacao - this.state.dadosItem.custo;
    }

    // multiplica o valor do clique por 5
    async x5(){
      this.props.clique= this.props.clique * 5;
      this.props.pontuacao = this.props.pontuacao - this.state.dadosItem.custo;
    }

    // multiplica o valor do clique por 100
    async x100(){
      this.props.clique= this.props.clique * 100;
      this.props.pontuacao = this.props.pontuacao - this.state.dadosItem.custo;
    }

    // invoca uma imagem decorativa para o botão
    async naoBotao(){
      this.props.pontuacao = this.props.pontuacao - this.state.dadosItem.custo;
      return <img src='not a button.png' />;
    }

    // invoca uma imagem decorativa para o botão com o tema natalicio
    async natal(){
      this.props.pontuacao = this.props.pontuacao - this.state.dadosItem.custo;
      return <img src='christmas hat.png' />;
    }
      
      // funções para os itens
      async item(id) {
        if (id = 1){
          this.mais1();
        }
        else if (id = 2){
          this.mais69();
        }
        else if (id = 3){
          this.x5();
        }
        else if (id = 4){
          this.x100();
        }
        else if (id = 5){
          this.naoBotao();
        }
        else {
          this.natal();
        }
      }

      // cria um lista de itens com um botão que os compra
      render() {
        this.array.forEach(element => this.listaItems.push(<li key={this.id} className='lista-item' > {(this.buscarDetalhes(element.id))} 
        <button onClick={(dadosItem) => this.Comprar(dadosItem)}>{this.active ? "comprar" : "comprado"}</button> </li>));
        return ;
      }
}

//muda o estado do botão no item selecionado
export const Comprar = (dadosItem) => {
  const [active, setActive] = useState(false);
  if(this.props.pontuacao >= this.state.dadosItem.custo){
    setActive(true)
  }
}

export default Loja;