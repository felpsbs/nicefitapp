import React from 'react';
import { SafeAreaView, View, Text, List } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";
import { Calendar, Agenda } from 'react-native-calendars';
import styles from './stylesCalendar';



export default function MyCalendar() {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.box}>
                <View style={styles.header}>
                    <Text style={styles.title}>Meu calendário</Text>
                    <Text style={styles.subtitle}>Confira seus horários!</Text>
                </View>
                
            </View>

            <Calendar
                    style={styles.calendar}
                    onDayPress={(day) => {console.log('selected day', day)}}
                    markedDates={{
                        '2020-04-18': {selected: true, marked: true},
                        '2012-05-17': {marked: true},
                        '2012-05-18': {disabled: true}
                      }}>

                </Calendar>


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
