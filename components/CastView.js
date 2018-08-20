import React, {
    Component
} from 'react';
import{
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

export default class CastView extends Component{
    render(){
        return(
            <View style = {[styles.container,this.props.style]}>
                <View style = {styles.imgContainer}>
                    <Image style = {styles.userImg}
                            source = {require('../imgs/ic_user.png')}/>
                    <Image style = {styles.userImg}
                            source = {require('../imgs/ic_user.png')}/>
                    <Image style = {styles.userImg}
                            source = {require('../imgs/ic_user.png')}/>
                </View>
                <Text style = {{
                    fontWeight: 'bold',
                    marginLeft: 8
                }}>
                    +830
                </Text>
                <Text style = {{
                    marginLeft: 8
                }}>People watching this movie</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    imgContainer: {
        flexDirection: 'row'
    },
    userImg:{
        width: 30,
        height: 30,
        marginRight: -3,
    }
});