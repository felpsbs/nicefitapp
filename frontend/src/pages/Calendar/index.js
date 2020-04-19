import React from 'react';
import {Image, SafeAreaView, View, Text, List } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from "@react-navigation/native";
import { Calendar, Agenda } from 'react-native-calendars';
import styles from './stylesCalendar';

import logoImg from '../../../assets/logo.jpeg'



export default function MyCalendar() {

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

    function navigateToGradeHoraria(){
        navigation.navigate('GradeHoraria')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.box}>
                <View style={styles.header}>
                    <View style={styles.logoRow}>
                        <Image source={logoImg} style={styles.logo}></Image>
                        <Text style={styles.title}>Calendário</Text>
                    </View>
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

            <View style={styles.agenda}>
                <TouchableOpacity onPress={() => navigateToGradeHoraria()}>
                    <Text style= {styles.agendaText}>
                        Agenda
                    </Text>
                </TouchableOpacity>
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
