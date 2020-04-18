import React from 'react';
import {SafeAreaView , View, Text, List } from 'react-native';
import {Feather} from '@expo/vector-icons';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";


export default function Discover() {


    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>Nome</Text>
                <Text>Idade</Text>
                <Text>E-mail</Text>
                
            </View>
        </SafeAreaView>
    )
}