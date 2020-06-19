import React, { Component } from 'react';
import { View,Text,Image,Button,TouchableHighlight ,AsyncStorage,Dimensions,TextInput,ScrollView,Linking} from 'react-native';
import Icon from 'react-native-ionicons';
import Information from '../Screen/Information'
let x1=Dimensions.get('window').width;// lay ra chiue rong cua man hinh
class Thongtin extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
         
            <View style={{flex:1,flexDirection:'column',alignItems:'center',justifyContent:'flex-start',margin:10}}>
        
                <Text style={{fontWeight:'700',fontSize:16}}>Thông tin tài khoản</Text>
                <View style={{width:x1*0.8,flexDirection:'row',alignItems:'center'}}>
                    <Icon name='person-circle-outline' size={28} color='#669999'/>
           
 
                </View>
 
            </View>
         
        );
        
    }
}


class CapnhatThongtin extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center',marginTop:10}}>
                <ScrollView style={{flex:1,}}>
                <Text style={{fontWeight:'700',fontSize:16}}>Cập nhật thông tin cá nhân</Text>
                <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center',marginTop:10}}>
             
                    <View style={{flexDirection:'column',justifyContent:'center',marginRight:10,marginBottom:10}}>                        
                    <Text>Tên tài khoản</Text>
                        <TextInput style={{width:x1/1.3,height:35,borderWidth:0.5,
                        borderRadius:12,padding:10,
                      
                    }}
                         placeholder='tên tài khoản' />                       
                    </View>

                    <View style={{flexDirection:'column',justifyContent:'center',marginBottom:10}}>                        
                    <Text>Số điện thoại</Text>
                        <TextInput style={{width:x1/1.3,height:35,padding:10,borderWidth:0.5,borderRadius:12}}
                         placeholder='tên tài khoản' />                       
                    </View>
                

               
                    <View style={{flexDirection:'column',justifyContent:'center',marginRight:10,marginBottom:10}}>                        
                    <Text>Ngày sinh</Text>
                        <TextInput style={{width:x1/1.3,height:35,padding:10,borderWidth:0.5,borderRadius:12}}
                         placeholder='Ngày sinh' />                       
                    </View>

                    <View style={{flexDirection:'column',justifyContent:'center',marginBottom:10}}>                        
                    <Text>Nơi ở hiện tại</Text>
                        <TextInput style={{width:x1/1.3,height:35,padding:10,borderWidth:0.5,borderRadius:12}}
                         placeholder='Nơi ở hiện tại' />                       
                    </View>

                    <TouchableHighlight style={{width:100,height:40,marginBottom:10,borderRadius:10,shadowColor: "#ff3300",
                        shadowOffset: {
                            width: 0,
                            height: 1,
                        },
                        shadowOpacity: 0.23,
                        shadowRadius: 2.32,
                        elevation: 4,
                        backgroundColor:'#669999',justifyContent:'center',alignItems:'center',}}>
                        <Text style={{color:'white'}}> Cập nhật</Text>
                    </TouchableHighlight>
                    </View>
                    </ScrollView>
            </View>
        );
    }
}


class BaoMat extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontWeight:'700',fontSize:16,marginBottom:10}}>Thay đổi mật khẩu </Text>
               <View style={{flexDirection:'row',width:220,height:35,borderWidth:0.5,marginBottom:20,
                        borderRadius:5,padding:10,alignItems:'center',justifyContent:'center'}}>
                   <Icon name='key-sharp' size={20} color='#006699'/>
                   <TextInput
                   style={{width:200,height:35}}
                    placeholder='Nhập mật khẩu cũ'/>
               </View>

               <View style={{flexDirection:'row',width:220,height:35,borderWidth:0.5,marginBottom:20,
                        borderRadius:5,padding:10,alignItems:'center',justifyContent:'center'}}>
                   <Icon name='lock-closed-sharp' size={20} color='#006600'/>
                   <TextInput
                   secureTextEntry={true} style={{width:200,height:35}}
                    placeholder='Nhập mật khẩu mới'/>
               </View>

               <View style={{flexDirection:'row',width:220,height:35,borderWidth:0.5,marginBottom:20,
                        borderRadius:5,padding:10,alignItems:'center',justifyContent:'center'}}>
                   <Icon name='lock-closed-sharp' size={20} color='#006600'/>
                   <TextInput
                   secureTextEntry={true} style={{width:200,height:35}}
                    placeholder='Nhập lại mật khẩu mới'/>
               </View>
               
               <Button title='Cập nhật' color='#006699' />
               {/* <Text 
              onPress={()=>{}}  style={{marginTop:5,color:'#1aa3ff',textDecorationLine:'underline'}}>Quên mật khẩu ?</Text>
   */}
               

            </View>
        );
    }
}
class Top extends Component{
    constructor(props){
        super(props);
        this.state={
            pickcolorThongtin:'#ccff66',
            pickcolorcapnhatThongtin:'white',
            pickcolorbaomat:'white',
           
        }
    }

    geta1(){
        return this.state.a1;      
    }
   
    pick(a){

        if(a==0){this.setState({pickcolorThongtin:'#ccff66',pickcolorcapnhatThongtin:'white',pickcolorbaomat:'white',}); }
        if(a==1){this.setState({pickcolorThongtin:'white',pickcolorcapnhatThongtin:'#ccff66',pickcolorbaomat:'white',});}
        if(a==2){this.setState({pickcolorThongtin:'white',pickcolorcapnhatThongtin:'white',pickcolorbaomat:'#ccff66',});}
        this.props.parent.setState({a1:a,});
  
    }

    render(){
        return(
            <View style={{flexDirection:'column',justifyContent:'flex-start',backgroundColor:'#669999',alignItems:'center',marginTop:10}}>
                   <View style={{flexDirection:'row',justifyContent:'flex-end',alignSelf:'flex-end'}}>
                  
                  <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
                  <Image
                         style={{width:70,height:70,marginTop:10,borderRadius:35}}
                         source={{uri:'https://scontent.fhan3-3.fna.fbcdn.net/v/t1.0-9/69274800_687532738433940_7394291932463104000_n.jpg?_nc_cat=101&_nc_sid=85a577&_nc_ohc=yeiWRUfQhj4AX9dKOgl&_nc_ht=scontent.fhan3-3.fna&oh=c86c9a7e1314a9eca72b77e3fa19208d&oe=5EDFA3A0'}} />           
                         <Text style={{marginTop:5,color:'white',marginBottom:17}}>The Flash</Text>
                  </View>
                        <TouchableHighlight
                        style={{position:'absolute',margin:5,}}
                         underlayColor='#669999' 
                        onPress={()=>{this.props.navigation.reset({
                                index: 0,
                                routes: [{ name: 'login' }],
                            });
                            this.props.parent.xoadata();}}>
                            <View style={{justifyContent:'center',alignItems:'center'}}>
                           <Image source={require('../Image/logout.png')} style={{width:30,height:30}} />
                            <Text style={{fontSize:10,color:'white'}}>Đăng suất</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
               
                <View style={{flexDirection:'row',width:'100%',
                     justifyContent:'space-evenly',alignItems:'center'}}>
                         <View style={{flexDirection:'column',alignItems:'center'}}>
                             <TouchableHighlight underlayColor='#669999' onPress={()=>{this.pick(0)}}>
                             <Image  style={{width:50,height:50,backgroundColor:this.state.pickcolorThongtin,borderRadius:25}}
                             source={require('../Image/logologin.png')} />
                             </TouchableHighlight>
                             <Text style={{color:'white',marginTop:5}}>Thông tin</Text>
                         </View>

                         <View style={{flexDirection:'column', alignItems:'center'}}>
                         <TouchableHighlight underlayColor='#669999' onPress={()=>{this.pick(1)}}>
                             <Image  style={{width:50,height:50,backgroundColor:this.state.pickcolorcapnhatThongtin,borderRadius:25}}
                             source={require('../Image/profile.png')} />
                             </TouchableHighlight>
                             <Text style={{color:'white',marginTop:5}}> Cập nhật thông tin</Text>
                         </View>
                         <View style={{flexDirection:'column',alignItems:'center'}}>
                         <TouchableHighlight underlayColor='#669999' onPress={()=>{this.pick(2)}}>
                             <Image  style={{width:50,height:50,backgroundColor:this.state.pickcolorbaomat,borderRadius:25}}
                             source={require('../Image/baomat.png')} />
                             </TouchableHighlight>
                             <Text style={{color:'white',marginTop:5}}>Bảo mật</Text>
                         </View>
                        
                </View>
            </View>
        );
    }
}
class Hoso extends Component {
    constructor(props){
        super(props);
        this.state={
            a1:0,
        };      
    }

    xoadata(){
        console.log('xoa');
        
        AsyncStorage.removeItem('statelogin3');
    }
 

    render() {
       
        return (
            
            <View style={{flex:1, backgroundColor:'#669999'}}>
                <View 
                style={{flex:4/10,
                    width:'100%',
                    justifyContent:'flex-start',
                    alignItems:'center',
                    backgroundColor:'#669999'
                }}>
                    <Top ref='top' parent={this} navigation={this.props.navigation}/>
                </View>

                <View 
                style={{flex:6.5/10,
                    width:'100%',
                    backgroundColor:'white',
                    borderTopEndRadius:20,
                    borderTopLeftRadius:20,                                       
                }}>                   
                    
                  {this.state.a1==0 ? <Thongtin parent={this} navigation={this.props.navigation}/> :<View style={{flex:1}}>{this.state.a1==1? <CapnhatThongtin/>:<BaoMat/>}</View>}
                  
                </View>
            </View>
        );
    }
}

export default Hoso;