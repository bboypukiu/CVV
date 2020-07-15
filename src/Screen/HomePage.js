import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  Dimensions,
  FlatList,
  ActivityIndicator,
  Animated,
  Linking,
} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import Icon from 'react-native-ionicons';
import PTRView from 'react-native-pull-to-refresh';
import HomePageAPI from '../../API/HomePageApi.js';
//import {API} from '../../API/API.js'
//import {danhsachdonhang} from '../../API/API.js';
let x1 = Dimensions.get('window').width;// lay ra chiue rong cua man hinh
class Trangchu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolltotop: false,
      loaddata: false,
      danhsachdonhang: [],
    };
  }

  toTop() {
    // use current
    this.refs.flatlis.scrollToOffset({animated: true, offset: 0});
    console.log(this.refs.flatlis.index + '');

    }
  _refresh() {
    // ham nay de refresh du lieu moi
    console.log('dang tai dl');

    }
  onRefresh() {
    // tai du lieu
    this.setState({loaddata: false});
    alert('dang tai du lieu');
  }

  render() {
    return (
        <View style={{flex:1}}>
         <View style={{
                flex: 0.8,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#669999',
                }}></View>
          <Text style={{color: 'white', fontSize: 20}}>Đơn hàng mới</Text>
        <View style={{
            flex:7,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#eaeae1'
                 }} >
          <HomePageAPI navigation={this.props.navigation}></HomePageAPI>

        </View>

        <View style={{position: 'absolute', bottom: 50, right: 50}}>
            {this.state.scrolltotop == true ?
                (<TouchableHighlight
              underlayColor=""
              style={{
                alignItems: 'center',
                width: 50,
                height: 50,
                justifyContent: 'center',
              }}
              onPress={() => {
                this.toTop();
              }}>
              <Icon name="arrow-up-circle-outline" size={40} color="green" />
            </TouchableHighlight>)
          : (<View></View>)
          }
        </View>
      </View>
    );
  }
}

export default Trangchu;
