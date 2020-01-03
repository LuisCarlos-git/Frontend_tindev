import React, { useState } from 'react';

import api from '../../services/api';
import './login.css'

import logo from '../../assets/logo.svg';

export default function Login({ history }){
    const [ username, setUsername ]= useState('');

    async function handleSubmit(event){
        event.preventDefault();
        const response = await api.post('/devs', { username })

        const { _id } = response.data;

        history.push(`/dev/${_id}`)
    };

    

    return (
        <div className="container">           

            <form onSubmit={handleSubmit}>
            <img src={logo} alt="TinDev" title="Tindev"/>
            <label htmlFor="usergit">Seu usuario no github *</label>
            <input 
                placeholder="Digite seu usuario no github"
                type="text"
                id="usergit"
                value={username}
                onChange={event => setUsername(event.target.value)}
            />
            <button type="submit">Entrar</button>
        </form>
    </div>
    );
}