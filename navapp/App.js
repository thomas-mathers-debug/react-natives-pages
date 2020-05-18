import React, {Component} from 'react'
import { View, Text, FlatList, StyleSheet, Alert, Button } from 'react-native'
import Expo from 'expo'
import { StackNavigator } from 'react-navigation'

import HomeScreen from './components/HomeScreen'
import ProfileScreen from './components/ProfileScreen'


const NavigationApp = StackNavigator({
  Home:{screen: HomeScreen},
  Profile:{screen: ProfileScreen}
})


export default class App extends Component {
  render(){
    return (<NavigationApp/>)
  }
}