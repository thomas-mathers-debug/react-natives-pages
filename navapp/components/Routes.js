import React, {Component} from 'react'
import { View, Text} from 'react-native'
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"

import Center from "./Center"



const Stack = createStackNavigator()

function Login() {
    return (
        <Center>
            <Text>I am a login screen</Text>
        </Center>
    )
}

export default class Routes extends Component {
  render(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name ="Login" component={Login}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
  }
}


