/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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



import {StackNavigator, TabNavigator} from 'react-navigation';
import MovieDetails from './MovieDetails';
import DetailsScreen from './DetailsScreen';
import HomeScreen from './HomeScreen';
import SetupScreen from './SetupScreen';



const stack = StackNavigator ( {
  Home : {screen : HomeScreen},
  Details : {screen : DetailsScreen}},
  {  headerMode: 'none' }
);

const navigator = TabNavigator ({
  Home : {screen: HomeScreen},
  Setup : {screen : SetupScreen}
}, {
  tabBarPosition: 'bottom',
  animationEnabled : true,
  tabBarOptions: {
    activeTintColor: 'green',
  },
});


// export default class App extends Component {
//   render() {
  
//     return (
//       <ScrollView style = {{borderColor : 'blue', flex : 1,
//                         backgroundColor:'grey'  }} > 
//         <MovieCell />
//         <MovieCell />
//         <MovieCell />
//         <MovieCell />
//         <MovieCell />
//         <MovieCell />
//       </ScrollView>
//     );
//   }
// }
export default stack;





const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
    marginTop: 65,
  },
  borderView: {
    borderRadius: 5,
    backgroundColor: 'green',
  },
  image: {
    height: 150,
    width: 100, 
  },
  container : {
    borderRadius: 5 ,
    backgroundColor : 'white',
    height : '60%',
    width : '90%',
  }, 
  titleText : {
    fontWeight : 'bold',
    color : 'black',
    fontSize : 20
  },
  bodyText : {
    fontSize : 10,
    color : 'black'
  },
  roundImage : {
    borderRadius : 100,
    margin : 2,
    width: 30,
    height : 30,
    resizeMode : 'cover'
  },
  buttonOption: {
    width : 60,
    height : 25,
    borderRadius : 10,
    marginLeft : 5,
    padding: 3,
    justifyContent : 'center',
    alignItems : 'center'
  },
  center : {
    justifyContent : 'center',
    alignItems : 'center'
  }


});
