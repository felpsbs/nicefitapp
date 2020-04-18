import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Discover from './pages/Discover';
import Calendar from './pages/Calendar';
import User from './pages/User';
import Modalidades from './pages/Modalidades'
import Payment from './pages/Payment'

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
            </AppStack.Navigator>
        </NavigationContainer>
    )
}