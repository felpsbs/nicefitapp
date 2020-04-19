import React from 'react';
import { SafeAreaView, View, Text, List } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

import logoImg from '../../../assets/logo.jpeg'

const usuario = {
    nome: "Lucas Ribeiro",
    idade: "12/09/1988",
    email: "lucasribeiro@email.com",
    cidade: "São Paulo"
};

export default function Discover() {
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

    function navigateToPayment() {
        navigation.navigate('Payment')
    }


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.box}>
                <View style={styles.header}>
                    <View style={styles.logoRow}>
                        <Image source={logoImg} style={styles.logo}></Image>
                        <Text style={styles.title}>Perfil</Text>                        
                    </View>
                </View>
                <View>
                    <Feather name='user' size={60}></Feather>
                </View>
                <View style={styles.area}>
                    <Text style={styles.informacoes}>Nome: {usuario.nome}</Text>
                    <Text style={styles.informacoes}>Data de nascimento:{usuario.idade}</Text>
                    <Text style={styles.informacoes}>Email: {usuario.email}</Text>
                    <Text style={styles.informacoes}>Cidade: {usuario.cidade}</Text>


                </View>

                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigateToPayment()}>
                        <Text style={styles.text}>Pagar</Text>
                    </TouchableOpacity>
                </View>
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