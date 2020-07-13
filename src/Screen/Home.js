import React, { Component } from 'react';
// import {Stack} from '../../App.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage1 from './HomePage';
import Icon from 'react-native-ionicons'
import {GetAllFoodsServer} from '../../API/API.js'

import ChitietDon from './Chitietdonhang/ChitietDon';
import MapView, { AnimatedRegion,PROVIDER_GOOGLE } from 'react-native-maps'; 
import GetLocation from 'react-native-get-location'
import Map1 from './Map';
import DanhSachDonNhan from './MenuList';
import {
    View,
    Text,
    Image,
    Dimensions,
    TextInput,
    Button,
    TouchableHighlight,
    AsyncStorage
  } from 'react-native';

  import File1 from'./File';
  function Donmoi({navigation}) {
    return (
      <HomePage1 navigation={navigation} />
    );
  }


  function Map({route,navigation})   {
    if(route.params){
    const { latitude } = route.params;
  const { longitude } = route.params; 
      return(<Map1 navigation={navigation} latitude1={latitude} longitude1={longitude} />);
    }
    
    else{
      return(<Map1 navigation={navigation}  />);
    }
  }
  function Luu({navigation}) {
    return (
      <DanhSachDonNhan navigation={navigation} />
    );
  }
  function Canhan({navigation}) {
    return (
         <File1 navigation={navigation} />
    );
  }

  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  function ChitietDonhang({route, navigation}) {
    return (
         <ChitietDon navigation={navigation} />
    );
  }


  

  function TabBottom() {
    return (
   
        <Tab.Navigator 
        tabBarOptions={{
          activeTintColor: '#006666',
          inactiveTintColor: 'gray',
        }}>
          <Tab.Screen 
          options={{
            title:'trang chủ',
            tabBarIcon: ({color}) => {
              return (
                <View>
                   <Icon  name='home-outline'  color={color} size={23} />
                </View>
              );
            }
        }}
           name="Home" component={Donmoi} />

          <Tab.Screen options={{
             title:'Bản đồ',
             tabBarIcon: ({color}) => {
              return (
                <View>
                   <Icon  name='navigate-outline'  color={color} size={23} />
                </View>
              );
            }
           }}  name='map' component={Map}/>
          <Tab.Screen options={{
            title:'Đơn hàng',
               tabBarIcon: ({color}) => {
                return (
                  <View>
                     <Icon  name='newspaper-outline'  color={color} size={23} />
                  </View>
                );
              }
          }} name="luu" component={DanhSachDonNhan} />
          <Tab.Screen
           options={{
             title:'Hồ sơ',
            tabBarIcon: ({color}) => {
             return (
               <View>
                  <Icon  name='person-circle-outline'  color={color} size={23} />
               </View>
             );
           }
       }} 
           name="canhan" component={Canhan} />
         
        </Tab.Navigator>
  
    );
  }
class Home extends Component {
    constructor(props){
        super(props);

    }

    xoadata(){
        console.log('xoa');
        
        AsyncStorage.removeItem('statelogin3');
    }
    componentDidMount(){
    //  this.xoadata();
    
    }

    render() {
        return (
            // <NavigationContainer independent={true}>
            <Stack.Navigator>
            <Stack.Screen options={{headerShown:false,}} name="register" component={TabBottom} />
            <Stack.Screen options={{title:'Chi tiết đơn hàng'}} name="Chitietdon" component={ChitietDonhang} />         
            </Stack.Navigator>
          // </NavigationContainer>
          
        );
    }
    
    
}


export default Home