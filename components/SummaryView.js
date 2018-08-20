'use strict';
import React, {Comment,PureComponent} from 'react';
import {View,Text,Image,StyleSheet,Button,TouchableOpacity} from 'react-native';
import IconText from './IconText';

export default class SummaryView extends PureComponent{

    constructor(props){
        super(props);
        //this.state = {rating: props.rating};       
        this.state =props; 
    }
    onClicked(){
        this.setState({rating: this.state.rating+1});
        if(this.props.onRatingChanged){
          this.props.onRatingChanged(this.state.rating);
        }
    }

    render(){
        const styles = StyleSheet.create({
            summaryContainer: {
                flexDirection: 'row',
                alignSelf: 'flex-start',
                height: 130
              },
              mainImage: {
                top: -50,
                height: 150,
                width: 100,
                margin: 20,
                overflow: 'visible'
              },
              summaryDetails: {
                flexDirection: 'column',
                alignSelf: 'flex-start'
              },
              title: {
                fontSize: 20,
                fontWeight: 'bold',
                color: 'black',
                marginTop: 10
              },
              tag: {
                fontSize: 10,
                marginRight:8
              },
              summaryRows: {
                flexDirection: 'row',
                alignItems: 'flex-end'
              },
              button: {
                  borderRadius:10,
                  backgroundColor: 'red',
                  paddingLeft:7,
                  paddingRight:7,
                  fontSize:10,
                  alignSelf: 'flex-end',
                  marginLeft:4,
                  marginRight:4
              },
              increaseButton: {
                  marginLeft:4,
                  marginRight:4
              },
              ratingNumber: {
                fontWeight: 'bold',
                fontSize: 16,
                color: 'black'
              }
        });
        const {detailsMode,testData} = this.state;
        testData.a++;
        return (
            <View style = {styles.summaryContainer}>
            <Image source = {require('../imgs/img1.jpg')}
                style = {styles.mainImage}/>
            <View style = {styles.summaryDetails}>
              <Text style = {styles.title}>Central Intelligence</Text>
              <View style = {styles.summaryRows}>
                <Text style = {styles.tag}>Action</Text>
                <Text style = {styles.tag}>Action</Text>
                <Text style = {styles.tag}>Action</Text>
              </View>
              <View style = {[styles.summaryRows,{marginTop:5}]}>
                <Text style = {styles.ratingNumber}>{this.state.rating}</Text>
                <Text style = {{ fontSize: 10}} >/10</Text>
                <TouchableOpacity onPress = {() => this.onClicked()}>
                  <Text style = {styles.button}>increase</Text>
                </TouchableOpacity>
                <Text style = {styles.button}>SD</Text>
                <Text style = {styles.button}>HD</Text>
              </View>
              <View style = {[styles.summaryRows,{marginTop:10}]}>
              <IconText icon = {require('../imgs/ic_check.png')}
                            text = '307 mmmm'/>
              <IconText icon = {require('../imgs/ic_calendar.png')}
                            text = '17 June 2014 hadsgb'/>
              </View>
            </View>
          </View>
        );
    }

}

