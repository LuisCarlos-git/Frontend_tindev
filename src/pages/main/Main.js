import React from 'react';

import logo from '../../assets/logo.svg';
import like from '../../assets/like.svg';
import dislike from '../../assets/dislike.svg';

import './main.css'

export default function Main({ match }) {
    return(
        <div className="container-main">
            <img src={logo} alt=""/>
            <ul>
                <li>
                    <img src="https://avatars3.githubusercontent.com/u/53982648?v=4" alt=""/>
                    <footer>
                        <strong>luis carlos</strong>
                        <p>Programador durante todo o dia</p>
                    </footer>

                    <div className="button">
                        <button type="button">
                            <img src={like} alt=""/>
                        </button>

                        <button type="button">
                            <img src={dislike} alt=""/>
                        </button>
                    </div>
                </li>

                <li>
                    <img src="https://avatars3.githubusercontent.com/u/53982648?v=4" alt=""/>
                    <footer>
                        <strong>luis carlos</strong>
                        <p>Programador durante todo o dia</p>
                    </footer>

                    <div className="button">
                        <button type="button">
                            <img src={like} alt=""/>
                        </button>

                        <button type="button">
                            <img src={dislike} alt=""/>
                        </button>
                    </div>
                </li>

                <li>
                    <img src="https://avatars3.githubusercontent.com/u/53982648?v=4" alt=""/>
                    <footer>
                        <strong>luis carlos</strong>
                        <p>Programador durante todo o dia</p>
                    </footer>

                    <div className="button">
                        <button type="button">
                            <img src={like} alt=""/>
                        </button>

                        <button type="button">
                            <img src={dislike} alt=""/>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    );
}
