import React from 'react';
import {SafeAreaView , View, Text, List } from 'react-native';
import {Feather} from '@expo/vector-icons';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";
import { Avatar } from 'react-native-elements';

import styles from "./styles";

const mensagens = [
    {
        id: 1,
        nome: "Pedro Costa",
        mensagem: "Exato, esse é o espírito",
        tempo: "20 min",
        quantidade: "5" 
    },
    {
        id: 2,
        nome: "João Pedro",
        mensagem: "Beleza!",
        tempo: "2 min",
        quantidade: "2" 
    },
    {
        id: 3,
        nome: "Gabriel Santos",
        mensagem: "Não tive tempo ainda, vou ver daqui a pouco",
        tempo: "1 min",
        quantidade: "4" 
    },
    {
        id: 4,
        nome: "Mariana",
        mensagem: "Ainda está livre?",
        tempo: "10 min",
        quantidade: "2" 
    },
    {
        id: 5,
        nome: "Vitória",
        mensagem: "Sim, ficou bem legal",
        tempo: "5 min",
        quantidade: "1" 
    },

];

function Conversa({ nome, mensagem, tempo, quantidade }) {
    return (
        <View style={styles.personalList}>
            <Avatar rounded title="L" size="medium" style={styles.icone}/>
            <Text style={ styles.name }>{ nome }</Text>
            <Text style={ styles.name }>{ mensagem }</Text>
            <Text style={ styles.grade }>{ tempo }</Text>
            <Text style={ styles.grade }>{ quantidade }</Text>
        </View>
    )
}

export default function Discover() {

    return (
        <SafeAreaView style={styles.container}>    

            <View style={ styles.box }>
                <View style={ styles.header }>
                    <Text style={ styles.title }>Mensagens</Text>
                    <Text style={ styles.subtitle }>Produrando uma conversa?</Text>
                </View>
            </View>

            <View style = { styles.content }>
                <FlatList
                    style = { styles.itemList }
                    data={ mensagens }
                    renderItem={({ item }) => (
                        <TouchableOpacity>
                                <Conversa 
                                    nome={ item.nome } 
                                    mensagem={ item.mensagem } 
                                    tempo={ item.tempo }
                                    quantidade={ item.quantidade }
                                />
                        </TouchableOpacity>
                    )}
                    keyExtractor={ item => item.id }
                >
                </FlatList>
            </View>

            <Text style={ styles.title }>----aqui vem a parte da navegação----</Text>
        </SafeAreaView>
    )
}