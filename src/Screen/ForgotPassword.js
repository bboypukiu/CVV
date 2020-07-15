import React, {Component} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableHighlight,
  StyleSheet,
  Dimensions,
  AsyncStorage,
  Button,
} from 'react-native';
import CardView from 'react-native-cardview';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-ionicons';
import {datlaimatkhau} from '../../API/API.js';
import ForgotPasswordAPI from '../../API/ForgotPasswordApi.js';
let x1 = Dimensions.get('window').width;
export default class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: null,
      isloading: false,
      sodt: '',
    };
  }
  guitinnhan() {
    console.log('aa');

    // this.setState{{loadingVisible: true}
    //if(this.state.sodt) alert('Vui lòng nhập đúng sdt');
    if (this.state.sodt != '') {
      // this.props.natigation.navigate("xacthucCN",{
      //   sodt:''
      //})
      this.setState({
        isloading: true,
      });
      fetch(datlaimatkhau, {
        method: 'GET',
        body: JSON.stringify({
          phone: this.state.sodt,
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      //this.props.natigation.navigate('login');
    } else {
      alert('Vui lòng nhap dung so dien thoai');
    }
  }
  render() {
    return <ForgotPasswordAPI navigation={this.props.navigation} />;
  }
}
