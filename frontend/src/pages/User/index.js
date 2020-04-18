import React from 'react';
import {SafeAreaView , View, Text, List } from 'react-native';
import {Feather} from '@expo/vector-icons';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

const usuario = {
    nome: "Lucas Ribeiro",
    idade: "12/09/1988",
    email: "lucasribeiro@email.com",
    cidade: "São Paulo"
};

export default function Discover() {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.box}>
            <View style={styles.header}>
                <Text style={styles.title}>Perfil</Text>
            </View>
            <View>
                <Avatar rounded title="L" size="medium" />
            </View>
            <View>
                <Text style={styles.informacoes}>Nome: { usuario.nome }</Text>
                <Text style={styles.informacoes}>Data de nascimento:{ usuario.idade }</Text>
                <Text style={styles.informacoes}>Email: { usuario.email }</Text>
                <Text style={styles.informacoes}>Cidade: { usuario.cidade }</Text>
            </View>
            </View>
        </SafeAreaView>
    )
}