
import React, { Component,useEffect, useState} from 'react';
import {View,Image,Text,ScrollView,Dimensions,FlatList,ActivityIndicator, Animated,Linking} from 'react-native';
export default Information = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
      
    fetch('http://192.168.1.12:8889/api/shipment/findShipmentTrackingDetail?orderId=626')
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
            <Text>{item.status},
             {item.shippingFromName},
             {item.shippingFromAddress},
             {item.shippingFromAddress},
             {item.shippingFromAddress},
             {item.shippingFromPhone},
             {item.shippingFromProvince},
             {item.shippingFromDistrict},
             {item.shippingFromStreet},
  
           </Text>// item. ltinh trong dong bui nhui
          )}
        />
      )}
    </View>
  );
};
