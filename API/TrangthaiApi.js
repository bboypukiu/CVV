
import React, { Component,useEffect, useState} from 'react';
import {View,Image,RefreshControl,TouchableHighlight,Text,ScrollView,Dimensions,FlatList,
ActivityIndicator, Animated,Linking, Alert} from 'react-native';
import Icon from 'react-native-ionicons';

let x1=Dimensions.get('window').width;// lay ra chiue rong cua man hinh
class ItemTrangThai extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

render(){
    return(
          <View style={{flex:4/10,width:x1-10,borderWidth:0.5,padding:5,borderRadius:10,
                            backgroundColor:'white',margin:5,flexDirection:'column'}}>
                            <Text style={{margin:5,marginBottom:20,fontWeight:'bold',color:'#339966'}}></Text>
                        </View>      
    )
}
}

export default class TrangthaiApi extends Component{
    constructor(props){
        super(props);
        this.state={
            isLoading:false,
            data:[],

        }
    }
    
async Trangthai(){
    const {orgId, orderId,userId}= this.props.route.params
    const Trangthai='http://192.168.1.12:8889/api/app-shipper/shipment/createShipmentTracking';
          console.log(Trangthai)
          fetch(Trangthai, {
              method: 'POST',
              body: JSON.stringifly({

              }),
              headers:{
                  'Content-Type' : 'application/json'
              },

          },

          ).then(response=>{return response.json();})

}
render(){
    const{orgId, orderId, orderNo,userId,
    statusId, status, reason, packageWeight,fee,cod,pickMoney}=this.props.route.params
    return(
        <View>
 <ItemTrangThai 
              clientId={clientId}
                orgId={orgId}
                orderId={orderId}
                userId={userId}
                orderNo={orderNo}
                statusId={statusId}
                status= {status}
                reason ={reason}
                packageWeight ={packageWeight}
                fee ={fee}
                cod ={col}
               pickMoney={pickMoney}


/></View>
    )
}
}