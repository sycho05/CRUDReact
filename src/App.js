import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Router from './router';

const App = () => {
  return (
    <NavigationContainer>
      <Router></Router>
    </NavigationContainer>
  )
}

export default App
