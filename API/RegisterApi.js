import React, { Component,useEffect, useState} from 'react';
import {View,  TouchableHighlight,TextInput,Image,Text,ScrollView,Dimensions,FlatList,ActivityIndicator, Animated,Linking} from 'react-native';
import Icon from 'react-native-ionicons';
import CardView from 'react-native-cardview'
import {dangki,quenmatkhau, macodedki} from '../API/API.js';
let x1=Dimensions.get('window').width;// lay ra chiue rong cua man hinh
/// Thông tin đki tài khoản shipper

export default class RegisterAPI extends Component {
  // const [isLoading, setLoading] = useState(true);
  // const [data, setData] = useState([]);

  constructor(props){
    super(props);
    this.state={
      isLoading:false,
          hovaten:'',
          sodt:'',
          ngaysinh:'',
          matkhau:'',
          nhaplaimk:'',
       
    }
  }

 //componentDidMount(){
 //   this.register();
 //' }

/*  loaddt() {
      
    fetch('http://222.252.26.108:8889/api/shipment/findShipmentTrackingDetail?orderId=626') 
    //fetch('http://192.168.1.12:8889/api/shipment/findShipmentTrackingDetail?orderId=626') 
      .then((response) => response.json()) 
       .then((json) => {
      
       this.setState({ 
         isLoading:false,
         data:json.data,
       })
            //setData(json.movies)
    })// response trả ve data
      .catch((error) => console.error(error))
      .finally(() => this.setState({
        isLoading:false,
      }))
  } */




  register(){
      console.log('aa')
 const {hovaten,sodt,ngaysinh,matkhau,nhaplaimk}=this.state;
    console.log(this.state.hovaten+" "+this.state.sodt +" "+ this.state.ngaysinh  +" "+this.state.matkhau);
      if(hovaten!='' &&ngaysinh !='' &&sodt!=''  &&matkhau!='' &&nhaplaimk!='') {
        if(matkhau==nhaplaimk){// dang ki tai khoan len server
this.props.navigation.navigate("xacthuc",{
  phoneNumber:'pusu',
  code:'123',
  password:'hehe',
});

fetch(dangki, {
  method: 'POST',
  headers: {
     'Content-Type': 'application/json',
        'Accept': 'application/json'
  },
  body: JSON.stringify({ //username khop vs ben server
    fullname:this.state.hovaten,
    phone:this.state.sodt,
    password:this.state.matkhau,
    dateOfBirth:this.state.ngaysinh,
  })
});
        
        }
        else {alert('Mật khẩu bạn nhập không khớp')}
      }
      else{
        alert('Vui lòng nhập đầy đủ thông tin');
      }
    }

  render(){
  return ( 
   <View style={{flex:5,justifyContent:'center',marginBottom:20,alignItems:'center'}}>
            <View style={{alignItems:'flex-start'}}>
            <Text style={{fontWeight:'700',marginBottom:5}}>Họ và tên </Text>
            <TextInput
            style={{width:300,height:35,borderWidth:0.5,borderRadius:5,padding:10,marginBottom:5}}
              placeholder='Họ và tên'
              onChangeText={(text)=>{this.setState({hovaten:text})}}  />
              <Text style={{fontWeight:'700',marginBottom:5}}>Ngày sinh </Text>
            <TextInput
            style={{width:300,height:35,borderWidth:0.5,borderRadius:5,padding:10,marginBottom:5}}
              placeholder='Ngày tháng năm sinh'
              keyboardType = 'numeric'
              onChangeText={(text)=>{this.setState({ngaysinh:text})}}  />
                
            <Text style={{fontWeight:'700',marginBottom:5}}>Số điện thoại</Text>
            <TextInput
            style={{width:300,height:35,borderWidth:0.5,borderRadius:5,padding:10,marginBottom:5}}
              placeholder='Số điện thoại'
              keyboardType = 'numeric'
              onChangeText={(text)=>{this.setState({sodt:text})}}  />

               <Text style={{fontWeight:'700',marginBottom:5}}>Mật khẩu</Text>
            <TextInput
            style={{width:300,height:35,borderWidth:0.5,borderRadius:5,padding:10,marginBottom:5}}
              placeholder='Mật khẩu'
              secureTextEntry={true}
              onChangeText={(text)=>{this.setState({matkhau:text})}} />
               <Text style={{fontWeight:'700',marginBottom:5}}>Nhập lại mật khẩu</Text>
            <TextInput
            style={{width:300,height:35,borderWidth:0.5,borderRadius:5,padding:10}}
              placeholder='Nhập lại mật khẩu'
              secureTextEntry={true}
              onChangeText={(text)=>{this.setState({nhaplaimk:text})}} />
            </View>
        
        <View style={{flex:3,marginTop:5,justifyContent:'center',alignItems:'center'}}>
           <TouchableHighlight 
           onPress={()=>{this.register()} }
           style={{width:200,borderRadius:10,height:35,marginTop:10,backgroundColor:'#009933',justifyContent:'center',alignItems:'center'}} >
             <Text style={{color:'white'}} >Đăng kí</Text>
           </TouchableHighlight>
              
      {this.state.isLoading ? <ActivityIndicator/> : (
       <Text>    
           </Text>// item. ltinh tron

      )}</View>
    </View>
  );
  
          }
}
