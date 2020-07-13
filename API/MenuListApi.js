import React, { Component, useEffect, useState   } from 'react';
import { TouchableHighlight, View,Text,Image ,AsyncStorage,Dimensions,TextInput,ScrollView,Linking,ActivityIndicator} from 'react-native';
import Icon from 'react-native-ionicons';
import { FlatList  } from 'react-native-gesture-handler';

import {Picker} from '@react-native-community/picker';

let x1=Dimensions.get('window').width;// lay ra chieu rong cua man hinh


class ItemDonhang extends Component{

    constructor(props){
        super(props);
        this.state={
           language: 'danggiao',
           ds:[],
        };
    } 
     
    render() {
    return(
    
        <View style={{borderRadius:10,backgroundColor:'red',marginTop:12,padding:10,height:100,
        borderBottomWidth:0.4}}>
        
          {/* <View style={{ flexDirection:'row'}}><Text style={{fontSize:15}}>Tên Shop :</Text>
           <Text style={{fontSize:15}}> {this.props.ten}</Text></View>
                    <View style={{ flexDirection:'row'}}><Text style={{fontSize:15}}>Địa Chỉ Shop :</Text>
           <Text style={{fontSize:13}}> {this.props.diachi} {this.props.xa} {this.props.huyen} {this.props.tinh}</Text></View>
                     <View style={{ flexDirection:'row'}}><Text style={{fontSize:15}}>SĐT Shop :</Text>
           <Text style={{fontSize:15}}> {this.props.sdtshop}</Text></View> /*}
  
 
  
  {/* <View style={{justifyContent:'center',flex:2,alignItems:'flex-end'}}>
  
   {this.props.parent==0 ? <Picker
   selectedValue={this.state.language}
   style={{height: 50, width:150, color:'back',justifyContent:'center',alignItems:'center'}}
    onValueChange={(itemValue, itemIndex) =>
    this.setState({language: itemValue})
   }>
   <Picker.Item label= "Đang giao" value ="danggiao" />
      <Picker.Item label= "xong" value ="xong" />
         <Picker.Item label= "Hủy đơn" value ="huydon" />
            <Picker.Item label= "Trả đơn" value ="tradon" />
            </Picker>:<View></View>}
            
   </View>
*/}
     </View>
     ) }
    }


export default class MenuListApi extends Component {
constructor(props){
  super(props);
  this.state ={
               shipmentId:'',
              data:[],
  }
  console.log('du lieu aaaa',this.props)
}

laytoken(){
    console.log('lấy token ', token1);
    AsyncStorage.removeItem('ACCESS_TOKEN')
}
 componentDidMount(){
    this.dsDon();
    
  }   

async dsDon(){
      if (shipmentId!= '' ){
          if (shipmentId==shipmentId){
           
         await fetch('http://192.168.1.12:8889/api/app-shipper/shipment/findShipmentByShipperId?size=10&page=0',{
           method: 'GET',
           body:JSON.stringify({
              shipmentId: this.props.shipmentId
           }),
           headers:{
             'Content-Type' : 'application/json',
             'ACCESS_TOKEN' : 'Bearer' + this.props.parent.laytoken()
           }
         }).then(response =>
         //this.setState(ds:reponses.data)
          {return response.json(); })
       }
     }
}
 //await fetch('http://192.168.1.12:8889/api/app-shipper/shipment/findShipmentByShipperId?size=10&page=0'){// api danh sach don nhan
 //this.setState(ds:reponses.data.ten)
 //do du lieu tra ve tu api vao danh sach ( this.setstat(ds:reponses.data......))
//}
//}
render(){
    const {  orderId, shipmentId, ten, xa, huyen, tinh, sdtshop, sdtnguoinhan, tennguoinhan, diachinhan} = this.props.route.params
   // alert(JSON.stringify(this.props.route.params))
  return (
    <View>

    
    <TouchableHighlight underlayColor='#f0f5f5'
         onPress={()=>{this.props.navigation.navigate('Chitietdon')}}>  
                 <ItemDonhang 
                  ten ={ten}
                  xa={xa}
                   huyen ={huyen}
                   tinh ={tinh}
                   sdtshop ={sdtshop} 
                   shipmentId = {shipmentId}
                   diachinhan={diachinhan}
                   tennguoinhan={tennguoinhan}
                   sdtnguoinhan={sdtnguoinhan}
                   orderId={orderId}
                 />     
    
   </TouchableHighlight></View>
  )
}
}

