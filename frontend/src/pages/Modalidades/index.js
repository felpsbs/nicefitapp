import React from 'react';
import { SafeAreaView, View, Text, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

const personal = [
    {
        id: 1,
        name: 'Thiago',
        grade: 3.0,
    },
    {
        id: 2,
        name: 'Maria',
        grade: 5.0,
    },
    {
        id: 3,
        name: 'Thomas',
        grade: 2.5,
    },
    {
        id: 4,
        name: 'Anderson',
        grade: 4.3,
    },
    {
        id: 5,
        name: 'Flavio',
        grade: 3.0,
    },
    {
        id: 6,
        name: 'Joana',
        grade: 3.8,
    },

]

function Persona({name, grade}) {
    return (
        <View style={styles.personalList}>
            <Feather name='user' size={50} style={styles.icone}></Feather>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.grade}>{grade}</Text>
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
                    <Text style={styles.title}>Personal</Text>
                    <Text style={styles.subtitle}>Quem melhor combina com você?</Text>
                </View>
            </View>

            <View style = {styles.content}>
                <FlatList
                    style = {styles.itemList}
                    data={personal}
                    renderItem={({ item }) => (
                        <TouchableOpacity>
                                <Persona name={item.name} grade={item.grade} />
                        </TouchableOpacity>
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