
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
        fontWeight: 'bold',
        marginLeft: 20
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
        padding: 10
    },

    personalList: {
        backgroundColor: '#42f5ec',
        height: 100,
        marginLeft:25,
        marginRight: 25,
        marginBottom: 20,
        borderRadius: 7,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    icone: {
        paddingLeft: 20
    },

    name: {
        padding: 15,
        fontSize: 20,
        marginBottom: 10,
        marginRight: 20,
        fontWeight: '600'
    },

    content: {
        height: 370
    },

    receiptButton: {
        backgroundColor: '#fff',
        padding: 14,
        marginLeft: '33%',
        width: 120,
        alignItems: 'center',
        borderRadius: 6,
        marginBottom: 8
    },

    buttonText: {
        fontWeight: '600',
        fontSize: 16,
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