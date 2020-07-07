import React, { Component    } from 'react';
import { View,Text,Image ,AsyncStorage,Dimensions,TextInput,ScrollView,Linking} from 'react-native';
import Icon from 'react-native-ionicons';
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';

import MenuListApi from '../../API/MenuListApi';
import {Picker} from '@react-native-community/picker';

let x1=Dimensions.get('window').width;// lay ra chieu rong cua man hinh

class ItemDonhang extends Component{
    constructor(props){
        super(props);
        this.state = {
            
            language: 'danggiao',
          };  

    }
    
    render(){   
        return(

       <View >
                <View style={{flex:7,width:x1,flexDirection:'column',justifyContent:'flex-start',alignItems:'flex-start',
                        borderRadius:10,backgroundColor:'white',marginTop:5,padding:10,borderBottomColor:'black',
                        borderBottomWidth:0.5}} >
                    <View style={{flexDirection:'row'}}>
                    <View style={{flex:5,flexDirection:'row',marginBottom:5,justifyContent:'flex-start'}}>
                      <View style={{flex:8,flexDirection:'row'}}>
                      <Image style={{width:40,height:40,marginRight:10,borderRadius:20}}
                        source={{uri:'https://scontent.fhan3-3.fna.fbcdn.net/v/t1.0-9/69274800_687532738433940_7394291932463104000_n.jpg?_nc_cat=101&_nc_sid=85a577&_nc_ohc=yeiWRUfQhj4AX9dKOgl&_nc_ht=scontent.fhan3-3.fna&oh=c86c9a7e1314a9eca72b77e3fa19208d&oe=5EDFA3A0'}} />
                    <Text style={{color:'#669999',fontSize:15,fontWeight:'bold'}}>{this.props.item.ten}</Text>
                    
                      </View>
                    <View style={{justifyContent:'center',flex:2,alignItems:'flex-end'}}>
                    {this.props.parent==0 ?   <Picker
                            selectedValue={this.state.language}
                            style={{height: 50,width: 150,color:'black',justifyContent:'center',alignItems:'center'}}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({language: itemValue})
                            }>
                            <Picker.Item label="Đang giao" value="danggiao" />
                            <Picker.Item label="Xong" value="xong" />
                            <Picker.Item label="Hủy đơn" value="huydon" />
                            <Picker.Item label="Trả đơn" value="tradon" />
                       </Picker>:<View></View>}
                    </View>
                    </View>
                    </View>

                    <View style={{flexDirection:'row',marginBottom:5}}>
                        <Text style={{color:'#6b6b47',fontSize:12}}>{this.props.item.time} .</Text>
                        <Image source={require('../Image/earth.png')} style={{marginLeft:5,width:20,height:20}} />
                    </View>
                 </View>

                 <View style={{flex:3}}>
                
                 </View>
       </View>
   
    );}
}


class DanhSachDonNhan extends Component{
    constructor(props){
        super(props);
        this.state={
            loaddata:'false',
            dsdonhangnhan:[]
        }   
    }


    toTop(){
        // use current
        this.refs.flatlis.scrollToOffset({ animated: true, offset: 0 });
       console.log( this.refs.flatlis.index+""); 
    }
    render(){
        return(   
                <View style={{flex:7,alignItems:'center',justifyContent:'center',backgroundColor:'#eaeae1'}}>     

<MenuListApi></MenuListApi>
                  {this.state.scrolltotop==true ? <TouchableHighlight
                  underlayColor='white'
                   style={{alignItems:'center',width:x1,height:40,backgroundColor:'white'}} onPress={()=>{this.toTop()}}>
                      <Icon name='arrow-up-outline' size={40} color='green' />
                </TouchableHighlight> :<View></View>}
                      <FlatList style={{flex:10/10}}
                      data={this.state.dsdonhangnhan}
                      ref="flatlis"
                  
                     onTouchMove={() => {
                        
                        this.setState({
                            loaddata:true,
                        })
                     }}
                     onMomentumScrollEnd={()=>{
                         this.setState({
                             loaddata:false,
                         })
                     }}

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
                      
                    }}
                      renderItem={({item,index})=>{
                        return(<ItemDonhang item={item} parent={this.props.parent.state.a1} />);
                    }}
                    / >   
                                    
           </View>
        );
    }
}

class ThongTinLichsu extends Component{
    constructor(props){
        super(props);
        this.state={
            loaddata:'false',
            dsdonhangnhan:[]
        }   
    

    }

    toTop(){
       
        // use current
        this.refs.flatlis.scrollToOffset({ animated: true, offset: 0 });
       console.log( this.refs.flatlis.index+""); 
    }


    render(){
        return(
         <View style={{flex:7,alignItems:'center',justifyContent:'center',backgroundColor:'#eaeae1'}}>     

                
                  {this.state.scrolltotop==true ? <TouchableHighlight
                  underlayColor='white'
                   style={{alignItems:'center',width:x1,height:40,backgroundColor:'white'}} onPress={()=>{this.toTop()}}>
                      <Icon name='arrow-up-outline' size={40} color='green' />
                </TouchableHighlight> :<View></View>}
                      <FlatList style={{flex:10/10}}
                      data={this.state.dsdonhangnhan}
                      ref="flatlis"
                   
                     onTouchMove={() => {
                        
                        this.setState({
                            loaddata:true,
                        })
                     }}
                     onMomentumScrollEnd={()=>{
                         this.setState({
                             loaddata:false,
                         })
                     }} 

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
                      
                    }}

                      renderItem={({item,index})=>{
                        return(<ItemDonhang item={item} />);
                    }}
                    / >   
                                    
           </View>
        );
    }
}

class Top extends Component{
    constructor(props){
        super(props);
        this.state={
            pickcolorDanhSachDonNhan:'#ccff66',
            pickcolorThongtinLichsu:'white',
        
           
        }
    }

    geta1(){
        return this.state.a1;      
    }
   
    pick(a){

        if(a==0){this.setState({pickcolorDanhSachDonNhan:'#ccff66', pickcolorThongtinLichsu:'white',pickcolorbaomat:'white',}); }
        if(a==1){this.setState({pickcolorDanhSachDonNhan:'white', pickcolorThongtinLichsu:'#ccff66',pickcolorbaomat:'white',});}
        this.props.parent.setState({a1:a,});
  
    }

    render(){
        return(
            <View style={{flexDirection:'column',justifyContent:'flex-start',backgroundColor:'#669999',alignItems:'center',marginTop:10}}>
                <View style={{flexDirection:'row',width:'100%',
                     justifyContent:'space-evenly',alignItems:'center'}}>
                         <View style={{flexDirection:'column',alignItems:'center'}}>
                             <TouchableHighlight underlayColor='#669999' onPress={()=>{this.pick(0)}}>
                             <Image  style={{width:50,height:50,backgroundColor:this.state.pickcolorDanhSachDonNhan,borderRadius:25}}
                             source={require('../Image/dsdon.png')} />
                             </TouchableHighlight>
                             <Text style={{color:'white',marginTop:5}}>Danh Sách Đơn Nhận</Text>
                         </View>

                         <View style={{flexDirection:'column', alignItems:'center'}}>
                         <TouchableHighlight underlayColor='#669999' onPress={()=>{this.pick(1)}}>
                             <Image  style={{width:50,height:50,backgroundColor:this.state. pickcolorThongtinLichsu,borderRadius:25}}
                             source={require('../Image/lsu.png')} />
                             </TouchableHighlight>
                             <Text style={{color:'white',marginTop:5}}>Lịch Sử Đơn</Text>
                         </View>
                         <View style={{flexDirection:'column',alignItems:'center'}}>
                      
                         </View>
                        
                </View>
            </View>
        );
    }
}

export default class Danhsachdonnhan extends Component {
    constructor(props){
        super(props);
        this.state={
            a1:0,
        };      
    }

   
    render() {
       
        return (
            
            <View style={{flex:1, backgroundColor:'#669999'}}>
                <View 
                style={{flex:2/10,
                    width:'100%',
                    justifyContent:'flex-start',
                    alignItems:'center',
                    backgroundColor:'#669999'
                }}>
                    <Top ref='top' parent={this} />
                </View>

                <View 
                style={{flex:7.9/10,
                    width:'100%',
                   backgroundColor:'white',
                                                        
                }}>
                           
                  {this.state.a1==0 ? <DanhSachDonNhan parent={this} navigation={this.props.navigation}/> :
                  <View style={{flex:1}}>{this.state.a1==1? <ThongTinLichsu/>:<BaoMat/>}</View>}
                  
                </View>
            </View>
        );
    }
}