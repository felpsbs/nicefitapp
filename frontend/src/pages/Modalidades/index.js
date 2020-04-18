import React from 'react';
import {SafeAreaView , View, Text, List } from 'react-native';
import {Feather} from '@expo/vector-icons';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";


export default function Modalidades() {


    return (
        <SafeAreaView style={styles.container}>
           

           <View style={styles.box}>
                <View style={styles.header}>
                    <Text style={styles.title}>Personais</Text>
                    <Text style={styles.subtitle}>Quem melhor combina com você?</Text>
                </View>
            </View>

            <View>
                
            </View>

           <View style={styles.menu}>
                    <TouchableOpacity>
                        <Feather name="compass" size={40} style={styles.icon}  ></Feather>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Feather name="calendar" size={40} style={styles.icon}  ></Feather>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Feather name="user" size={40} style={styles.icon}  ></Feather>
                    </TouchableOpacity>
            </View>


        </SafeAreaView>
    )
}