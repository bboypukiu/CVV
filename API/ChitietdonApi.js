import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Image,
  RefreshControl,
  TouchableHighlight,
  Text,
  ScrollView,
  Dimensions,
  FlatList,
  ActivityIndicator,
  Animated,
  Linking,
  Alert,
} from 'react-native';
import Icon from 'react-native-ionicons';

let x1 = Dimensions.get('window').width; // lay ra chiue rong cua man hinh

class ItemDonhang extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          borderRadius: 10,
          backgroundColor: 'white',
          marginTop: 12,
          padding: 10,
          borderBottomWidth: 0.4,
        }}>
        <TouchableHighlight>
          <View
            style={{
              flex: 1,
              width: x1,
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 15}}>Tên Shop :</Text>
              <Text style={{fontSize: 15}}> {this.props.ten}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 15}}>Địa Chỉ Shop :</Text>
              <Text style={{fontSize: 13}}>
                {' '}
                {this.props.diachi} {this.props.xa} {this.props.huyen}{' '}
                {this.props.tinh}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 15}}>SĐT Shop :</Text>
              <Text style={{fontSize: 15}}> {this.props.sdtshop}</Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

export default class ChitietdonApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      data: [],
      refreshControl: false,
    };
  }

  async chitiet() {
    const {
      orderId,
      tennguoinhan,
      sdtnguoinhan,
      diachinguoinan,
      tenshop,
      sdtshop,
      xa,
      huyen,
      tinh,
    } = this.props.route.params;
    const chitiet =
      'http://222.252.26.108:8889/api/app-shipper/order/detail?orderId=' +
      orderId;
    console.log(chitiet);
    if (orderId != '') {
      if (orderId == orderId) {
        fetch(chitiet, {
          methotd: 'GET',
          body: JSON.stringify({
            orderId: this.state.orderId,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }).then((response) => {
          return response.json();
        });
      }
    }
  }

  render() {
    const {
      orderId,
      tennguoinhan,
      sdtnguoinhan,
      diachinhan,
      tenshop,
      sdtshop,
      xa,
      huyen,
      tinh,
    } = this.props.route.params;
    return (
      <View>
        <ItemDonhang
          orderId={orderId}
          //người nhận
          tennguoinhan={tennguoinhan}
          sdtnguoinhan={sodtnguoinhan}
          diachinhan={item.diachinhan}
          // shop
          ten={ten}
          sdtshop={sdtshop}
          xa={xa}
          huyen={huyen}
          tinh={tinh}
        />
        ); } // <Itempu navigation={navigation} />
        }/>
        {this.state.isLoading ? <ActivityIndicator /> : <Text />}
        <View style={{position: 'absolute', bottom: 50, right: 50}}>
          {this.state.scrolltotop == true ? (
            <TouchableHighlight
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
            </TouchableHighlight>
          ) : (
            <View />
          )}
        </View>
      </View>
    );
  }
}
