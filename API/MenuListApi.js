import React, { Component, useEffect, useState   } from 'react';
import { View,Text,Image ,AsyncStorage,Dimensions,TextInput,ScrollView,Linking,ActivityIndicator} from 'react-native';
import Icon from 'react-native-ionicons';
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';


import {Picker} from '@react-native-community/picker';

let x1=Dimensions.get('window').width;// lay ra chieu rong cua man hinh

export default MenuListApi = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
      
    fetch('https://192.168.1.12/api/app-shipper/order/updateShipper?shipmentId=')
    //fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json()) // pare response trả về thành json
       .then((json) => {
       console.log(json)
            setLoading(false)
            //setData(json.data)
            setData(json.movies)
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
            <Text>{item.created}, {item.status}, 
           {/*<Text> { item.movies}*/}
            </Text>
           // item. ltinh trong dong bui nhui
          )}
        />
      )}
    </View>
  );
};