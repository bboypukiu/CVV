import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  Button,
  TouchableHighlight,
  AsyncStorage,
  Dimensions,
  ScrollView,
  Linking,
} from 'react-native';
import Icon from 'react-native-ionicons';
import Information from './Information';
import CardView from 'react-native-cardview';

import {doimatkhau, capnhap} from '../../API/API.js';
let x1 = Dimensions.get('window').width;// lay ra chiue rong cua man hinh
import {TextInput} from 'react-native-gesture-handler';
class Thongtin1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          margin: 10,
        }}>
        <Information ref="refs" parent={this} />
      </View>

        );

    }
}

class CapnhatThongtin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sodt: '',
      tentk: '',
      macode: '',
      dateOfbirth: '',
      isloading: false,
    };

}
  async capnhap() {
    console.log('11', capnhap);
    if (this.state.sodt == '' || this.state.tentk == '' || this.state.dateOfbirth == '') {alert('Vui lòng nhập đúng thông tin ');}
    if (
      this.state.sodt != '' &&
      this.state.tentk != '' &&
      this.state.dateOfbirth != ''
    ) {
      this.setState({
        isloading: true,
      });
      await fetch(capnhap, {
        method: 'PUT',
        body: JSON.stringify({
          name: this.state.tentk,
          phone: this.state.sodt,
          birthday: this.state.dateOfbirth,


                    }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }).then((response) => {
        return response.json();
      });
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
          marginTop: 10,
        }}>
        <ScrollView style={{flex: 1}}>
          <Text style={{fontWeight: '700', fontSize: 16}}>
            Cập nhật thông tin cá nhân
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
            }}>

            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                marginRight: 10,
                marginBottom: 10,
              }}>
              <Text>Tên tài khoản</Text>
              <TextInput
                style={{
                  width: x1 / 1.3,
                  height: 35,
                  padding: 10,
                  borderWidth: 0.5,
                  borderRadius: 12,
                }}
                placeholder="Tên Tài Khoản"
                keyboardType="text"
                onChangeText={(text) => {
                  this.setState({tentk: text});
                }}
              />
            </View>
          </View>

            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                marginRight: 10,
                marginBottom: 10,
              }}>
              <Text>Số điện thoại</Text>
              <TextInput
                style={{
                  width: x1 / 1.3,
                  height: 35,
                  padding: 10,
                  borderWidth: 0.5,
                  borderRadius: 12,
                }}
                placeholder="Số điện thoại"
                keyboardType="numeric"
                onChangeText={(text) => {
                  this.setState({sodt: text});
                }}
              />
            </View>

            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                marginRight: 10,
                marginBottom: 10,
              }}>
              <Text>Ngày sinh</Text>
              <TextInput
                style={{
                  width: x1 / 1.3,
                  height: 35,
                  padding: 10,
                  borderWidth: 0.5,
                  borderRadius: 12,
                }}
                placeholder="ngay sinh"
                keyboardType="numeric"
                onChangeText={(text) => {
                  this.setState({dateOfbirth: text});
                }}
              />
            </View>
            <TouchableHighlight
              onPress={() => {
                this.capnhap();
              }}
              //onPress={()=>{this.capnhap()}}
              style={{
                width: 200,
                borderRadius: 10,
                height: 35,
                backgroundColor: '#1aa3ff',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white'}}>Cập nhập</Text>
            </TouchableHighlight>
          </View>
        </ScrollView>
      </View>
    );
  }
}
//http://192.168.1.12:8889/ user-m-service/user/change-password

class BaoMat extends Component {
  // đổi mật khẩu
  constructor(props) {

        super(props);
    this.state = {
      oldPassword: '',
      newPassword: '',
      isloading: false,

        };
  }

 laytoken = async ()=> {
    var a = '';
    try {
      a = await AsyncStorage.getItem('ACCESS_TOKEN');
      return a;
      // We have data!!
      console.log('Laytoken', a);

  } catch (error) {
      console.log('sai');
      // Error retrieving data
    }

}
  baomat = async () => {
    console.log('a1');
    const {oldPassword, newPassword} = this.state;
    var a = await AsyncStorage.getItem('ACCESS_TOKEN');
    console.log(a + 'baomat');
    // console.log(this.state.oldPassword+''+this.state.newPassword)
    // if(this.state.oldPassword==''|| this.state.newPassword=='') alert('Vui lòng nhập đúng mật khẩu');

    if (this.state.oldPassword != '' && this.state.newPassword != '') {
      // đổi mật khẩu
      console.log('1111', newPassword);
      var response = await fetch(doimatkhau, {
        method: 'PUT',
        body: JSON.stringify({
          oldPassword: this.state.oldPassword,
          newPassword: this.state.newPassword,
        }),
        headers: {
          'Content-Type': 'application',
          ACCESS_TOKEN: 'Bearer ' + (await this.laytoken()),
        },
      })
        .then((response) => response.json())
        .then((json) => json)
        .catch((error) => {
          console.error(error);
          alert('cập nhập bị lỗi');
          return null;
        });

        } else {
      alert('Vui lòng nhập đủ thông tin');
    }
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontWeight: '700', fontSize: 16, marginBottom: 10}}>
          Thay đổi mật khẩu{' '}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            width: 220,
            height: 35,
            borderWidth: 0.5,
            marginBottom: 20,
            borderRadius: 5,
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon name="key-sharp" size={20} color="#006699" />
          <TextInput
            style={{width: 200, height: 35}}
            placeholder="Nhập Mật Khẩu Cũ"
            keyboardType="numeric"
            onChangeText={(text) => {
              this.setState({oldPassword: text});
            }}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            width: 220,
            height: 35,
            borderWidth: 0.5,
            marginBottom: 20,
            borderRadius: 5,
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon name="lock-closed-sharp" size={20} color="#006600" />
          <TextInput
            style={{width: 200, height: 35}}
            placeholder="Nhập Mật Khẩu Mới"
            keyboardType="numeric"
            onChangeText={(text) => {
              this.setState({newPassword: text});
            }}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            width: 220,
            height: 35,
            borderWidth: 0.5,
            marginBottom: 20,
            borderRadius: 5,
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon name="lock-closed-sharp" size={20} color="#006600" />
          <TextInput
            style={{width: 200, height: 35}}
            placeholder="Nhập Mật Khẩu Mới"
            keyboardType="numeric"
            onChangeText={(text) => {
              this.setState({newPassword: text});
            }}

        </View>

        <TouchableHighlight
          onPress={() => {
            this.baomat();
          }}
          onPress={this.baomat}
          style={{
            width: 200,
            borderRadius: 10,
            height: 35,
            backgroundColor: '#1aa3ff',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white'}}>Cập nhập</Text>
        </TouchableHighlight>


      {this.state.isLoading ? <ActivityIndicator/> : (
        ) : (
          <Text></Text> // item. ltinh tron
        )}
      </View>
    );
  }
}
class Top extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pickcolorThongtin: '#ccff66',
      pickcolorcapnhatThongtin: 'white',
      pickcolorbaomat: 'white',

        };
  }

  geta1() {
    return this.state.a1;
  }

  pick(a) {
    if (a == 0) {
      this.setState({
        pickcolorThongtin: '#ccff66',
        pickcolorcapnhatThongtin: 'white',
        pickcolorbaomat: 'white',
      });
    }
    if (a == 1) {
      this.setState({
        pickcolorThongtin: 'white',
        pickcolorcapnhatThongtin: '#ccff66',
        pickcolorbaomat: 'white',
      });
    }
    if (a == 2) {
      this.setState({
        pickcolorThongtin: 'white',
        pickcolorcapnhatThongtin: 'white',
        pickcolorbaomat: '#ccff66',
      });
    }
    this.props.parent.setState({a1: a});

    }

  render() {
    return (
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'flex-start',
          backgroundColor: '#669999',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignSelf: 'flex-end',

                  <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
            <Image
              style={{width: 70, height: 70, marginTop: 10, borderRadius: 35}}
              source={{
                uri:
                  'https://scontent.fhan3-3.fna.fbcdn.net/v/t1.0-9/69274800_687532738433940_7394291932463104000_n.jpg?_nc_cat=101&_nc_sid=85a577&_nc_ohc=yeiWRUfQhj4AX9dKOgl&_nc_ht=scontent.fhan3-3.fna&oh=c86c9a7e1314a9eca72b77e3fa19208d&oe=5EDFA3A0',
              }}
            />
            <Text style={{marginTop: 5, color: 'white', marginBottom: 17}}>
              {this.props.data.shippingFromName}
            </Text>
          </View>
          <TouchableHighlight
            style={{position: 'absolute', margin: 5}}
            underlayColor="#669999"
            onPress={() => {
              this.props.navigation.reset({
                index: 0,
                routes: [{name: 'login'}],
              });
              this.props.parent.xoadata();
            }}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={require('../Image/logout.png')}
                style={{width: 30, height: 30}}
              />
              <Text style={{fontSize: 10, color: 'white'}}>Đăng suất</Text>
            </View>
          </TouchableHighlight>
        </View>


                <View style={{flexDirection:'row',width:'100%',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <TouchableHighlight
              underlayColor="#669999"
              onPress={() => {
                this.pick(0);
              }}>
              <Image
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: this.state.pickcolorThongtin,
                  borderRadius: 25,
                }}
                source={require('../Image/logologin.png')}
              />
            </TouchableHighlight>
            <Text style={{color: 'white', marginTop: 5}}>Thông tin</Text>
          </View>

          <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <TouchableHighlight
              underlayColor="#669999"
              onPress={() => {
                this.pick(1);
              }}>
              <Image
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: this.state.pickcolorcapnhatThongtin,
                  borderRadius: 25,
                }}
                source={require('../Image/profile.png')}
              />
            </TouchableHighlight>
            <Text style={{color: 'white', marginTop: 5}}>
              {' '}
              Cập nhật thông tin
            </Text>
          </View>
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <TouchableHighlight
              underlayColor="#669999"
              onPress={() => {
                this.pick(2);
              }}>
              <Image
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: this.state.pickcolorbaomat,
                  borderRadius: 25,
                }}
                source={require('../Image/baomat.png')}
              />
            </TouchableHighlight>
            <Text style={{color: 'white', marginTop: 5}}>Bảo mật</Text>
          </View>

                </View>
      </View>
    );
  }
}
class Hoso extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      a1: 0,
    };
  }

  xoadata() {
    console.log('xoa');

    AsyncStorage.removeItem('statelogin3');
  }

  componentDidMount() {
    this.loaddt(); //console.log( this.props.parent.state.name+" 111");
  }
  loaddt() {

   // fetch('http://222.252.26.108:8889/api/shipment/findShipmentTrackingDetail?orderId=626')
    fetch(
      'http://192.168.1.12:8889/api/shipment/findShipmentTrackingDetail?orderId=626',
    )
      .then((response) => response.json())
      .then((json) => {

       this.setState({
          data: json.data,
        });

        //console.log(this.state.data.status)
        //setData(json.movies)
      }) // response trả ve data
      .catch((error) => console.error(error))
      .finally(() =>
        this.setState({
          isLoading: false,
        }),
      );
  }
  render() {
    return (


            <View style={{flex:1, backgroundColor:'#669999'}}>
        <View
          style={{
            flex: 4 / 10,
            width: '100%',
            justifyContent: 'flex-start',
            alignItems: 'center',
            backgroundColor: '#669999',
          }}>
          <Top
            ref="top"
            parent={this}
            data={this.state.data}
            navigation={this.props.navigation}
          />
        </View>

        <View
          style={{
            flex: 6.5 / 10,
            width: '100%',
            backgroundColor: 'white',
            borderTopEndRadius: 20,
            borderTopLeftRadius: 20,
          }}>

                  {this.state.a1 == 0 ? <Thongtin1 parent={this} navigation={this.props.navigation}/> : <View style={{flex:1}}>{this.state.a1 == 1 ? <CapnhatThongtin/>:<BaoMat/>}</View>}

                </View>
      </View>
    );
  }
}

export default Hoso;
