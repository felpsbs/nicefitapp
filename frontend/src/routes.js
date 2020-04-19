import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Discover from './pages/Discover';
import Calendar from './pages/Calendar';
import User from './pages/User';
import Modalidades from './pages/Modalidades'
import Payment from './pages/Payment';
import Chat from './pages/Message';
import Receipt from './pages/Receipt';
import Extract from './pages/Extract';
import GradeHoraria from './pages/GradeHoraria';

const AppStack = createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name='Discover' component={Discover}/>
                <AppStack.Screen name='Calendar' component={Calendar}/>
                <AppStack.Screen name='User' component={User}/>
                <AppStack.Screen name='Modalities' component={Modalidades}/>
                <AppStack.Screen name='Payment' component={Payment}/>
                <AppStack.Screen name='Chat' component={Chat}/>
                <AppStack.Screen name='Receipt' component={Receipt}/>
                <AppStack.Screen name='Extract' component={Extract}/>
                <AppStack.Screen name='GradeHoraria' component={GradeHoraria}/>

                
            </AppStack.Navigator>
        </NavigationContainer>
    )
}