import React, {Component, PureComponent} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default class IconText extends PureComponent{

    render(){
        const styles = StyleSheet.create({
            textIconContainer: {
                flexDirection: 'row',
                alignItems: 'flex-end',
                bottom:0
              },
              smallIcon: {
                width: 10,
                height: 10,
                margin: 3
              },
              textIcon: {
                fontSize: 10
              }
        });

        const {icon,text} = this.props;
        return (
            <View style = {styles.textIconContainer}>
                <Image style = {styles.smallIcon} 
                    source = {icon}/>
                <Text style = {styles.textIcon}>{text}</Text>    
            </View>
        );
    }
}