import React, { Component,useEffect, useState} from 'react';
import {  View,
  Text,
  KeyboardAvoidingView,
  TouchableHighlight,
  StyleSheet,
  Dimensions,
  AsyncStorage,
  Button} from 'react-native';
import Icon from 'react-native-ionicons';
import { TextInput } from 'react-native-gesture-handler';
import CardView from 'react-native-cardview'
import {dangki,quenmatkhau, macodedki} from '../API/API.js';
let x1=Dimensions.get('window').width;// lay ra chiue rong cua man hinh
/// Thông tin đki tài khoản shipper

export default class  ForgotPasswordAPI extends Component {
  // const [isLoading, setLoading] = useState(true);
  // const [data, setData] = useState([]);
constructor(props){
        super(props);
        this.state = { 
          x:null ,
          isloading: false,
      sodt:'',   
      }}

  guitinnhan(){
      console.log('aa')
 const {sodt}=this.state;
    //console.log(this.state.hovaten+" "+this.state.sodt +" "+ this.state.ngaysinh  +" "+this.state.matkhau);
      if(sodt!='' ) {
        if(sodt==sodt){// dang ki tai khoan len server
this.props.navigation.navigate("xacthucquenMk",{
  username:'',
  verificationCode:'',
  newPassword:'',
});

fetch('http://222.252.26.108:8889/user-m-service/shipper/reset-password?phone=' this.props.sodt, {
  method: 'PUT',
  headers: {
     'Content-Type': 'application/json',
        'Accept': 'application/json'
  },
  body: JSON.stringify({ //username khop vs ben server
    
    username:this.state.sodt,
    
  })
});
        
        }
        else {alert('số điện thoại bạn nhập sai')}
      }
      else{
        alert('Vui lòng nhập đầy đủ thông tin');
      }
    }

  render(){
  return ( 
  <CardView borderWidth={2.5} marginLeft={25} flex={4/10} width={x1/1.1} marginTop ={180}>
    <KeyboardAvoidingView
             style = {styles.wrapper}
                          behavior = "padding">
        <View style = {styles.form}>
            <Text style ={styles.forgotpasswordHeading} >Quên mật khẩu</Text>
       <Text style={styles.forgotpasswordSubheading} > Nhập số điện thoại</Text>

                    
       <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',width:300,height:40,borderWidth:0.5,borderRadius:5,padding:10,marginTop:-35, color:'#FFFFFF'}}>
       <Icon name='person-outline' size={20} />  
                <TextInput
               style={{width:250,height:35,color:'#000000'}}
                 placeholder='Số điện thoại'
                 keyboardType = 'numeric'
                 onChangeText={(text)=>{this.setState({sodt:text})}}  />
                </View>

       <View style={{flex:3,justifyContent:'flex-start',alignItems:'center',marginTop:8,marginRight: 5}}>
              <TouchableHighlight 
               onPress={()=>{this.guitinnhan()}}
              style={{width:200,borderRadius:20,height:35,backgroundColor:'#1aa3ff',justifyContent:'center',alignItems:'center'}} >
                <Text style={{color:'white'}}>Gửi Tin Nhắn</Text>
              </TouchableHighlight>
 {this.state.isLoading ? <ActivityIndicator/> : (
       <Text>    
           </Text>// item. ltinh tron

      )}

</View>
</View>
           
        </KeyboardAvoidingView>
        </CardView>
    );
}
}

const styles = StyleSheet.create({
    wrapper : {
        display : 'flex',
        flex : 1,
        backgroundColor : '#E6E6E6'
    },
    
    form: {
        marginTop : 10,
        paddingLeft: 20,
        paddingRight: 20,
        flex: 1

    },
    forgotpasswordHeading:{

        color : '#000000',
        fontSize: 28,
        fontWeight: '300',
      
    },
    forgotpasswordSubheading: {
        color : '#000000',
        fontWeight: '600',
        fontSize: 15,
        marginTop: 10,
        marginBottom: 60,
    },
 
  });
