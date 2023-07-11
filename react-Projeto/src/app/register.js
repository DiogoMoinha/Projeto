import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const handleSubmit = async (ev) => {
        ev.preventDefaul();
        console.log(email,password);
    }

    return(
        <div className="Register">
            <p ref={this.errRef} className={this.errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{this.errMsg}</p>
            <h2>Registar</h2>
            <form onSubmit={handleSubmit}>
            <label htmlFor="username">
                <p>Username</p>
                <input value={username} id="username" name="username"/>
            </label>
            <label htmlFor="email">
                <p>email</p>
                <input value={email} type="email" placeholder="OTeuEmail@server.com" id="email" name="email"/>
            </label>
            <label htmlFor="password">
                <p>Palavra-passe</p>
                <input value={password} type="password" id="password" name="password"/>
            </label>
            <div>
                <button type="submit">Registrar</button>
            </div>
            </form>
            <button onClick={() => props.onFormSwitch('login')}>Já tem uma conta? Entre aqui.</button>
        </div>
    )

}