import React from 'react';
import { SafeAreaView, View, Text, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

const payment = [
    {
        id: 1,
        name: 'Boleto',
    },
    {
        id: 2,
        name: 'Paypal',
    },
    {
        id: 3,
        name: 'PagSeguro',
    },

]

function Payment({name}) {
    return (
        <View style={styles.personalList}>
            <Feather name='credit-card' size={30} style={styles.icone}></Feather>
            <Text style={styles.name}>{name}</Text>
        </View>
    )
}



export default function Modalidades() {

    const navigation = useNavigation();


    function navigateToDiscover() {
        navigation.navigate('Discover')
    }

    function navigateToCalendar() {
        navigation.navigate('Calendar')
    }

    function navigateToProfile() {
        navigation.navigate('User')
    }


    return (
        <SafeAreaView style={styles.container}>


            <View style={styles.box}>
                <View style={styles.header}>
                    <Text style={styles.title}>R$ 120,00</Text>
                    <Text style={styles.subtitle}>Escolha sua forma de pagamento</Text>
                </View>
            </View>

            <View style = {styles.content}>

                <FlatList
                    style = {styles.itemList}
                    data={payment}
                    renderItem={({ item }) => (
                        <Payment name={item.name} />
                    )}
                    keyExtractor={item => item.id}
                >
                </FlatList>
            </View>

            <View style={styles.menu}>
                <TouchableOpacity onPress={() => navigateToDiscover()}>
                    <Feather name="compass" size={40} style={styles.icon}  ></Feather>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigateToCalendar()}>
                    <Feather name="calendar" size={40} style={styles.icon}  ></Feather>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigateToProfile()}>
                    <Feather name="user" size={40} style={styles.icon}  ></Feather>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}