
// import React,{Component} from 'react';
// import {AppRegistry,ActivityIndicator, ListView,Text,View} from 'react-native'
// export default class ChiTietDon extends Component{
//     constructor(props){
//         super(props);
//         this.state= {
//             isLoading:true,
//             clonedMovies: []
//         }

//     }
//     componentDidMount(){
//         console.log(111111)
//         fetch('http://192.168.1.12:8889/api/app-shipper/shipment/findShipmentTracking?statusId=1')
//         .then ((response) => response.json()) 
//         .then  ((responseJson)=> {
//             var  standarDataSource = new ListView.dataSource({rowHasChanged:(r1,r2) => r1 !== r2});
//             console.log(responseJson);

//             this.setState({
//                 isLoading: false,
//                 clonedMovies: standarDataSource.cloneWithRows(responseJson.movies)
//             });
//         }).catch((error) => {
//             console.error(error, 11111111);
//         }); 
   
//     }
//     render(){
        
// if(this.state.isLoading){
//   return (
//       <View>
//       <ActivityIndicator/>
      
//       </View>
//   )  
// }
//         return (
//             <View style={{flex: 1, paddingTop: 25}}>
//             <ListView
      
//             ></ListView>
//             </View>
            
//         );
//     }
// }
// AppRegistry.registerComponent (' example of', () => ChiTietDon);

import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
     
    fetch('http://192.168.1.12:8889/api/app-shipper/shipment/findShipmentTracking?statusId=1')
      .then((response) => response.json())
      .then((json) => setData(json.movies))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.title}, {item.releaseYear}</Text>
          )}
        />
      )}
    </View>
  );
};