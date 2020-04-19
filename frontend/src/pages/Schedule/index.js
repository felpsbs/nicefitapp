import React from 'react';
import { SafeAreaView , View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

const horarios = [
    {
        id: 1,
        nomeAula: "Funcional",
        nomeAluno: "Isabela",
        data: "12/03/2020",
        horario: "22:30",
    },
    {
        id: 2,
        nomeAula: "Musculação",
        nomeAluno: "Pedro",
        data: "12/03/2020",
        horario: "19:30", 
    },
    {
        id: 3,
        nomeAula: "Aula de Zumba",
        nomeAluno: "Carla",
        data: "12/03/2020",
        horario: "15:30",
    },
    
];

function Horario({ nomeAula, nomeAluno, data, horario }) {
    return (
        <View style={ styles.scheduleList }>
            <View style={ styles.row }>                
                <Text style={ styles.nomeAula }>{ nomeAula }</Text>
            </View>
            <Text style={ styles.informacoes }>Aluno(a): { nomeAluno }</Text>
            <Text style={ styles.informacoes }>Dia: { data }</Text>
            <Text style={ styles.informacoes }>Horário: { horario }</Text>            
        </View>
    )
}

export default function Chat() {

    const navigation = useNavigation();

    function navigateToDiscover(){
        navigation.navigate('Discover')
    }

    function navigateToCalendar(){
        navigation.navigate('Calendar')
    }

    function navigateToProfile(){
        navigation.navigate('User')
    }

    return (
        <SafeAreaView style={ styles.container }>    

            <View style={ styles.box }>
                <View style={ styles.header }>
                    <Text style={ styles.title }>Meus horários</Text>
                    <Text style={ styles.subtitle }>Horários marcados para hoje.</Text>
                </View>
            </View>

            <View style = { styles.content }>
                <FlatList
                    style = { styles.itemList }
                    data={ horarios }
                    renderItem={({ item }) => (
                        <TouchableOpacity>
                                <Horario 
                                    nomeAula={ item.nomeAula } 
                                    nomeAluno={ item.nomeAluno } 
                                    data={ item.data }
                                    horario={ item.horario }
                                />
                        </TouchableOpacity>
                    )}
                    keyExtractor={ item => item.id }
                >
                </FlatList>
            </View>

            <View style={styles.menu}>
                    <TouchableOpacity onPress = {() => navigateToDiscover()}>
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