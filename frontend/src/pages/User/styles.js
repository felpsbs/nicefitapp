
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
        paddingTop: 20,
    },

    header: {
        alignItems: 'flex-start',
        marginBottom: 40
    },

    title: {
        fontSize: 36,
        marginBottom: 10,
        marginTop: 20,
        color: '#13131a',
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 15,
        marginBottom: 10,
        color: '#13131a',
        fontWeight: '300',
    },

    modalities: {
        fontSize: 20,
        marginTop: 55,
        fontWeight: '500'
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

    modalitieText:{
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center'
    },

    menu: {
        paddingBottom: 20,
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignSelf: 'center',
    },

    button:{
        backgroundColor:'#0384fc',
        marginRight: 110,
        marginLeft: 110,
        marginTop: 80,
        alignItems: 'center',
        padding: 15,
        borderRadius: 10,
    },

    informacoes: {
        paddingTop: 20,
        paddingLeft: 20
    },

    area: {
        backgroundColor: '#fff',
        borderRadius: 7,
        marginTop: 20,
        paddingBottom: 20
    },
    icon: {
        justifyContent: 'space-between',
        marginRight: 30,
        alignItems: 'center',
        marginLeft: 30,
        padding: 10
    },
    text:{
        fontSize: 16,
        fontWeight: '500'
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