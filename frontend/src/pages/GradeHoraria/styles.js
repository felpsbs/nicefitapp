
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
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 20
    },

    header: {
        alignItems: 'flex-start',
    },

    title: {
        fontSize: 36,
        marginBottom: 10,
        marginTop: 20,
        marginLeft: 5,
        color: '#13131a',
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 15,
        marginTop: 10,
        color: '#13131a',
        fontWeight: '300',
    },

    itemList: {
        marginTop: 15
    },

    item: {
        width: 150,
        backgroundColor: '#42f5ec',
        borderRadius: 7,
        paddingTop: 40,
        paddingBottom: 40,
        marginRight: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'center'
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
        padding: 0
    },

    informacoes: {
        paddingTop: 10,
        paddingLeft: 20,
        paddingBottom: 10
    },

    nomeAula: {
        padding: 20,
        fontSize: 20,
        fontWeight: '600'
    },

    grade: {
        // paddingLeft: 250,
        paddingBottom: 10,
        marginLeft: 15,
        fontSize: 16,
        fontWeight: '400',
    },

    scheduleList: {
        backgroundColor: '#42f5ec',
        margin: 20,
        borderRadius: 10,
    },

    content:{
        height: 400
    },

    icone: {
        padding: 20,
    },

    row: {
        flexDirection: 'row'
    },

    logo: {
        width: 100,
        height: 100,
        alignSelf: 'flex-end'
    },

    logoRow: {
        flexDirection: 'row',
    },
    
})