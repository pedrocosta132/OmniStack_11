import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'
import { FontAwesome } from '@expo/vector-icons';

import logo from '../../assets/logo.png';
import styles from './styles';

function Home(){
    const navigation = useNavigation();
    const route = useRoute();
    const incident = route.params.incident;

    function navigateBack(){
        navigation.goBack();
    }

    function sendMail(){
        console.log('send mail');
    }

    function sendSMS(){
        console.log('send sms');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logo}/>
                <TouchableOpacity onPress={navigateBack}><FontAwesome name="arrow-left" size={24} color="#e02041" /></TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={styles.incidentProperty}>ONG: </Text>
                <Text style={styles.incidentValue}>{incident.name} de {incident.city}</Text>
                <Text style={styles.incidentProperty}>Localização: </Text>
                <Text style={styles.incidentValue}>{incident.city}</Text>
                <Text style={styles.incidentProperty}>Caso: </Text>
                <Text style={styles.incidentValue}>{incident.title}</Text>
                <Text style={styles.incidentProperty}>Valor: </Text>
                <Text style={[styles.incidentValue, { marginBottom: 0}]}>€ {incident.value}</Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o heroi deste caso.</Text>

                <Text style={styles.heroDescription}>Entre em contacto:</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendSMS}>
                        <Text style={styles.actionText}>Telemovel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>Email</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Home;