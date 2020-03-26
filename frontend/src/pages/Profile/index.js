import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaPowerOff, FaTrashAlt } from 'react-icons/fa';
import api from '../../services/api';

import './styles.css';

import logo from '../../assets/logo.svg';

function Profile(){
    const [incidents, setIncidents] = useState([]);
    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();

    useEffect( () => {
        api.get('/profile', {
            headers: {
                Authorization: ongId
            }
        }).then(res => {
            setIncidents(res.data);
        })
    }, [ongId]);

    async function handleDelete(id){
        try{
            await api.delete(`/incident/${id}`, {
                headers: {
                    Authorization: ongId
                }
            });
            setIncidents(incidents.filter( incident => incident.id !== id));
        }
        catch(err){
            alert('Erro ao terminar caso.');
        }
    }

    function handleLogout(){
        localStorage.clear();
        history.push('/login');
    }

    return(
        <div className="profile">
            <header>
                <img src={logo} alt="Be the hero"/>
                <span>Bem-vindo(a) {ongName}</span>
                <Link to="/incident/new"><button className="button">Adicionar novo caso</button></Link>
                <button className="button button-alt" onClick={handleLogout}><FaPowerOff size={18} color="#" /></button>
            </header>
            <main>
                <h1>Casos atuais</h1>

                <ul>
                    {incidents.map(incident => (
                        <li key={incident.id}>
                            <strong>Caso:</strong>
                            <p>{incident.title}</p>

                            <strong>Descrição:</strong>
                            <p>{incident.description}</p>

                            <strong>Valor:</strong>
                            <p>€ {incident.value}</p>

                            <button type="button" onClick={ () => handleDelete(incident.id) }><FaTrashAlt size={20} color="#a8a8b3"/></button>
                        </li>
                    ))}
                    
                </ul>
            </main>
        </div>
    )
}

export default Profile;