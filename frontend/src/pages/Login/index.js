import React,{ useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa';
import api from '../../services/api';

import './styles.css';

import heroesImg from '../../assets/heroes.png';
import logo from '../../assets/logo.svg';

function Login(){

    const [id, setId] = useState('');
    const history = useHistory();

    async function handleSubmit(e){
        e.preventDefault();

        const data = { id };

        try{
            const response = await api.post('/session',data);
            
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');
        }
        catch(err){
            alert('Id de login errado!');
        }
    }

    return (
        <section className="login">
            <div className="form">
                <img src={logo} alt="Be the hero"/>
                <form onSubmit={handleSubmit}>
                    <h1>Entrar na conta</h1>
                    <input
                        type="text"
                        placeholder="ID de login"
                        required
                        value={id}
                        onChange={ e => { setId(e.target.value)} }
                    />
                    <button className="button" type="submit">Entrar</button>
                </form>
                <Link to="/register" className="backlink"><FaSignInAlt size="16" color="#e02041"/>Crie a sua conta</Link>
            </div>
            <img src={heroesImg} alt="Our Heroes"/>
        </section>
    );
}

export default Login;