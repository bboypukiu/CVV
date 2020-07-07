import React, { Component,useEffect, useState} from 'react';
import {View,Image,RefreshControl,TouchableHighlight,Text,ScrollView,Dimensions,FlatList,
ActivityIndicator, Animated,Linking} from 'react-native';
import Icon from 'react-native-ionicons';
let x1=Dimensions.get('window').width;// lay ra chiue rong cua man hinh

class ItemDonhang extends Component{

    constructor(props){
        super(props);
        this.state={
        }
    } 
     
    render(){
    return(
    
        <View style={{borderRadius:10,backgroundColor:'white',marginTop:12,padding:10,
        borderBottomWidth:0.4}}>
        <TouchableHighlight>
       <View style={{flex:1,width:x1,flexDirection:'column',justifyContent:'flex-start',alignItems:'flex-start',
        }} >
           <View style={{ flexDirection:'row'}}><Text style={{fontSize:15}}>Tên Shop :</Text>
           <Text style={{fontSize:15}}> {this.props.ten}</Text></View>
                    <View style={{ flexDirection:'row'}}><Text style={{fontSize:15}}>Địa Chỉ :</Text>
           <Text style={{fontSize:13}}> {this.props.diachi} {this.props.xa} {this.props.huyen} {this.props.tinh}</Text></View>
                      <View style={{ flexDirection:'row'}}><Text style={{fontSize:15}}>SĐT Shop :</Text>
           <Text style={{fontSize:15}}> {this.props.sdtshop}</Text></View>
          
        </View>
        </TouchableHighlight>

        <View style={{flex:3,width:x1,flexDirection:'row',marginTop:5,justifyContent:'space-around'}}>
               <View  style={{flexDirection:'row'}}>
                   <Icon name='chatbox-ellipses-outline' color='#006699' size={23}/>
                   <Text style={{marginLeft:3}}>Bình luận</Text>
               </View>
               <TouchableHighlight underlayColor='' onPress={()=>{Linking.openURL(this.props.sdtshop);}}>
               <View style={{flexDirection:'row'}}>
                   <Icon name='call-outline' color='#006699' size={23}/>
                   <Text style={{marginLeft:3}}>Gọi</Text>
               </View>
               </TouchableHighlight>
               <TouchableHighlight underlayColor='#f0f5f5'
                  onPress={()=>{this.props.navigation.navigate('luu')}}>
               <View style={{flexDirection:'row'}}>
                   <Icon name='bookmark-outline' color='#006699' size={23}/>
                   <Text style={{marginLeft:3}}>Nhận đơn</Text>
               </View></TouchableHighlight>
            </View>
        </View>
    );}
}
 class TrangChu extends Component {
 
 constructor(props){
 super(props);
 this.state={
 
 scrolltotop:false,
  loaddt:false,}
 }
 }

export default class HomePageAPI extends Component {
  constructor(props){
    super(props);
    this.state={
      isLoading:false,
      data:[],
      refreshControl: false,
    }
  }

 componentDidMount(){
    this.loaddt();
  }

  loaddt() {
      
    fetch('http://222.252.26.108:8889/api/app-shipper/shipment/findShipmentNonShip') 
      .then((response) => response.json()) 
       .then((json) => {
     
       this.setState({ 
         isLoading:false,
         data:json.data,
           //this.setState({refreshing: true});
       })
            //setData(json.movies)
    })// response trả ve data
      .catch((error) => console.error(error))
      .finally(() => this.setState({
        isLoading:false,
        //this.setState({refreshing: false});
      }))
  }

  toTop(){
        // use current
        this.refs.flatlis.scrollToOffset({ animated: true, offset: 0 });
       console.log( this.refs.flatlis.index+"");
       
    }
    _refresh(){// ham nay de refresh du lieu moi 
        console.log("dang tai dl");
        
    }
    onRefresh() {// tai du lieu 
        this.setState({ loaddt: false, });
        alert('dang tai du lieu');
      }
  render(){
 
  
  return (

  <View >
                <FlatList style={{flex:1/10,width:x1-6}}
                 data={this.state.data} 
                 renderItem={({ item,index }) => {
                 return( <ItemDonhang 
                  ten={item.shippingFromName} 
                  diachi={item.shippingFromStreet} 
                  xa={item.shippingFromWard} 
                   huyen={item.shippingFromDistrict} 
                   tinh={item.shippingFromProvince} 
                 sdtshop={item.shippingFromPhone} 
                 navigation={this.props.navigation} 
                 />
            
                 );
                
                 }
      // <Itempu navigation={navigation} />
         
          }/>
                  
              

      {this.state.isLoading ? <ActivityIndicator/> : (
      
        <Text></Text>

      )}
         <View style={{position:'absolute',bottom:50,right:50}}>
                   
                      {this.state.scrolltotop==true ? <TouchableHighlight
                      underlayColor=''
                      style={{alignItems:'center',width:50,height:50,justifyContent:'center',alignItems:'center'}} 
                      onPress={()=>{this.toTop()}}>
                          <Icon name='arrow-up-circle-outline' size={40} color='green' />
                      </TouchableHighlight> :<View></View>}
                    </View>
           </View>

  
  
    
  );
          }
}
