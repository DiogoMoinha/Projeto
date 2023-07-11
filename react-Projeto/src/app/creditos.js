import React, { Component } from 'react';

class Creditos extends Component{

    // bibliografia do trabalho
    render(){
        return(
            <div className='creditos'>
                <p>Engenharia Informática / Desenvolvimento Web / 2º Ano</p>,
                <p>Diogo Moinhá, Nº23040
                    Martim Santos, Nº24235</p>,
                <p>Foi usada Bootstrap e EntityFramework</p>,
                <p>O login e o registo com feito com a ajuda de videos:
                    <br />
                    https://www.youtube.com/watch?v=Y-XW9m8qOis
                    <br />
                    https://www.youtube.com/watch?v=X3qyxo_UTR4   
                </p>
            </div>  
        )
    }
}

export default Creditos;