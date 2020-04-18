import React from 'react';
import {SafeAreaView , View, Text, List } from 'react-native';
import {Feather} from '@expo/vector-icons';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";



const modalidades = [
    {
        id: 1,
        name: 'Musculação'
    },
    {
        id: 2,
        name: 'Funcional'
    },
    {
        id: 3,
        name: 'Hiit'
    },
    {
        id: 4,
        name: 'Dança'
    }
]

const classType = [
    {
        id: 1,
        name: 'Individual'
    },

    {
        id: 2,
        name: 'Grupo'
    }
]



function Item({ name }) {
    return (
        <View style={styles.item}>
            <Text style={styles.modalitieText}>{name}</Text>
        </View>
    );
}

export default function Discover() {

    const navigation = useNavigation();

    function navigateToCalendar(calendar){
        navigation.navigate('Calendar')
    }


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.box}>
                <View style={styles.header}>
                    <Text style={styles.title}>Descubra</Text>
                    <Text style={styles.subtitle}>Encontre seu personal!</Text>
                </View>

                <View>
                    <Text style={styles.modalities}>Modalidades</Text>
                    <FlatList
                        style={styles.itemList}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={modalidades}
                        renderItem={({ item }) => (
                            <TouchableOpacity>
                                <Item name={item.name} />
                            </TouchableOpacity>
                        )}
                    >
                    </FlatList>
                </View>

                <View>
                    <Text style={styles.modalities}>Tipos de aula</Text>
                    <FlatList
                        style={styles.itemList}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={classType}
                        renderItem={({ item }) => (
                            <TouchableOpacity>
                                <Item name={item.name} />
                            </TouchableOpacity>
                        )}
                    >
                    </FlatList>
                </View>

            </View >

            <View style={styles.menu}>
                    <TouchableOpacity>
                        <Feather name="compass" size={40} style={styles.icon}  ></Feather>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigateToCalendar(calendar)}>
                        <Feather name="calendar" size={40} style={styles.icon}  ></Feather>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Feather name="user" size={40} style={styles.icon}  ></Feather>
                    </TouchableOpacity>
                </View>

        </SafeAreaView>
    )
}