import React, { Component, useEffect, useState   } from 'react';
import { TouchableHighlight, View,Text,Image ,AsyncStorage,Dimensions,TextInput,ScrollView,Linking,ActivityIndicator,TouchableOpacity} from 'react-native';
import Icon from 'react-native-ionicons';
import { FlatList  } from 'react-native-gesture-handler';

import {Picker} from '@react-native-community/picker';

let x1=Dimensions.get('window').width;// lay ra chieu rong cua man hinh


export default class MenuListApi extends Component {
constructor(props){
  super(props);
  this._ItemDonhang = this._ItemDonhang.bind(this)
  this.state ={
    data:[],
  }
  //console.log('du lieu aaaa',this.props)
}


 laytoken = async () =>{
   var token1 = ''
  try {
    //console.log('tra ve ',verificationToken)
  //   await AsyncStorage.setItem('ACCESS_TOKEN',verificationToken );
    token1 = await AsyncStorage.getItem('ACCESS_TOKEN')
  } catch (error) {
    // Error saving data
  }
  return token1
}
componentDidMount(){
  this.dsDon(); 
}   
dsDon = async () => {
  var token =  await this.laytoken()
  // api nhận đơn từ server về  
  if(token != ''){

    var response = await fetch('http://222.252.26.108:8889/api/app-shipper/shipment/findShipmentByShipperId?size=10&page=0',{
      method: 'GET',
      headers:{
        'ACCESS_TOKEN' : 'Bearer ' + 'eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1OTU1ODQ5MDgsInVzZXIiOnsicGFzc3dvcmQiOiIkMmEkMTAkQ3Vsd04wbUVSWU0ySXVKYU9keWZXLlhiU1RJTHY0XC85YlNQejFoNHh0WlNzaGkzNU9MVGIuIiwiY2xpZW50SWQiOm51bGwsInRva2VuSWQiOm51bGwsImZ1bGxuYW1lIjoixJDhurduZyBUaOG7iyBOZ3V5w6puIiwidXNlcklkIjo0NjEsImVtYWlsIjpudWxsLCJhdXRob3JpdGllcyI6WyJQX0NPTU1FTlRfQyIsIlJPTEVfQlVZRVIiLCJST0xFX1NISVBQRVIiXSwib3JnSWQiOm51bGwsInVzZXJuYW1lIjpudWxsfX0.WkOfvfLDVIyspwzdc3krZR3HUIsR96labcdjuMmXVsI'
      }
    }).then(response => response.json())
    .then((json) => json)
    .catch((error) => {
      console.error(error)
      Alert.alert('Lỗi kết nối! Vui lòng thử lại')
      return null
    })

    const {status, statusCode, httpStatus, data} = response
    if(status == "SUCCESS" && httpStatus == "OK" && statusCode == 200){
      this.setState({data})
    }else{
      Alert.alert('Không lấy được danh sách đơn hàng, vui lòng thử lại!')
    }
    //this.setState(ds:reponses.data)
  }
}
 
_ItemDonhang = ({item,index}) => {
   console.log(item);
    return( 
        <TouchableOpacity
          onPress={ () => {this.props.onNavi(item)}}
         style={{borderRadius:10,backgroundColor:'red',marginTop:12,padding:10,height:500,
        width:500,
        borderBottomWidth:0.4, }}>
        
        <View style={{ flexDirection:'row'}}><Text style={{fontSize:15}}>Tên Shop :</Text>
           <Text style={{fontSize:15}}> {item.shippingFromName}</Text></View>
                    <View style={{ flexDirection:'row'}}><Text style={{fontSize:15}}>Địa Chỉ Shop :</Text>
           <Text style={{fontSize:13}}> {item.shippingFromAddress}</Text></View>
                     <View style={{ flexDirection:'row'}}><Text style={{fontSize:15}}>SĐT Shop :</Text>
           <Text style={{fontSize:15}}> {item.shippingFromPhone}</Text></View> 
     </TouchableOpacity>
     ); 
     }; 

render(){// gọi dữ liệu ra
  console.log("in ra data", this.state.data.shipmentDtos)

  //console.log(JSON.parse(this.state.data?.shipmentDtos).map(shipment => shipment.trackingNo));

  
  return (  
      <View style={{width:'100%', height:'100%'}}  >
            <FlatList 
              data={this.state.data.shipmentDtos} 
              renderItem={this._ItemDonhang}/>
           </View>
  );
          }
}

