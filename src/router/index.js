import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, TambahKontak, DetailKontak, UpdateKontak, MapsKontak} from '../pages';



const Stack = createStackNavigator()

const Router = () => {
    return (
        <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Stack.Screen name="TambahKontak" component={TambahKontak}  />
        <Stack.Screen name="DetailKontak" component={DetailKontak}  />
        <Stack.Screen name="UpdateKontak" component={UpdateKontak}  />
        <Stack.Screen name="MapsKontak" component={MapsKontak}  />
        </Stack.Navigator>
    )
}

export default Router
