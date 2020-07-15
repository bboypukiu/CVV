import React, {Component, useEffect, useState} from 'react';
import {
  View,
  TouchableHighlight,
  TextInput,
  Image,
  Text,
  ScrollView,
  Dimensions,
  FlatList,
  ActivityIndicator,
  Animated,
  Linking,
} from 'react-native';
import Icon from 'react-native-ionicons';
import CardView from 'react-native-cardview';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {macodedki} from '../../API/API.js';
let x1 = Dimensions.get('window').width;// lay ra chiue rong cua man hinh

export default class MacodeDki extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sodt: '',
      matkhau: '',
      smscode: '',
    };   
  }
  async macode() {
    // console.log('aa')
    const xacthuc = 'http://222.252.26.108:8889/user-m-service/shipper/verification-user?phoneNumber=' + this.props.phoneNumbe + '&code=' + this.props.code + '&password=' + this.props.password;
    console.log(xacthuc);
    const {sodt, matkhau, smscode} = this.state;
    //console.log(this.state.sodt +" "+ this.state.matkhau +" "+this.state.smscode);

    if (sodt != '' && matkhau != '' && smscode != '') {
      if (smscode == smscode) {
        fetch(xacthuc, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
          },

  });
        // this.props.natigation.navigate('register');
      } else {
        alert('Mã code sai vui lòng nhập lại ');

}
      } else {alert('Vui lòng nhập đúng mã code');};
    }
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 300,
        }}>
        <View>
          <Text>You receive a message, please enter the code here</Text>
          <Text>Bạn đã nhận được 1 mã code vui lòng nhập mã code vào đây</Text>
        </View>
        <OTPInputView
          style={{width: '80%', height: 100}}
          pinCount={6}
          // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          // onCodeChanged = {code => { this.setState({code})}}
          autoFocusOnLoad
          codeInputFieldStyle={{
            color: 'black',

            width: 30,
            height: 45,
            borderWidth: 1,
            borderBottomWidth: 3,
            borderColor: 'red',
          }}
          codeInputHighlightStyle={{borderColor: '#03DAC6'}}
          onCodeFilled={(code) => {
            console.log(`Code is ${code}, you are good to go!`);
          }}
        />
        <View
          style={{
            flex: 3,
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginTop: 5,
            marginRight: 5,
          }}>
          <TouchableHighlight
            onPress={() => {
              this.macode();
            }}
            style={{
              width: 200,
              borderRadius: 20,
              height: 35,
              backgroundColor: '#1aa3ff',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white'}}>OK</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
