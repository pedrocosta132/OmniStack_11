import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { FontAwesome } from '@expo/vector-icons';
import api from '../../services/api';

import logo from '../../assets/logo.png';
import styles from './styles';

function Home(){
    const [incidents, setIncidents] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    function navigateToDetail(incident){
        navigation.navigate('Detail', { incident });
    }

    async function loadIncidents(){
        if(loading){
            return;
        }
        if(total > 0 && incidents.length == total){
            return;
        }
        setLoading(true);
        console.log('Pagina' + page);
        api.get('/incident', {
            params: { page }
        })
        .then(res => {
            setIncidents([ ... incidents, ... res.data]);
            setTotal(res.headers['x-total-count']);
            setPage(page + 1);
            setLoading(false);
        });
    }

    useEffect(() => {
        loadIncidents();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logo}/>
                <Text style={styles.headerText}>Total de <Text style={styles.headerTextBold}>{total} casos.</Text></Text>
            </View>

            <Text style={styles.title}>Bem-vindo</Text>
            <Text style={styles.description}>Escolha um dos casos e torne-se um heroi.</Text>

            <FlatList 
                data={incidents}
                style={styles.incidentList}
                keyExtractor={incident => String(incident.id)}
                // showsVerticalScrollIndicator={false}
                onEndReached={loadIncidents}
                onEndReachedThreshold={0.1}
                renderItem={({ item: incident }) => (
                    <View style={styles.incident}> 
                        <Text style={styles.incidentProperty}>ONG: </Text>
                        <Text style={styles.incidentValue}>{incident.name}</Text>
                        <Text style={styles.incidentProperty}>Caso: </Text>
                        <Text style={styles.incidentValue}>{incident.title}</Text>
                        <Text style={styles.incidentProperty}>Valor: </Text>
                        <Text style={styles.incidentValue}>€ {incident.value}</Text>

                        <TouchableOpacity style={styles.detailButton} onPress={() => navigateToDetail(incident)}>
                            <Text style={styles.detailButtonText}>Detalhes</Text>
                            <FontAwesome name="arrow-right" size={16} color="#e02041" />
                        </TouchableOpacity>
                    </View>
                )}
            />

        </View>
    )
}

export default Home;