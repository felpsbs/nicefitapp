import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Discover from './pages/Discover';
import Calendar from './pages/Calendar'

const AppStack = createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}}>
                {/* <AppStack.Screen name='Discover' component={Discover}/> */}
                <AppStack.Screen name='Calendar' component={Calendar}/>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}