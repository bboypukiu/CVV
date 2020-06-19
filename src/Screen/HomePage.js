

import React, { Component,useEffect, useState} from 'react';
import {View,Image,Text,ScrollView,Dimensions,FlatList,ActivityIndicator, Animated,Linking} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Icon from 'react-native-ionicons';
import PTRView from 'react-native-pull-to-refresh';
//import PickDateTime from'/Screen/PickDateTime;





let x1=Dimensions.get('window').width;// lay ra chiue rong cua man hinh
class ItemDonhang extends Component{
    constructor(props){
        super(props);
        this.state={
        }
    }
    render(){return(
        <View style={{borderRadius:10,backgroundColor:'white',marginTop:12,padding:10,
        borderBottomWidth:0.4}}>
        <TouchableHighlight underlayColor='#f0f5f5'
         onPress={()=>{this.props.navigation.navigate('Chitietdon')}}>
                  <View style={{flex:1,width:x1,flexDirection:'column',justifyContent:'flex-start',alignItems:'flex-start',
        }} >
            <View style={{flexDirection:'row'}}>
            <View style={{flex:5,flexDirection:'row',marginBottom:5}}>
                <Image style={{width:40,height:40,marginRight:10,borderRadius:20}}
                 source={{uri:'https://scontent.fhan3-3.fna.fbcdn.net/v/t1.0-9/69274800_687532738433940_7394291932463104000_n.jpg?_nc_cat=101&_nc_sid=85a577&_nc_ohc=yeiWRUfQhj4AX9dKOgl&_nc_ht=scontent.fhan3-3.fna&oh=c86c9a7e1314a9eca72b77e3fa19208d&oe=5EDFA3A0'}} />
            <Text style={{color:'#669999',fontSize:15,fontWeight:'bold'}}>{this.props.item.ten}</Text>
            </View>
            {/* <View style={{flex:5,alignItems:'flex-end',marginRight:20}}><Text>nhan ngay</Text></View> */}
            </View>

            <View style={{flexDirection:'row',marginBottom:5}}>
                <Text style={{color:'#6b6b47',fontSize:12}}>{this.props.item.time} .</Text>
                <Image source={require('../Image/earth.png')} style={{marginLeft:5,width:20,height:20}} />
            </View>
            <View><Text style={{fontWeight:'700'}}>{this.props.item.noidung}</Text></View>
          
        </View>
        </TouchableHighlight>

        <View style={{flex:4,width:x1,flexDirection:'row',marginTop:5,justifyContent:'space-around'}}>
               <View  style={{flexDirection:'row'}}>
                   <Icon name='chatbox-ellipses-outline' color='#006699' size={23}/>
                   <Text style={{marginLeft:3}}>Bình luận</Text>
               </View>
               <TouchableHighlight underlayColor='' onPress={()=>{Linking.openURL('tel:0362050508');}}>
               <View style={{flexDirection:'row'}}>
                   <Icon name='call-outline' color='#006699' size={23}/>
                   <Text style={{marginLeft:3}}>Gọi</Text>
               </View>
               </TouchableHighlight>
               <View style={{flexDirection:'row'}}>
                   <Icon name='bookmark-outline' color='#006699' size={23}/>
                   <Text style={{marginLeft:3}}></Text>
               </View>
            </View>
        </View>
    );}
}
class Trangchu extends Component {
    constructor(props){
        super(props);
        this.state={
            scrolltotop:false,
            loaddata:true,
        
        }
    }
    

    toTop(){
        // use current
        this.refs.flatlis.scrollToOffset({ animated: true, offset: 0 });
       console.log( this.refs.flatlis.index+"");
       
    }
    _refresh(){// ham nay de refresh du lieu moi !! hehe
        console.log("dang tai dl");
        
    }
    onRefresh() {// tai du lieu ne
        this.setState({ loaddata: false, });
        alert('dang tai du lieu');
      }
    render() {
        return (
            
            <View style={{flex:1}}>
            
            
              <View style={{flex:1 ,flexDirection:'column',justifyContent:'center'}}>
                <View  style={{flex:0.8,justifyContent:'center',alignItems:'center',backgroundColor:'#669999'}}>         
                    <Text style={{color:'white',fontSize:20}}>Đơn hàng mới</Text>
                </View>
               
                <View style={{flex:7,alignItems:'center',justifyContent:'center',backgroundColor:'#eaeae1'}}>     
            


                      <FlatList style={{flex:9/10,width:x1-20}}
                            data={this.state.dsdonhang}
                        refreshing={this.state.loaddata}
                            onRefresh={() => this.onRefresh()}
                            ref="flatlis"
                        
                            onScroll={(e)=>{
                            
                                let offset = e.nativeEvent.contentOffset.y;
                                let index = parseInt(offset / 300);   // your cell height
                            if(index!=0){
                                this.setState({
                                    scrolltotop:true,
                                })
                            }
                            else{
                                this.setState({
                                    scrolltotop:false,
                                }) 
                            }
                                // console.log("now index is " +index)
                            }}

                            renderItem={({item,index})=>{
                                return(<ItemDonhang item={item} navigation={this.props.navigation} />);
                            }}
                            >
                            
                    </FlatList>
                </View>
                
           </View>
      
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

export default TrangChu = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
      
    fetch('http://192.168.1.12:8889/api/shipment/findAllShipmentStatus')
    //fetch('http://192.168.1.12:8889/api/app-shipper/order/detail?orderId=831')
    //fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json()) // pare response trả về thành json
       .then((json) => {
       console.log(json)
            setLoading(false)
            setData(json.data)
            //setData(json.movies)
    })// response trả ve data
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
      
          data={data}
          keyExtractor={({ item }, index) => item}
          renderItem={({ item }) => (
           //<Text>{item.dateAcct}, {item.dateOrdered},  
            <Text>{item.created}, {item.status},
           </Text>// item. ltinh trong dong bui nhui
          )}
        />
      )}
    </View>
  );
};






















