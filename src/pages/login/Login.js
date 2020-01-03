import React from 'react';
import './login.css'

import logo from '../../assets/logo.svg';

export default function Login(){
    return (
        <div className="container">           

            <form>
            <img src={logo} alt="TinDev" title="Tindev"/>
            <label htmlFor="usergit">Seu usuario no github *</label>
            <input 
                placeholder="Digite seu usuario no github"
                type="text"
                id="usergit"
            />

            <button type="submit">Entrar</button>
        </form>
    </div>
    );
}