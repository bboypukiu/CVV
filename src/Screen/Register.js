import React,{Component} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import RegisterAPI from '../../API/RegisterApi.js';
 export default class Register extends Component{
    constructor(props){
        super(props);
        this.state={
          hovaten:'',
          sodt:'',
          ngaysinh:'',
          matkhau:'',
          nhaplaimk:'',

        }
        
    }

    register(){
     
    }
    render(){
      return(
        <View style={{flex:1,flexDirection:'column',justifyContent:'flex-start',alignContent:'flex-start'}}>    
          <ScrollView>  
        <View style={{flex:3,justifyContent:'flex-start',alignItems:'center',marginTop:10}}>
            <Image 
            style={{width:200,height:150,}}
            source={require('../Image/profile.png') }/>
        </View>
          <RegisterAPI  navigation={this.props.navigation}></RegisterAPI>
                </ScrollView>
     
     </View>
      );
    }
  }
