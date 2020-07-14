import React, { Component } from 'react';
import { View,Text,Image,TouchableHighlight,ScrollView,Dimensions,Linking } from 'react-native';
import Icon from 'react-native-ionicons';
import TrangthaiApi from '../../../API/TrangthaiApi';
import ChitietdonApi from '../../../API/ChitietdonApi';
let x1=Dimensions.get('window').width;// lay ra chiue rong cua man hinh
let data = null;
export default class ChitietDon extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        data = this.props.navigation.getParam('itemsend');
        alert('ahihi')
   } 
    chiduong(latitude,longitude){
        this.props.navigation.navigate('map',{latitude:latitude,longitude:longitude});
    }

    
    render() {
        return (
         
                <ScrollView 
              
                style={{flex:1,margin:2}}>
                    <View style={{flexDirection:'column',alignSelf:'baseline',justifyContent:'flex-start',alignItems:'center',paddingBottom:20}}>
                    <ScrollView>    
                        <View style={{alignSelf:'baseline',width:x1-10,borderWidth:0.5,padding:5,borderRadius:10,
                            backgroundColor:'white',margin:5,flexDirection:'column'}}>
                            <Text style={{margin:5,marginBottom:10,fontWeight:'bold',color:'#339966'}}>Người gửi hàng</Text>
                            <View style={{flexDirection:'row',marginBottom:10}}>
                                <Icon name='person-sharp' size={20} color='green' />
                                <Text style={{marginLeft:5}}></Text>
                            </View>

                            { /*<ChitietdonApi  {...this.props} /> */} 
                            
                            <View style={{flexDirection:'row',marginBottom:10}}>
                                <View style={{flexDirection:'row'}}>
                                <Icon name='call-sharp' size={20} color='red' />
                                <Text style={{marginLeft:5}}></Text>
                                </View>
                                <View style={{flex:6,alignItems:'flex-end'}}>
                                <Text onPress={()=>{Linking.openURL('tel:0362050508');}}
                                 style={{textDecorationLine:'underline',color:'green',marginRight:40}}>Gọi ngay</Text>
                                </View>
                            </View>

                            <View style={{flexDirection:'row',marginBottom:10}}>
                                <View style={{flexDirection:'row',flex:5}}>
                                <Icon name='location-sharp' size={20} color='#99ccff' />
                                <Text style={{marginLeft:5}}></Text>
                                </View>
                                {this.props.nhan!='ok' ?       <View style={{flex:3,alignItems:'flex-end'}}>
                                <Text onPress={()=>{this.chiduong(21.0281545,105.8034205);}}
                                 style={{textDecorationLine:'underline',color:'green',marginRight:40}}>Chỉ đường</Text>
                                </View>:<View></View>}
                            </View>
                        </View>

                         {this.props.nhan!='ok' ? 
                        <View style={{alignSelf:'baseline',width:x1-10,borderWidth:0.5,padding:5,borderRadius:10,
                            backgroundColor:'white',margin:5,flexDirection:'column'}}>
                            <Text style={{margin:5,marginBottom:10,fontWeight:'bold',color:'#339966'}}>Người nhận hàng</Text>
                            <View style={{flexDirection:'row',marginBottom:10}}>
                                <Icon name='person-sharp' size={20} color='green' />
                                <Text style={{marginLeft:5}}></Text>
                            </View>
                            <View style={{flexDirection:'row',marginBottom:10}}>
                                <View style={{flexDirection:'row'}}>
                                <Icon name='call-sharp' size={20} color='red' />
                                <Text style={{marginLeft:5}}></Text>
                                </View>
                                <View style={{flex:6,alignItems:'flex-end'}}>
                                <Text onPress={()=>{Linking.openURL('tel:0362050508');}}
                                 style={{textDecorationLine:'underline',color:'green',marginRight:40}}>Gọi ngay</Text>
                                </View>
                            </View>

                            <View style={{flexDirection:'row',marginBottom:10}}>
                                <View style={{flexDirection:'row',flex:5}}>
                                <Icon name='location-sharp' size={20} color='#99ccff' />
                                <Text style={{marginLeft:5}}></Text>
                                </View>
                                {this.props.nhan!='ok' ?    <View style={{flex:3,alignItems:'flex-end'}}>
                                <Text onPress={()=>{this.chiduong(20.981871,105.7915193);}}
                                 style={{textDecorationLine:'underline',color:'green',marginRight:40}}>Chỉ đường</Text>
                                </View> :<View></View>}
                            </View>
                        </View> :<View></View>}

                        <View style={{flex:4/10,width:x1-10,borderWidth:0.5,padding:5,borderRadius:10,
                            backgroundColor:'white',margin:5,flexDirection:'column'}}>
                            <Text style={{margin:5,marginBottom:20,fontWeight:'bold',color:'#339966'}}>Nội đung đơn hàng</Text>
                            <Text>
                            </Text>
                        </View>


                     {this.props.nhan!='ok' ?   <View style={{alignItems:'center',}}>
                        <TouchableHighlight style={{justifyContent:'center',alignItems:'center',width:100,height:35,backgroundColor:'#339966',marginTop:50}} >
                           <Text style={{color:'white'}}>Đã nhận đơn</Text>
                        </TouchableHighlight>
                        </View>:<View></View>}
                        </ScrollView>
                    </View>
                </ScrollView>
            
            
        );
    }
}