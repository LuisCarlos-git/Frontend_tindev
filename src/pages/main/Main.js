import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import logo from '../../assets/logo.svg';
import like from '../../assets/like.svg';
import dislike from '../../assets/dislike.svg';

import './main.css'

export default function Main({ match, history }) {
    const [users, setUsers] = useState([]) 

    useEffect(() => {
        async function loadUsers(){
            const response = await api.get('/devs', {
				headers: { user_id:match.params.id }
			});
			setUsers(response.data)

		};
		

        loadUsers();

    },[match.params.id])

    async function handleLike(id){
         await api.post(`/devs/${id}/likes`,null,{
            headers: { user_id: match.params.id}
        })
        
        setUsers(users.filter(user => user._id !== id))
        
    }

    async function handleDislike(id){
        await api.post(`/devs/${id}/dislikes`,null,{
           headers: { user_id: match.params.id}
       })
       
       setUsers(users.filter(user => user._id !== id))
       
   }

   function backLogin(){
        history.push('/')
   }


    return(
        <div className="container-main">
            <img src={logo} alt=""/>
            {users.length > 0 ? (
                <ul>
                {users.map(user => {
                    return (
                        <li key={user._id}>
                            {console.log(user.name)}
                            <img src={user.avatar} alt=""/>
                            <footer>
                                <strong>{user.name}</strong>
                                <p>{user.bio}</p>
                            </footer>
        
                            <div className="button">
                                <button type="button" onClick={() => handleLike(user._id)}>
                                    <img src={like} alt=""/>
                                </button>
        
                                <button type="button" onClick={() => handleDislike(user._id)}>
                                    <img src={dislike} alt=""/>
                                </button>
                            </div>
                        </li>
                    );
                })}
            </ul>
            ) : (
                <div className="end">
                    <h1>Acabou :(</h1>
                    
                    <button onClick={backLogin}>Voltar ao login</button>
                </div>
            )}
        </div>
    );
}
