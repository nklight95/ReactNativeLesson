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

export default class MovieDetails extends Component {
    render() {
      var onBtnClicked = function() {
        ToastAndroid.show('a', ToastAndroid.SHORT)
      };
      return (
           <View style = {[this.props.style,{ marginLeft:5}]} >
          
              <Text style = {styles.titleText} > {this.props.name} </Text>
         
              <View style = {{flexDirection : 'row'}}  >
                <Text style = {styles.bodyText} > Hành động / </Text>
                <Text style = {styles.bodyText} > Kịch tính / </Text>
                <Text style = {styles.bodyText} > 18+ </Text>
              </View>
  
              <View style = {{flexDirection : 'row', alignItems: 'flex-end', }} >
                <Text style = {styles.titleText} >{this.props.point}</Text>
                <Text style = {[styles.bodyText,{marginBottom:3}]} >/30</Text>        
                <TouchableOpacity onPress = {onBtnClicked} style = {[styles.buttonOption, {backgroundColor : 'red'}]} >
                  <Text style = {{color:'white'}} >3D</Text>
                </TouchableOpacity>    
                <TouchableOpacity onPress = {onBtnClicked} style = {[styles.buttonOption, {backgroundColor : 'purple'}]} >
                  <Text style = {{color : 'white'}} >Uncen</Text>
                </TouchableOpacity>    
              </View>
                <Text style = {[styles.bodyText,{marginTop : 10}]} >Once uppon a time, the
                           re are a lots of princes and princess, blah 
                           blah blah, bloh bloh bloh, ahihi do^` cho' </Text>
              <View  >
  
              <View style = {{flexDirection : 'row', alignItems: 'center',
                               borderColor: 'black', marginTop : 5 }} >
                <Image source = {require('./images/user.png')} style = {styles.roundImage} />
                <Image source = {require('./images/user.png')} style = {styles.roundImage} />
                <Image source = {require('./images/user.png')} style = {styles.roundImage} />
                <Text style = {styles.titleText} >+9</Text>
                <Text style = {[styles.bodyText, {marginLeft: 5}]} >users is watching this</Text>
              </View>           
              </View>
            </View>    
  
      );
    }
  }

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
  