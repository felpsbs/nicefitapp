
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#dddddd'
    },

    box: {
        padding: 20
    },

    logoRow: {
        flexDirection: 'row',
    },

    header: {
        alignItems: 'flex-start',
    },

    title: {
        fontSize: 36,
        marginBottom: 10,
        marginTop: 20,
        color: '#13131a',
        fontWeight: 'bold',
        marginLeft: 20
    },

    subtitle: {
        fontSize: 15,
        marginTop: 10,
        color: '#13131a',
        fontWeight: '300',
    },

    menu: {
        paddingBottom: 20,
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignSelf: 'center',
    },

    icon: {
        justifyContent: 'space-between',
        marginRight: 30,
        alignItems: 'center',
        marginLeft: 30,
        padding: 10
    },
    calendar: {
        marginTop: 5,
        marginLeft: 20,
        marginRight: 20
    },

    agenda: {
        backgroundColor: '#42f5ec',
        alignContent: 'center',
        marginLeft: '30%',
        marginRight: '30%',
        marginTop: 25,
        borderRadius: 6,
        
    },

    agendaText: {
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
        paddingTop: 8,
        paddingBottom: 8
    },

    logo: {
        width: 100,
        height: 100
    }
})