import React from 'react';
import { SafeAreaView, View, Text, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

import logoImg from '../../../assets/logo.jpeg'

const toReceive = [
    {
        id: 1,
        name: 'Ana',
        modalitie: 'Zumba',
        value: 60.00
    },

    {
        id: 2,
        name: 'Jorge',
        modalitie: 'Hiit',
        value: 30.00
    },

    {
        id: 3,
        name: 'Carla',
        modalitie: 'hiit',
        value: 30.00
    }

]

function Receive({name, modalitie, value}) {
    return (
        <View style={styles.personalList}>
            <Feather name='plus' size={30} style={styles.icone} color='red'></Feather>
            <View style={styles.boxName}>
                <Text style={styles.user}>{name}</Text>
                <View style={styles.boxPay}>
                    <View style={styles.test}>
                        <Text style={styles.sport}>{modalitie}</Text>
                    </View>
                    
                </View>
            </View>
            <Text style={styles.value}>R$ {value},00</Text>
            

        </View>
    )
}



export default function Receipt() {

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

    function navigateToExtract() {
        navigation.navigate('Extract')
    }

    function navigateToPendent() {
        navigation.navigate('Receipt')
    }


    return (
        <SafeAreaView style={styles.container}>


            <View style={styles.box}>
                <View style={styles.header}>
                    <View style={styles.logoRow}>
                        <Image source={logoImg} style={styles.logo}></Image>
                        <Text style={styles.title}>R$ 120,00</Text>
                    </View>
                    <View style={styles.receipt}>
                        <TouchableOpacity style={styles.receiptChoice} onPress={navigateToPendent()}>
                            <Text>
                                A Receber
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.receiptChoice} onPress={() => navigateToExtract()}>
                            <Text>
                                Recebidos
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style = {styles.content}>

                <FlatList
                    style = {styles.itemList}
                    data={toReceive}
                    renderItem={({ item }) => (
                        <Receive name={item.name} modalitie={item.modalitie} value={item.value}/>
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