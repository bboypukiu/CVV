import React,{Component} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableHighlight,
} from 'react-native';

 export default class Login extends Component{
    constructor(props){
        super(props);
        this.state={
          hovaten:'',
          noio:'',
          sodt:'',
          ngaysinh:'',
          matkhau:'',
          nhaplaimk:'',

        }
        
    }

    register(){
      const {hovaten,sodt,noio,ngaysinh,matkhau,nhaplaimk}=this.state;
      if(hovaten!='' &&ngaysinh !='' &&sodt!=''&& noio!=''  &&matkhau!='' &&nhaplaimk!='') {
        if(matkhau==nhaplaimk){// dang ki tai khoan len server
          this.props.navigation.navigate('login');
        }
        else {alert('Mật khẩu bạn nhập không khớp')}
      }
      else{
        alert('Vui lòng nhập đầy đủ thông tin');
      }
    }
    render(){
      return(
        <View style={{flex:1,flexDirection:'column',justifyContent:'flex-start',alignContent:'flex-start'}}>    
          <ScrollView>      
        <View style={{flex:3,justifyContent:'flex-start',alignItems:'center',marginTop:10}}>
            <Image 
            style={{width:200,height:150,}}
            source={require('../Image/profile.png') }/>
        </View>
          
        <View style={{flex:5,justifyContent:'center',marginBottom:20,alignItems:'center'}}>
            <View style={{alignItems:'flex-start'}}>
            <Text style={{fontWeight:'700',marginBottom:5}}>Họ và tên </Text>
            <TextInput
            style={{width:300,height:35,borderWidth:0.5,borderRadius:5,padding:10,marginBottom:5}}
              placeholder='Họ và tên'
           
              onChangeText={(text)=>{this.setState({hovaten:text})}}  />
              <Text style={{fontWeight:'700',marginBottom:5}}>Ngày sinh </Text>
            <TextInput
            style={{width:300,height:35,borderWidth:0.5,borderRadius:5,padding:10,marginBottom:5}}
              placeholder='Ngày tháng năm sinh'
              keyboardType = 'numeric'
              onChangeText={(text)=>{this.setState({ngaysinh:text})}}  />
            <Text style={{fontWeight:'700',marginBottom:5}}>Số điện thoại</Text>
            <TextInput
            style={{width:300,height:35,borderWidth:0.5,borderRadius:5,padding:10,marginBottom:5}}
              placeholder='Số điện thoại'
              keyboardType = 'numeric'
              onChangeText={(text)=>{this.setState({sodt:text})}}  />

            <Text style={{fontWeight:'700',marginBottom:5}}>Nơi ở hiện tại </Text>
            <TextInput
            style={{width:300,height:35,borderWidth:0.5,borderRadius:5,padding:10,marginBottom:5}}
              placeholder='Nơi ở hiện tại'             
              onChangeText={(text)=>{this.setState({noio:text})}}  />
               <Text style={{fontWeight:'700',marginBottom:5}}>Mật khẩu</Text>
            <TextInput
            style={{width:300,height:35,borderWidth:0.5,borderRadius:5,padding:10,marginBottom:5}}
              placeholder='Mật khẩu'
              secureTextEntry={true}
              onChangeText={(text)=>{this.setState({matkhau:text})}} />
               <Text style={{fontWeight:'700',marginBottom:5}}>Nhập lại mật khẩu</Text>
            <TextInput
            style={{width:300,height:35,borderWidth:0.5,borderRadius:5,padding:10}}
              placeholder='Nhập lại mật khẩu'
              secureTextEntry={true}
              onChangeText={(text)=>{this.setState({nhaplaimk:text})}} />
            </View>
        </View>
        <View style={{flex:3,marginTop:5,justifyContent:'center',alignItems:'center'}}>
           <TouchableHighlight 
           onPress={()=>{this.register()}}
           style={{width:200,borderRadius:10,height:35,marginTop:10,backgroundColor:'#009933',justifyContent:'center',alignItems:'center'}} >
             <Text style={{color:'white'}}>Đăng kí</Text>
           </TouchableHighlight>
                </View>
                </ScrollView>
     
     </View>
      );
    }
  }
