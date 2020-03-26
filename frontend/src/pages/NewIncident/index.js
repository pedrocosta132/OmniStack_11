import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import api from '../../services/api';

import './styles.css';

import logo from '../../assets/logo.svg';

function NewIncident(){
    const ongId = localStorage.getItem('ongId');
    const[title, setTitle] = useState('');
    const[description, setDescription] = useState('');
    const[value, setValue] = useState('');

    const history = useHistory();

    async function handleSubmit(e){
        e.preventDefault();

        const data = {
            title,
            description,
            value
        };

        console.log(data, ongId);

        try{
            await api.post('/incident', data, {
                headers: {
                    Authorization: ongId
                }
            });
            alert('Caso adicionado com sucesso!');
            history.push('/profile');
        }
        catch(err){
            alert('Erro ao adicionar novo caso!');
        }
    }

    return (
        <div className="new-incident">
            <section className="content">
                <div className="left">
                    <img src={logo} alt="Be the hero"/>

                    <h1>Adicionar novo caso</h1>
                    <p>Adicione um novo caso relacionado à sua organização.</p>

                    <Link to="/profile" className="backlink"><FaArrowLeft size="16" color="#e02041"/>Voltar atrás</Link>
                </div>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        placeholder="Titulo do caso"
                        required
                        value={title}
                        onChange={ e => setTitle(e.target.value) }
                    />
                    <textarea
                        placeholder="Descrição"
                        required
                        value={description}
                        onChange={ e => setDescription(e.target.value) }
                    />
                    <input
                        type="price"
                        placeholder="Valor necessário"
                        required
                        value={value}
                        onChange={ e => setValue(e.target.value) }
                    />
                    <button className="button">Adicionar</button>
                </form>
            </section>
        </div>
    )
}

export default NewIncident;