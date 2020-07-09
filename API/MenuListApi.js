import React, { Component, useEffect, useState   } from 'react';
import { View,Text,Image ,AsyncStorage,Dimensions,TextInput,ScrollView,Linking,ActivityIndicator} from 'react-native';
import Icon from 'react-native-ionicons';
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';

import {Picker} from '@react-native-community/picker';

let x1=Dimensions.get('window').width;// lay ra chieu rong cua man hinh


class ItemDonhang extends Component{

    constructor(props){
        super(props);
        this.state={
        }
    } 
     
    render() {
    return(
    
        <View style={{borderRadius:10,backgroundColor:'white',marginTop:12,padding:10,  
        borderBottomWidth:0.4}}>
       
      
           <View style={{ flexDirection:'row'}}><Text style={{fontSize:15}}>Tên Shop :</Text>
           <Text style={{fontSize:15}}> {this.props.ten}</Text></View>
                    <View style={{ flexDirection:'row'}}><Text style={{fontSize:15}}>Địa Chỉ Shop :</Text>
           <Text style={{fontSize:13}}> {this.props.diachi} {this.props.xa} {this.props.huyen} {this.props.tinh}</Text></View>
                      <View style={{ flexDirection:'row'}}><Text style={{fontSize:15}}>SĐT Shop :</Text>
           <Text style={{fontSize:15}}> {this.props.sdtshop}</Text></View>
           <View style={{ flexDirection:'row'}}><Text style={{fontSize:15}}>Địa Chỉ Nhận :</Text>
            <Text style={{fontSize:15}}> {this.props.diachinhan}</Text></View>
          
        </View>
     
   
     ) }
    }
export default class MenuListApi extends Component {
constructor(props){
  super(props);
  this.state ={
shipmentId:'',
  }
  console.log('du lieu aaaa',this.props)
}
async nhandon(){
  const {shipmentId, ten, xa, huyen, tinh, sdtshop} = this.props.route.params
  const nhandon ='http://222.252.26.108:8889/api/app-shipper/order/updateShipper?shipmentId='+shipmentId;
     console.log(nhandon)
     //sconst { shipmentId }= this.state;
        if (shipmentId!= '' ){
          if (shipmentId==shipmentId){
            fetch(nhandon,{

              method:'POST',
              body: JSON.stringify({
                shipmentId: this.state.shipmentId
              }),
              headers:{
                'Content-Type': 'application/json'
              },

            },
            )
          }
        
}
}
render(){
    const {shipmentId, ten, xa, huyen, tinh, sdtshop} = this.props.route.params
  //  alert(JSON.stringify(this.props.route.params))
  return (
  
     
                 <ItemDonhang 
                  ten ={ten}
                  xa={xa}
                   huyen ={huyen}
                   tinh ={tinh}
                 sdtshop ={sdtshop}
                
                 
                shipmentId = {shipmentId}
                 />     
    
   
  )
}
}

