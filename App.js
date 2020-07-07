/**
 *Pik K Puuu
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';
import {
  View,
  Text,
  AsyncStorage,
} from 'react-native';
import Login from './src/Screen/Login';
import Register from './src/Screen/Register';
import { NavigationContainer } from '@react-navigation/native'; //stack naviagtion
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './src/Screen/Slpash';
import Home from './src/Screen/Home';
import ForgotPassword from './src/Screen/ForgotPassword';
import Xacthuc from './src/Screen/Macodedki';
console.disableYellowBox = true;

function Login1({navigation}){ //login
  return(
    <Login navigation={navigation}/>
  );
}
function Register1({navigation}){//dang ki
  return(
    <Register navigation={navigation} />
  );
}
function Xacthuc1({naviagtion,route}){
  const {phoneNumber,code,password}= route.params;
  return(
    <Xacthuc naviagtion={naviagtion} code={code} pass={password} phoneNumbe={phoneNumber}/>
  );
}
function Home1({navigation}){
  return(
    <Home navigation1={navigation}/>
  );
}
function ForgotPassword1({navigation}){//quên mật khẩu
  return(
    <ForgotPassword navigation={navigation} />
  );
}
const Stack = createStackNavigator();


export default class App extends Component{
  constructor(props){
    super(props);
    this.state={
      splash: true,
      datalocal:'',
    };

    this.getdataLocal();
    setTimeout(() => {
      //if(this.state.datalocal !=''){
      this.setState({
        splash: false,
      });
      // }
    }, 2500);
  }

  //doc du lieu luu tru trang thai dang nhap login password
  getdataLocal = async () => {
    try {
      const value = await AsyncStorage.getItem('statelogin3');
      const value1=JSON.parse(value);
     // console.log(value1.sodt);     
      if (value1.sodt !== null) {
        // We have data!!
        // console.log(value);
        this.setState({
          datalocal: value,
        });
      }
    } catch (error) {
    }
  };

  manhinhlogin() { // khi  k co data se vao Login
    return(
     <NavigationContainer>
     <Stack.Navigator initialRouteName='login'>
     <Stack.Screen  options={{headerShown:false,}} name="home" component={Home} />
       <Stack.Screen options={{
         headerShown:false,
       }} name="login" component={Login1} />
       <Stack.Screen options={{headerShown:false,}} name="register" component={Register1} />   
       <Stack.Screen options={{headerShown:false,}} name="forgotpassword" component={ForgotPassword1}/>
         <Stack.Screen options={{headerShown:false,}} name="xacthuc" component={Xacthuc1} />    
     </Stack.Navigator>
   </NavigationContainer>
    )
 }
   manhinhHome() { // khi co data se vao luon hame
     return(
      <NavigationContainer>
      <Stack.Navigator initialRouteName='home'>
      <Stack.Screen  options={{headerShown:false,}} name="home" component={Home1} />
        <Stack.Screen options={{
          headerShown:false,
        }} name="login" component={Login1} />
        <Stack.Screen options={{headerShown:false,}} name="register" component={Register1} />      
        <Stack.Screen options={{headerShown:false,}} name="forgotpassword" component={ForgotPassword1}/>
      </Stack.Navigator>
    </NavigationContainer>
     )
  }
   render(){
    let goTab =
    this.state.datalocal == '' ? (
    this.manhinhlogin()
    ) : (
      this.manhinhHome()
    );
  let test = this.state.splash == true ? <Splash /> : goTab;
  return test;

   }
 }
export {Stack};
