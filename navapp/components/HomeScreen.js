import React, {Component} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Expo from 'expo'
import { StackNavigator } from 'react-navigation'

import ProfileScreen from './ProfileScreen'

class HomeScreen extends Component{
    static navigationOptions={
        title: 'Home',
    }
    render() {
        
        const {navigate} = this.props.navigation
        return(
            <View style = {styles.container}>
                <Text
                onPress = { ()=> navigate('Profile')}>Navigate to Profile
                </Text>
            </View>
        )
    }
}


export default HomeScreen

const styles = StyleSheet.create({
    container: {
      flex: 1, 
    }
  })