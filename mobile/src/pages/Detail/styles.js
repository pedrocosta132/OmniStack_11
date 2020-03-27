import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center' 
    },

    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#ffffff',
        marginBottom: 16,
        marginTop: 42
    },

    incidentProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold'
    },

    incidentValue: {
        marginTop: 8,
        marginBottom: 24,
        fontSize: 15,
        color: '#737380'
    },

    contactBox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#ffffff',
        marginBottom: 16
    },

    heroTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#13131a',
        lineHeight: 30
    },

    heroDescription: {
        fontSize: 15,
        color: '#737380',
        marginTop: 16
    },

    actions: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    action: {
        backgroundColor: '#e03041',
        borderRadius: 8,
        height: 50,
        flex: 1,
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },

    actionText: {
        color: '#ffffff',
        fontSize: 15,
        fontWeight: 'bold'
    }
});