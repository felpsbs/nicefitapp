
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

    icon: {
        justifyContent: 'space-between',
        marginRight: 30,
        alignItems: 'center',
        marginLeft: 30,
        padding: 0
    },

    informacoes: {
        paddingTop: 10
    },


    msg: {
        padding: 60,
        fontSize: 18,
        fontWeight: '400'
    },

    name: {
        padding: 25,
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
    personalList: {
        backgroundColor: '#FFF',
        margin: 20,
        borderRadius: 10,
    },

    content:{
        height: 450
    },

    icone: {
        padding: 20,
    },

    row: {
        flexDirection: 'row'
    },

    circle: {
        color: '#3d7bff',
        margin: 15,
        fontWeight: 'bold'
    }

    
})