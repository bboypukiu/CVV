
import React, { Component,useEffect, useState} from 'react';
import {View,Image,RefreshControl,TouchableHighlight,Text,ScrollView,Dimensions,FlatList,AsyncStorage,
ActivityIndicator, Animated,Linking, Alert} from 'react-native';
import Icon from 'react-native-ionicons';


let x1=Dimensions.get('window').width;// lay ra chiue rong cua man hinh

class ItemDonhang extends Component{

    constructor(props){
        super(props);
        this.state={
          shipmentId:'',
          data:[],
          
        }
    } 
    
async laytoken() {
   var a='';
  try {
     a= await AsyncStorage.getItem('ACCESS_TOKEN');
 return a;
      // We have data!!
      console.log('Laytoken', a);
    
  } catch (error) {
      console.log("sai");
    // Error retrieving data
  }
 
}

nhandon = async () =>{

 var a= await AsyncStorage.getItem('ACCESS_TOKEN');
   console.log(a+" 111");
  const { donnhan }= this.props;
  if (donnhan!= '' ){
    console.log('cai id nay', donnhan)
      // api truyền đơn lên server
   var response = await fetch('http://222.252.26.108:8889/api/app-shipper/order/updateShipper?shipmentId='+ donnhan,{

        method:'POST',
        headers:{
          'Content-Type': 'application/json',
          'ACCESS_TOKEN': 'Bearer ' + await this.laytoken()
        },
      },
    ).then(response => response.json())
    .then((json) => json)
    .catch((error) => {
      console.error(error)
      Alert.alert('Lỗi kết nối! Vui lòng thử lại')
      return null
    })
  
    const {status, statusCode, httpStatus, data} = response
    if(status == "SUCCESS" && httpStatus == "CREATED" && statusCode == 201){
      if(this.props.reloadPage){
        this.props.reloadPage()
      }
      this.props.navigation.navigate('luu',
      //{
        //shipmentId: this.props.donnhan, ten: this.props.ten, xa:this.props.xa,
        //huyen: this.props.huyen, tinh: this.props.tinh,
        //sdtshop:this.props.sdtshop, tennguoinhan: this.props.tennguoinhan,
        //sdtnguoinhan: this.props.sdtnguoinhan, orderId: this.props.orderId,  
        //diachinhan: this.props.diachinhan }
      ) 
    }else{
      Alert.alert('Không nhận được đơn này, vui lòng thử lại!')
   } 
}
}
  //  console.log('ket qua', JSON.stringify(response))




render(){
    return(
    
        <View style={{borderRadius:10,backgroundColor:'white',marginTop:12,padding:10,
        borderBottomWidth:0.4}}>
        <TouchableHighlight>
       <View style={{flex:1,width:x1,flexDirection:'column',justifyContent:'flex-start',alignItems:'flex-start',
        }} >
           <View style={{ flexDirection:'row'}}><Text style={{fontSize:15}}>Tên Shop :</Text>
           <Text style={{fontSize:15}}> {this.props.ten}</Text></View>
                    <View style={{ flexDirection:'row'}}><Text style={{fontSize:15}}>Địa Chỉ Shop :</Text>
           <Text style={{fontSize:13}}> {this.props.diachi} {this.props.xa} {this.props.huyen} {this.props.tinh}</Text></View>
                      <View style={{ flexDirection:'row'}}><Text style={{fontSize:15}}>SĐT Shop :</Text>
           <Text style={{fontSize:15}}> {this.props.sdtshop}</Text></View>
           <View style={{ flexDirection:'row'}}><Text style={{fontSize:15}}>Địa Chỉ Nhận :</Text>
            <Text style={{fontSize:15}}> {this.props.diachinhan}</Text></View>
          
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
                  onPress={this.nhandon}>       
               <View style={{flexDirection:'row'}}>
                   <Icon name='bookmark-outline' color='#006699' size={23}/>
                   <Text style={{marginLeft:3}}>Nhận đơn</Text>
               </View></TouchableHighlight>
            </View>
        </View>
    );
  }
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
      refreshing: false,
      isRefreshing: false
    }
  }

 componentDidMount(){
    this.loaddt();
    
  }

  loaddt = () => {
      
    fetch('http://222.252.26.108:8889/api/app-shipper/shipment/findShipmentNonShip') 
      .then((response) => response.json()) 
       .then((json) => {
         console.log(json)
       this.setState({ 
         refreshing: true,
         isLoading:false,
         data:json.data,
           //this.setState({refreshing: true});
       })
            //setData(json.movies)
    })// response tr? ve data
      .catch((error) => {
        console.error(error)
        alert('tải dữ liệu bị lỗi');
        thi.setState({refreshing: false});
      })
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

onRefresh = () => {// tai du lieu
  this.setState({
    isRefreshing: true
  })
  setTimeout(()=>{
      this.setState({ isRefreshing: false, });
  }, 1000)
}

render(){ 
  return (
    <View >
            <FlatList style={{flex:1/10,width:x1-6}}
              data={this.state.data} 
              refreshControl={
                <RefreshControl
                  refreshing={this.state.isRefreshing}
                  onRefresh={this.onRefresh}
                />
              }
              renderItem={({ item,index }) => {
                // console.log('111',item)
              return( 
                  <ItemDonhang 
                    //shop
                    ten={item.shippingFromName} 
                    diachi={item.shippingFromStreet} 
                    xa={item.shippingFromWard} 
                    huyen={item.shippingFromDistrict} 
                    tinh={item.shippingFromProvince} 
                    sdtshop={item.shippingFromPhone} 
                    // ng nhận 
                    navigation={this.props.navigation} 
                    donnhan={item.shipmentId}
                    diachinhan={item.shippingToAddress}
                    tennguoinhan={item.shippingToName}
                    sdtnguoinhan={item.shippingToPhone}
                    // trạng thái
                  
                    clientId={item.clientId}
                    orgId={item.orgId}
                    orderId={item.orderId}
                    userId={item.userId}
                    orderNo={item.orderNo}
                    statusId={item.statusId}
                    status= {item.status}
                    reason ={item.reason}
                    packageWeight ={item.packageWeight}
                    fee ={item.fee}
                    cod ={item.col}
                    pickMoney={item.pickMoney}
                    reloadPage = {this.loaddt}    
                />
              );
            }
  
      
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



