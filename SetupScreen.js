import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  AppRegistry,
  Button,
  ToastAndroid,
  TouchableOpacity,
  ScrollView
  
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import MovieDetails from './MovieDetails';
import DetailsScreen from './DetailsScreen';
import App from './App';

export default class SetupScreen extends Component {
    static navigationOptions = {
        tabBarLabel : 'Setup',
    };
    render() {
        const {goBack} = this.props.navigation;
        return(
            <Button
                title="Go back to home tab"
                onPress={() => goBack()} />
        );
    }
}