import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import api from '../../services/api';

import './styles.css';

import logo from '../../assets/logo.svg';

function Register(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cellphone, setCellphone] = useState('');
    const [city, setCity] = useState('');
    const [postal, setPostal] = useState('');

    const history = useHistory();

    async function handleSubmit(e){
        e.preventDefault();

        const data = {
            name,
            email,
            cellphone,
            city,
            postal
        };

        try{
            const response = await api.post('/ong', data);
            alert(`Seu id de acesso: ${response.data.id}`);
            history.push('/login');
        }
        catch(err){
            alert('Erro ao registar ONG!');
        }
    }

    return (
        <div className="register">
            <section className="content">
                <div className="left">
                    <img src={logo} alt="Be the hero"/>

                    <h1>Registar</h1>
                    <p>Faça o seu registo. Ajude as pessoas a encontrar os casos da sua organização.</p>

                    <Link to="/login" className="backlink"><FaArrowLeft size="16" color="#e02041"/>Entre na sua conta</Link>
                </div>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        placeholder="Nome da ONG"
                        required
                        value={name}
                        onChange={ e => { setName(e.target.value) }}
                    />
                    <input 
                        type="email"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={ e => { setEmail(e.target.value) }}
                    />
                    <input
                        type="number"
                        placeholder="Nº de telemovel"
                        required
                        value={cellphone}
                        onChange={ e => { setCellphone(e.target.value) }}
                    />
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="Cidade"
                            required
                            value={city}
                            onChange={ e => { setCity(e.target.value) }}
                        />
                        <input
                            type="text"
                            placeholder="Código-Postal"
                            required
                            value={postal}
                            onChange={ e => { setPostal(e.target.value) }}
                        />
                    </div>
                    <button className="button">Registar</button>
                </form>
            </section>
        </div>
    );
}

export default Register;