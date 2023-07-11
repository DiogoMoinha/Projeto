import './App.css';
import Botao from './app/jogador.js';
import React, { useState } from "react";
import { Login, login } from "./app/login.js";
import { Register } from "./app/register.js";


 function App() {
  const [FormaAtual, setFormaAtual] = useState('login');

  const toggleForm = (forName) => {
    setFormaAtual(forName);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Botao />
      </header>
    </div>
  );
}

export default App;
