import React, {Component} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Expo from 'expo'
import { StackNavigator } from 'react-navigation'

class ProfileScreen extends Component{
    static navigationOptions={
        title: 'Profile',
    }
    render() {
        const { navigate } = this.props.navigation
        return(
            <View style = {styles.container}>
                <Text
                onPress = { ()=> navigate('Profile')}>Navigate to Home

                </Text>


            </View>
        )
    }
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
      flex: 1, 
    }
  })