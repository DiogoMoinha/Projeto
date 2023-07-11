import React, { Component } from 'react';


class mensagens extends Component {

    constructor(props) {
        super(props);
      }
    
    async buscarDadosMensagens() {
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
    
        fetch("https://localhost:7152/api/Mensagens", requestOptions)
          .then(res => res.json())
          .then(result => console.log( result ))
          .catch(error => { console.log('error', error) });
      }

      buscarDetalhes(id) {
        fetch("https://localhost:7152/api/Mensagens/" + id)
          .then(res => res.json())
          .then(result => this.setState({dadosItem : result}))
          .catch(error => console.log('error', error));
      }
    
      async criarMensagens() {
    
        var requestOptions = {
          method: 'POST',
          redirect: 'follow',
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          }
        };
    
        fetch("https://localhost:7152/api/Mensagens/create", requestOptions)
          .then(res => res.json())
          .then(result => console.log( result ))
          .catch(error => console.log('error', error));
      }

      async editarMensagens(id) {
    
        var requestOptions = {
          method: 'PUT',
          redirect: 'follow',
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          }
        };
    
        fetch("https://localhost:7152/api/Mensagens/update", requestOptions)
          .then(res => res.json())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
      }
    
      async removerMensagens(id) {
        var requestOptions = {
          method: 'DELETE',
          redirect: 'follow'
        };
    
        fetch("https://localhost:7152/api/Mensagens/delete/" + id, requestOptions)
          .then(res => res.json())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
      }

      mandarMensagem() {
        if(this.props.nome in ("https://localhost:7152/api")) {
            ;
        }
        else{
            

        }
      }

      verMensagem(id) {

      }

      render(){
        return(
            <div className="view"></div>,
            <div id="texto"><button onClick={() => this.mandarMensagem()}>Enviar</button></div>
        );
      }
}

export default mensagens;