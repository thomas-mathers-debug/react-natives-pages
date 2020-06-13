import React, {Component} from 'react'
import { View, Text, Button} from 'react-native'
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"

import Center from "./Center"

const Stack = createStackNavigator(
 
)

function Login({navigation}) {
    return (
        <Center>
            <Text>I am a login screen</Text>
            <Button title="go to register" onPress={() => {
                navigation.navigate('Register')
            }}
            />
        </Center>
    )
}

function Register() {
    return (
        <Center>
            <Text>I am a register screen</Text>
        </Center>
    )
}

export default class Routes extends Component {
  render(){
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}} 
            initialRouteName="Login"
            >
                <Stack.Screen 
                options = {{
                    headerTitle: "Sign In"
                }} name ="Login" component={Login}/>

                <Stack.Screen 
                options = {{
                    headerTitle: "Sign Up"
                }} name ="Register" component={Register}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
  }
}


