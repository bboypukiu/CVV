import React,{Component} from 'react';
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  TextInput,RefreshControl,
  Button,ScrollView,
  TouchableHighlight,
  AsyncStorage,
  Alert
} from 'react-native';
import Icon from 'react-native-ionicons'
import {login,dangki,danhsachdonhang} from '../../API/API.js';
 export default class Login extends Component{
   
    constructor(props){
        super(props);
        this.state={
          sodt:'',
          password:'',
          isloading:false,
        }
    }

 
   async login(){
      if(this.state.sodt=='' || this.state.password=='') alert('Vui lòng điền đẩy đủ thông tin');
      if(this.state.sodt!='' && this.state.password!=''){

        this.setState({
          isloading:true,
        })
        try {
          await fetch('https://192.168.1.12:8889/user-m-service/shipper/register' )
            .then((response) => response.json())
            .then((responseData) => {
              if(responseData){
                 <FlatList
                 data={data}
                 keyExtractor = {({item}, index)=> item}
                 renderItem={({item}) => (
                 <Text>{item.fullname},{item.phone},{item.password},{item.address},{item.dateOfBirth}, </Text>
                 )}
                 ></FlatList>         
              }             
              console.log(responseData);
              
              if(responseData.message=='login fail'){
                alert('Đăng nhập không thành công')               
              }
                }).finally(() => {
                  this.setState({ isloading: false });
                });
            }catch (error) {
              alert(error +'dang nhap khong  dc')
            }

            
           
          }

     try {  //GET
       fetch('http://192.168.1.12:8889/user-m-service/shipper/register')  
      .then(res => res.json())
      .then(resJson => {
     return json.data;
      })
     } catch (error) {
       alert(error+'1');
     }

    }
    render(){
      return(
        
        <View style={{flex:1,flexDirection:'column',justifyContent:'flex-start',alignContent:'flex-start'}}>
          {this.state.isloading==true ?<View style={{position:'absolute',width:'100%',height:'100%',justifyContent:'center',alignItems:'center'}}><ActivityIndicator  /></View>:<View></View>}
        <ScrollView style={{flex:1}} >
           <View style={{flex:3,justifyContent:'center',alignItems:'center',marginTop:20}}>
               <Image 
               style={{width:200,height:150}}
               source={require('../Image/logologin.png') }/>
           </View>

           <View style={{flex:3.5,justifyContent:'center',alignItems:'center',marginTop:40}}>
               <View style={{alignItems:'flex-start'}}>
             
                <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',width:300,height:40,borderWidth:0.5,borderRadius:5,padding:10,marginBottom:30}}>
                 <Icon name='person-outline' size={20} />
                <TextInput
               style={{width:250,height:35,}}
                 placeholder='Số điện thoại'
                 keyboardType = 'numeric'
                 onChangeText={(text)=>{this.setState({sodt:text})}}  />
                </View>
               
                  <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',width:300,height:40,borderWidth:0.5,borderRadius:5,padding:10,marginBottom:5}}>
                 <Icon name='lock-closed' size={20} />                           
                 <TextInput
               style={{width:250,height:35}}
                 placeholder='Mật khẩu'
                 secureTextEntry={true}
                 onChangeText={(text)=>{this.setState({password:text})}} />
                </View>
               </View>
           </View>
           <View style={{flex:3,justifyContent:'flex-start',alignItems:'center',marginTop:20,marginBottom:40}}>
              <TouchableHighlight 
              onPress={()=>{this.login()}}
              style={{width:200,borderRadius:10,height:35,backgroundColor:'#1aa3ff',justifyContent:'center',alignItems:'center'}} >
                <Text style={{color:'white'}}>Đăng nhập</Text>
              </TouchableHighlight>
              <Text 
              onPress={()=>{this.props.navigation.navigate('forgotpassword')}}  style={{marginTop:5,color:'#1aa3ff',textDecorationLine:'underline'}}>Quên mật khẩu ?</Text>
           </View>
           <View style={{flex:1,justifyContent:'flex-start',alignItems:'center',marginTop:20}}>
            <TouchableHighlight
            underlayColor='#999966'
            onPress={()=>{this.props.navigation.navigate('register')}}
             style={{borderRadius:5,width:200,height:35,backgroundColor:'#cce6ff',justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'#000099'}}>Tạo mới tài khoản</Text>
            </TouchableHighlight>
           </View>
           </ScrollView>        
        </View>
        
      );
    }
  }
