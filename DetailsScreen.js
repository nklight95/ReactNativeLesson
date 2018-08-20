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
  ScrollView,
  LayoutAnimation,
  UIManager
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import MovieDetails from './MovieDetails';

class TopContainer extends Component {
  render() {
    // let pic ={uri : this.props.hinh };
    let pic = {uri:'https://png.pngtree.com/thumb_back/fh260/back_pic/00/01/80/73560a545c6ae6b.jpg'};
    var onBtnClicked = function() {
      ToastAndroid.show('No Network Connection', ToastAndroid.SHORT)
    }
    var RandomNumber = Math.floor(Math.random() * 100) + 1 ;
    return(
      <View style = {{ borderColor: 'blue',height:250, flexDirection:'column'}} >
          <View style = {{ borderColor: 'red',flex:1}}>
            <Image source = {pic} style = {{flex:1}} />
          </View>
          <View style = {{flex:1}}>
            <View style ={{flex:1, marginLeft:135, padding:5}} >
              <Text style = {styles.titleText} >{this.props.name}</Text>
              <View style = {{flexDirection : 'row'}}  >
                <Text style = {styles.bodyText} > Hành động / </Text>
                <Text style = {styles.bodyText} > Kịch tính / </Text>
                <Text style = {styles.bodyText} > 18+ </Text>
              </View>

              <View style = {{flexDirection : 'row', alignItems: 'flex-end', }} >
                <Text style = {styles.titleText} >{this.props.point}</Text>
                <Text style = {[styles.bodyText,{marginBottom:3}]} >/{RandomNumber}</Text>        
                <TouchableOpacity onPress = {onBtnClicked} style = {[styles.buttonOption, {backgroundColor : 'red'}]} >
                  <Text style = {{color:'white'}} >3D</Text>
                </TouchableOpacity>    
                <TouchableOpacity onPress = {onBtnClicked} style = {[styles.buttonOption, {backgroundColor : 'purple'}]} >
                  <Text style = {{color : 'white'}} >Uncen</Text>
                </TouchableOpacity>    
              </View>

              <View style = {{flexDirection:'row', alignItems:'center', marginTop:10}} >

                <View style = {{flexDirection:'row'}} >
                  <Image source = {require('./imgs/ic_check.png')} style = {{width:20,height:20}}  />
                  <Text style={[styles.bodyText,{margin:3}]} >10:00pm</Text>

                </View>

                <View style = {{flexDirection:'row'}} >
                <Image source = {require('./imgs/ic_calendar.png')} style = {{width:20,height:20, marginLeft:30}}  />
                  <Text style={[styles.bodyText,{margin:3}]} >12/01/2020</Text>
                </View>

            
              </View>

            </View>
          </View>
          <Image source={this.props.hinh} style = {{width:100, height : 150, borderColor: 'grey', position : 'absolute', marginTop : 100, marginLeft : 20, borderRadius:3}} />
           
        </View>
    );
  }
}

class DetailView extends Component {
  render() {
    return(
      <View style={[{flexDirection:'row', alignItems:'center'}]} >
        <Text style={{fontWeight:'bold', color:'black', marginLeft:10,}} >{this.props.title}</Text>
        <Text style={{color:'black', marginLeft:15}} >{this.props.text}</Text>
      </View>
    );
  }
}

class Descriptions extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowMore : true};
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
  }
  
  render(){
    var onShowClicked =()=> {
      LayoutAnimation.spring()
      this.setState({isShowMore : !this.state.isShowMore});
    };
    let showWhat = this.state.isShowMore ? 'Show More' : 'Show Less';
    return(
      <ScrollView style = {[{...this.props.style},{ borderColor: 'red', padding:10}] }>
        <View style={{}} >
          <Text style = {{maxHeight:this.state.isShowMore ? 80 : 1000}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</Text>
          <TouchableOpacity style={{height:20}} onPress = {onShowClicked}  >
            <Text style={{color:'#800000', margin:5}} >{showWhat}</Text>
          </TouchableOpacity>

          <Text style={[styles.title,{ marginTop:20}]}>-------------------------------------------------------------------------------------------</Text>

          <View style={{margin:5}} >
            <DetailView title = 'Director:' text = 'Andrew Mathew Optimus' />
            <DetailView title = 'Director:' text = 'Andrew Mathew Optimus' />
            <DetailView title = 'Director:' text = 'Andrew Mathew Optimus' />
          </View>
          <Text style={[styles.title,{marginBottom:20}]}>-------------------------------------------------------------------------------------------</Text>

        </View>

      </ScrollView>
    );

  }
}

class PriceBar extends Component {
  render() {
    var onBtnClicked = function() {
      ToastAndroid.show('No Network Connection', ToastAndroid.SHORT)
    }
    return(
      <View style ={[{...this.props.style},{flexDirection:'row', alignItems:'center', justifyContent:'center'}]} >
        <Text style={{}} >Total price: </Text>
        <Text style={{fontWeight:'bold', color:'black'}} >  99.99$ </Text>
        <TouchableOpacity onPress = {onBtnClicked} style={{width:150,height:30,backgroundColor:'#800000', justifyContent:'center',alignItems:'center',borderRadius:30, margin:10}} >
          <Text style={{color:'white', fontWeight:'bold'}}>Buy a ticket</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


export default class DetailsScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.details,
    headerTitleStyle :{textAlign: 'center',alignSelf:'center'},
  });
  render() {


  
    return (

      <View style = {{flex:1, flexDirection:'column', backgroundColor:'white'}} >
        
        <TopContainer hinh={this.props.navigation.state.params.hinh} name={this.props.navigation.state.params.name} point = {this.props.navigation.state.params.point} />

        <Descriptions style={{flex:4}} />


        <PriceBar style={{height:50,}} />

        

      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#F5FCFF',
    flexDirection: 'column'
  },
  headerContrainer:{
    flexDirection:'row'
  },
  topButtons:{
    width:40,
    height:40,
    margin: 10
  },
  backButton: {
    
  },
  searchButton:{
    
  },
  playButton:{
    alignSelf: 'center'
  },
  headerOverlay:{
    flex:1,
    flexDirection:'row',
    justifyContent: 'space-between',
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#FFAAAAAA',
  },

  desctiption: {
    margin:20,
    alignSelf:'flex-start'
  },
  link: {
    color: 'pink',
    fontWeight: 'bold',
    marginLeft:20,
  },
  informationsContainer: {
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 10,
    marginRight: 40,
  },
  informationsLabelContainer: {
    flexDirection: 'column'
  },
  informationsLabel: {
    fontWeight: 'bold',
    color: 'black'
  },
  informationsValueContainer: {
    flexDirection: 'column',
    marginLeft:6
  },
  informationsValue: {
    
  },

  footerContainer: {
      flexDirection: 'row',
      marginLeft:20,
      alignItems: 'center',
      alignSelf: 'center'
  },
  largeButton:{
      borderRadius:60,
      backgroundColor: 'red',
      paddingLeft:20,
      paddingRight:20,
      paddingTop:5,
      paddingBottom:5,
      color: 'white',
      fontWeight: 'bold',
      marginLeft: 10
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
  buttonOption: {
    width : 60,
    height : 25,
    borderRadius : 10,
    marginLeft : 5,
    padding: 3,
    justifyContent : 'center',
    alignItems : 'center'
  },
  headerTile:{
    position:'absolute',
    flex:1,
    justifyContent:'center',
    alignSelf:'center',
    backgroundColor:'red'
  
  }

});