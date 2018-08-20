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

class MovieThumb extends Component {
  render() {
    let pic = { uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg' };
    return (
      <View style = {[this.props.style,{ }]} >
        {/* <Image source = {picture} style = {[ {width:100, resizeMode : 'cover', borderRadius:3}]} /> */}
        {/* source = {require('./images/user.png')} */}
        <Image source = {this.props.picture} style = {[ {width:100, height:'100%', resizeMode : 'cover', borderRadius:3}]} />
      </View>
    );
  }
}

class MovieObj {
  constructor(name, point, picture) {
    this.name = name;
    this.point = point;
    this.picture = {uri : picture};
  }
}



class MovieCell extends Component {
  render() {
    const { navigate } = this.props.navigation;
    var onBtnClicked = (f) => {
      navigate('Details', {details: 'details', name: this.props.name, point: this.props.point, hinh: this.props.picture})
    };

    return (
      <TouchableOpacity 
        onPress = {onBtnClicked } 
        style = {[{ margin : 10, borderColor : 'green', backgroundColor:'white',
                          justifyContent: 'center', padding : 10, flexDirection : 'row', height : 200, borderRadius: 10 }]} >
        <MovieThumb style = {{}} picture = {this.props.picture} />
        <MovieDetails style = {{flex:1}}  name = {this.props.name} point = {this.props.point} />
      </TouchableOpacity>
    );
  }
}

export default class HomeScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title : 'Home',
    tabBarLabel:'Home',

 
    // headerStyle : ''
  });
  
  render () {
    var pic1 = 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg' ;
    var pic2 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Breaking_Bad_logo.svg/1200px-Breaking_Bad_logo.svg.png';
    var pic3 =  'http://content.internetvideoarchive.com/content/photos/8507/538232_008.jpg'  ;
    var pic5 =  'https://i.moveek.download/media/cache/general/rc/HKvhuhb0/media/c1d093f7920d0435a4c7d50adff1a062b9ed8171.jpg'  ;
    var pic6 =  'https://is1-ssl.mzstatic.com/image/thumb/Music6/v4/80/19/bb/8019bb23-9e82-3b63-5edd-65d57a7bdfe6/source/1200x630bb.jpg'  ;
    var pic7 =  'https://i.moveek.download/media/cache/general/rc/ZJBWLsbN/media/335ba81b11cc0e91d2a082c32c068ac675732ceb.jpg'  ;

    var mov1 = new MovieObj('Banana Everywhere', '6.9', pic1);
    var mov2 = new MovieObj('Breaking Bad', '8.5', pic2);
    var mov3 = new MovieObj('TED', '7.4', pic3);
    var mov4 = new MovieObj('Tam.Nguyen','0.1','');
    var mov5 = new MovieObj('Ferdinand Phiêu Lưu Ký','8.96', pic5 );
    var mov6 =new MovieObj('How I Met Yours Mother','9.9', pic6 ) ;
    var mov7 = new MovieObj('Án Mạng Liên Hoàn','0.0',pic7 );

    const{navigate} = this.props.navigation;

       return (
        <ScrollView style = {{borderColor : 'blue', flex : 1,
                          backgroundColor:'grey'  }} > 
          <MovieCell navigation={this.props.navigation} name = {mov4.name} point = {mov4.point} picture = {require('./images/user.png')} />
          <MovieCell navigation={this.props.navigation} name = {mov5.name} point = {mov5.point} picture = {mov5.picture} />
          <MovieCell navigation={this.props.navigation} name = {mov6.name} point = {mov6.point} picture = {mov6.picture} />
          <MovieCell navigation={this.props.navigation} name = {mov7.name} point = {mov7.point} picture = {mov7.picture} />
          <MovieCell navigation={this.props.navigation} name = {mov1.name} point = {mov1.point} picture = {mov1.picture} />
          <MovieCell navigation={this.props.navigation} name = {mov2.name} point = {mov2.point} picture = {mov2.picture} />
          <MovieCell navigation={this.props.navigation} name = {mov3.name} point = {mov3.point} picture = {mov3.picture} />

        </ScrollView>
    );
  }
}