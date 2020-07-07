import React, { Component,useEffect, useState} from 'react';
import {View,Image,Text,ScrollView,Dimensions,FlatList,ActivityIndicator, Animated,Linking} from 'react-native';
import Icon from 'react-native-ionicons';
let x1=Dimensions.get('window').width;// lay ra chiue rong cua man hinh
/// Thông tin shipper

export default class Information extends Component {
  // const [isLoading, setLoading] = useState(true);
  // const [data, setData] = useState([]);

  constructor(props){
    super(props);
    this.state={
      isLoading:false,
      data:{},
      name:null,
    }
  }


 componentDidMount(){
    this.loaddt();//console.log( this.props.parent.state.name+" 111");
  }

  loaddt() {
      
   // fetch('http://222.252.26.108:8889/api/shipment/findShipmentTrackingDetail?orderId=626') 
  fetch('http://192.168.1.12:8889/api/shipment/findShipmentTrackingDetail?orderId=626') 
      .then((response) => response.json()) 
       .then((json) => {
      this.props.parent.setState({name:this.state.data.shippingFromName})
      
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

      return this.state.data;
  }
  render(){
  return (
  <View style={{flex:1,flexDirection:'column',alignItems:'center',justifyContent:'flex-start',margin:10}}>
                <Text style={{fontWeight:'700',fontSize:16}}>Thông tin tài khoản</Text>
                <View style={{width:x1*0.8,flexDirection:'row',alignItems:'center'}}>
                    <Icon name='person-circle-outline' size={28} color='#669999'/>
                     <Text>{this.state.data.shippingFromName}</Text>
                </View> 
                <View style={{width:x1*0.8,flexDirection:'row',marginTop:10,alignItems:'center'}}>
                    <Icon name='location-outline' size={28} color='#00b3b3'/>
                     <Text>{this.state.data.shippingFromAddress}</Text>
                      <Text>{this.state.data.shippingFromDistrict}</Text>
                      <Text> ,</Text>
                      <Text>{this.state.data.shippingFromProvince}</Text>
                </View> 
                <View style={{width:x1*0.8,flexDirection:'row',marginTop:10,alignItems:'center'}}>
                    <Icon name='call-outline' size={28} color='green'/>
                     <Text>{this.state.data.shippingFromPhone}</Text>
                </View> 

              
      {this.state.isLoading ? <ActivityIndicator/> : (
       <Text>    
           </Text>// item. ltinh tron

      )}
    </View>
  );
          }
}
