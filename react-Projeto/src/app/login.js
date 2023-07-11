import React, { useState, useEffect, useRef } from "react";

export const Login = (props) => {
    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMesg] = useState('');
    const [successo, setSuccesso] = useState(false);

    const handleSubmit = (ev) => {
        this.ev.preventDefaul();
        console.log(email);
    }

    useEffect(() => {
        useRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMesg('');
    }, [email, password])

    return(
        <>
                <div className="login">
                <form onSubmit={handleSubmit}>
                <h2>Entrar</h2>
                <label for="email">
                    <p>Email:</p>
                    <input value={email} type="email" placeholder="OTeuEmail@server.com" id="email" name="email" required/>
                </label>
                <label for="password">
                    <p>Palavra-passe:</p>
                    <input value={password} type="password" id="password" name="password" required/>
                </label>
                <div>
                    <button type="submit">Entrar</button>
                </div>
                </form>
                <button onClick={() => props.onFormSwitch('register')}>Não tem uma conta? Registe-se aqui.</button>
            </div>
            </>
    )
}
