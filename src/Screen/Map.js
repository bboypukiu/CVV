import React, { Component } from 'react';
import MapView, { AnimatedRegion,PROVIDER_GOOGLE } from 'react-native-maps'; 
import GetLocation  from 'react-native-get-location'
import Polyline from '@mapbox/polyline';
import RBSheet from "react-native-raw-bottom-sheet";
import BottomSheet from 'reanimated-bottom-sheet'
import Icon from 'react-native-ionicons';
import {
    View,
    Text,
    Image,
    Dimensions,
    TextInput,
    Button,
    TouchableHighlight,
    ActivityIndicator,
    AsyncStorage,
    Alert,
  } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ChitietDon from './Chitietdonhang/ChitietDon';
  let x1=Dimensions.get('window').width;// lay ra chiue rong cua man hinh
  let x2=Dimensions.get('window').height;  var khoangcach2diem=0; var thoigiandichuyengiua2diem=0,end_address=null;

  class TimkiemBando extends Component{
    constructor(props){
      super(props);
      this.state={
        search:'',
        ishow:this.props.parent.state.isShow,
      }
    }
    render(){
      return(
      

        <View  style={{margin:20,width:x1*0.9,borderRadius:10,borderWidth:0.5,position:'absolute',justifyContent:'center',backgroundColor:'white',alignItems:'center'}}>
    
       
      <View   style={{backgroundColor:'white',justifyContent:'flex-start',
      flexDirection:'row',height:40,alignItems:'center',width:x1-70}}>
    <TouchableHighlight underlayColor="" >
    <Icon name='navigate-outline' size={25} color='green' />
    </TouchableHighlight>
        <TextInput ref='search' onChangeText={(text)=>{

       if(text!=''){
        this.setState({
          search:text,
        })
      
       }
       else{
        this.setState({
          isShow:false,
        })
 
       }
           
        }} placeholder='Nhập địa điểm tìm kiếm' style={{fontSize:13,width:x1-150,height:35}} />

    {this.state.search!='' ?    <View style={{flexDirection:'row'}}>
      <Text onPress={()=>{
      //tim kiem
      this.setState({
        isShow:true,
      })
      this.props.parent.Timkiem(this.state.search);}}
       style={{textDecorationLine:'underline',fontWeight:'bold',color:'#eba834',marginRight:17}}>Tìm</Text>
    <TouchableHighlight
    underlayColor=""
    onPress={()=>{this.refs.search.clear();this.setState({search:'',isShow:false})}}
     style={{width:20,height:20,}}>
    
          <Icon name='close-sharp' size={20} color='black'  />
        </TouchableHighlight></View>:<View></View>}
     
      </View>

      {this.state.isShow==true ?  <FlatList data={this.props.parent.state.dataTimkiem}
        style={{width:300,height:400,}}
        renderItem={({item,index})=>{
        return(
            <TouchableHighlight underlayColor='#d9d6d2' onPress={()=>{
              this.setState({isShow:false})
              this.props.parent.setState({
                
                latitudeend:item.geometry.location.lat,
                longitudeend:item.geometry.location.lng,
                latitude:item.geometry.location.lat,
                longitude:item.geometry.location.lng
            });this.props.parent.getDirections(this.props.parent.state.latitudeme,this.props.parent.state.longitudeme,item.geometry.location.lat,item.geometry.location.lng);}
            }>
                 <View style={{flexDirection:'column',borderTopWidth:0.8,borderColor:'black'}}>
                <Text style={{fontWeight:'700'}}>{item.name}</Text>
                <Text>{item.formatted_address}</Text>
              </View>
            </TouchableHighlight>
              );
        }} />:<View></View>}
      </View>
      );
    }
  }


  //chi tiet ci tri 
  class Chitietcitri extends Component{
    constructor(props){
      super(props);
      this.state={
         stvido:this.props.parent.state.latitudeme,//diem bat dau di
        stkinhdo:this.props.parent.state.longitudeme,     
         endvido:this.props.parent.state.latitudeend,//diem ket thuc di
        endkinhdo:this.props.parent.state.longitudeend,
       
      }
   
    }
    componentDidMount(){
      this.RBSheet.open();
      
    }
    render(){
      return(
       
        <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          onClose={()=>{
            this.props.parent.setState({bottomchiduong:!this.props.parent.state.bottomchiduong,isShowLocationhientai:true,xemchitietcitri:false})}
          }
          height={350}
          openDuration={250}
          customStyles={{
            wrapper: {
              backgroundColor: "transparent"
            },
            container: {
              justifyContent: "center",
              alignItems: "center"
            }
          }}
        >
        <View style={{width:x1,flex:6/10,position:'absolute',bottom:0,backgroundColor:'white',paddingBottom:10,flexDirection:'column',alignItems:'flex-end'}}>
            
                        <ChitietDon nhan='ok' />
                        
                        <View style={{position:'absolute'}}>
                          
                        </View>

                        <View style={{width:x1-30,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        <TouchableHighlight onPress={()=>{
                           console.log(this.props.parent.state.indexxemchitiets +'phan tu da chon');
                           let abc=this.props.parent.state.cuahang[this.props.parent.state.indexxemchitiets];
                           
                          //  let gh=[{abc}];
                            this.props.parent.setState({cuahang:[],isShowLocationhientai:true,xemchitietcitri:false,bottomchiduong:true});
                            this.props.parent.setState({cuahang:[abc]});
                            this.props.parent.getDirections(this.state.stvido,this.state.stkinhdo,this.state.endvido,this.state.endkinhdo)

                        }} 
                            style={{width:100,height:40,borderRadius:10,marginRight:20,backgroundColor:'#9966ff',justifyContent:'center',alignItems:'center'}}>
                              <View>
                              <Text style={{color:'white'}}>Nhận ngay</Text>
                              </View>
                        </TouchableHighlight>
                       
                        <TouchableHighlight onPress={()=>{this.props.navigation.navigate('Chitietdon')}} 
                            style={{width:100,height:40,borderRadius:10,marginRight:20,backgroundColor:'#009933',justifyContent:'center',alignItems:'center'}}>
                              <View>
                              <Text style={{color:'white'}}>Xem chi tiết</Text>
                              </View>
                        </TouchableHighlight>

                        <TouchableHighlight onPress={()=>{console.log('dang tim duong di');
                            this.props.parent.setState({xemchitietcitri:false,isShowLocationhientai:true,bottomchiduong:true})
                            this.props.parent.getDirections(this.state.stvido,this.state.stkinhdo,this.state.endvido,this.state.endkinhdo);}} 
                            style={{width:100,height:40,borderRadius:10,backgroundColor:'#0099ff',justifyContent:'center',alignItems:'center'}}>
                              <View>
                              <Text style={{color:'white'}}>Chỉ đường</Text>
                              </View>
                        </TouchableHighlight>
                        </View>
        </View>
        </RBSheet>
      );
    }
  }

  // export default class Map extends Component {
  //   render() {
  //     return (
  //       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
  //         <Button title="OPEN BOTTOM SHEET" onPress={() => this.RBSheet.open()} />
  //         <RBSheet
  //           ref={ref => {
  //             this.RBSheet = ref;
  //           }}
  //           height={300}
  //           openDuration={250}
  //           customStyles={{
  //             container: {
  //               justifyContent: "center",
  //               alignItems: "center"
  //             }
  //           }}
  //         >
  //          <Text>aaaaa</Text>
  //         </RBSheet>
  //       </View>
  //     );
  //   }
  // }
var pu='AIzaSyBfQPm46M3j2joTFlHachk4RCXfeR7ZFWE';
export default class Map extends Component{
    constructor(props){
        super(props);
        this.state={
          isloadingDirection:false,// loadingg chi duong   
          bottomchiduong:false,
          indexxemchitiets:null,// vi tri cua hang clcik vao tren maps
          xemchitietcitri:false,
          isShowLocationhientai:true,
          isShow:false,
          dataTimkiem:[],
          timkiem:'',
           latitude:20.9806175,latitudeme:20.9806175,  latitudeend:0,
           longitude: 105.7869923,longitudeme:105.7869923, longitudeend:0,
// vị trí cửa hàng
          cuahang:[{latitude:20.9805409,longitude:105.7878986},
            {latitude:20.9866488,longitude:105.7869923},
            {latitude:21.0281545,longitude:105.8034205},
            {latitude:20.985313,longitude:105.792203} ,
            {latitude:21.002681,longitude:105.791281} ,
            {latitude:21.001850,longitude:105.817491} ,
            {latitude:20.998781,longitude:105.813306} ,           
          ],
          latitudeDelta: 0.012,
          longitudeDelta: 0.012* (x1 / x2),
          coordinate: new AnimatedRegion({
            latitude: 20.9806175,
            longitude: 105.7869923,
           }),
           coords:[],
        }
      }
    
    
      location(){
        GetLocation.getCurrentPosition({
          enableHighAccuracy: true,
          timeout: 0,
      })
      .then(location => {
          this.setState({latitudeme:location.latitude,longitudeme:location.longitude,
            latitude:location.latitude,longitude:location.longitude,})
      })
      .catch(error => {
          const { code, message } = error;
          console.warn(code+'', message);
      })
      }
 
      Wll
      componentWillReceiveProps(next){
        
          console.log('co vi tri'+next.latitude1);         
           this.getDirections(this.state.latitudeme,this.state.longitudeme,next.latitude1,next.longitude1)
       
       
      }
     
       componentDidMount(){
      //   setInterval(() => {
      //    this.location();
      //   }, 5000);
     
     
        this.location();
   
      
       
       }
    
       async getDirections(st1,st2,st3,st4) {//CĐ
       this.setState({bottomchiduong:true,isloadingDirection:true})
        try {
         var url='https://maps.googleapis.com/maps/api/directions/json?origin=' +st1+ ',' +st2+'&destination='+st3+','+st4+'&key=AIzaSyCU_ap21k3SyokVT2rVjTRLnvwJKNH-1Zw';
            let resp = await fetch(url);
         
            let respJson = await resp.json();      
            let points = Polyline.decode(respJson.routes[0].overview_polyline.points);
            khoangcach2diem= respJson.routes[0].legs[0].distance.text;
            thoigiandichuyengiua2diem= respJson.routes[0].legs[0].duration.text;
            end_address=respJson.routes[0].legs[0].end_address;
            
            (points)
            let coords = points.map((point, index) => {
                return  {
                    latitude : point[0],
                    longitude : point[1]
                }
            })
            this.setState({coords: coords,isloadingDirection:false})
            return coords
        } catch(error) {
            alert(error)
            return error
        }
    }

       xoa_dau(str) {
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
        str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
        str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
        str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
        str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
        str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
        str = str.replace(/Đ/g, "D");
        return str;
    }
      async Timkiem(search){
     
      
       var abc= search.split(' ');          //tach ki tu
       var d='';
       for (let index = 0; index < abc.length-1; index++) {
          d=d+abc[index]+'+';
       }
       d=d+abc[abc.length-1];
      d= this.xoa_dau(d);
      
     // alert(d);
     if(d!=''){
        const url='https://maps.googleapis.com/maps/api/place/textsearch/json?query='+d+'&sensor=false&language=vi&key='+pu;
    
            fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
     
           if(responseJson.results.length!=0){
           
            // console.log(responseJson.results[0].geometry.location.lat+'ppp');
             this.setState({
               isShow:true,
               dataTimkiem:responseJson.results,
             })
           }
            
        })
        .catch((error) => {
          console.error(error);
        });
      }
       }
  
      
      render() {
      
        return (
          <View  style={{flex:1}}>
           
             <MapView style={{flex:1}}
            region={{
              latitude:this.state.latitude,
          longitude:this.state.longitude,
          latitudeDelta: 0.09,//this.state.latitudeDelta,
          longitudeDelta: 0.09,//this.state.longitudeDelta,
            }}
         //   onRegionChange={this.onRegionChange}
          >

        {/* chiduong */}
           <MapView.Polyline 
            coordinates={this.state.coords}
            strokeWidth={6}
            strokeColor="#ff6600"/>
            <MapView.Marker
            
            coordinate={{ "latitude": this.state.latitudeme,   
            "longitude": this.state.longitudeme }}
            title={"Vị trí hiện tại "}
            draggable >
        <Image  source={require('../Image/logologin.png')} style={{width:35,height:35}} />
      </MapView.Marker> 

      {this.state.cuahang.length!=0 && this.state.cuahang.map((marker, index) => (
        // ch
            <MapView.Marker ref='cuahang' 
            onPress={()=>{ 
             
              this.setState({xemchitietcitri:true,bottomchiduong:false,isShowLocationhientai:false,indexxemchitiets:index,
              latitudeend:marker.latitude,longitudeend: marker.longitude});}}
                key = {index}
                coordinate = {{
                    latitude: marker.latitude,
                    longitude: marker.longitude
                }}
                title={"Vị trí cửa hàng cần giao hàng "}
                draggable
            >
              <Image style={{width:50,height:50}}
               source={require('../Image/cuahang.png')} />             
            </MapView.Marker>
        ))}
   
   
      <MapView.Marker
            
      coordinate={{ "latitude": this.state.latitudeend,   
      "longitude": this.state.longitudeend }}
      title={"Vị trí tìm kiếm "}
      draggable >
        <Icon name='pin-outline' size={40}  color='green'/>
      </MapView.Marker>

      {parseFloat(this.props.latitude1)  ?( // vi tri cua hang hoac nguoi nhan chon chi duong

        <MapView.Marker           
        coordinate={{ "latitude":parseFloat(this.props.latitude1),   
        "longitude":parseFloat(this.props.longitude1) }}
        title={"Vị trí cần đến "}
        draggable >
          
        </MapView.Marker>):<View></View>
      }

        
   </MapView>
          {this.state.xemchitietcitri==true ? 
          
            <Chitietcitri parent={this} navigation={this.props.navigation}/> 
       
            :<View></View>}
       {/* <Chitietcitri parent={this} navigation={this.props.navigation}/> */}
              <TimkiemBando parent={this}/>   
              
              {this.state.isloadingDirection==true ?  <TouchableHighlight  underlayColor='white' onPress={()=>{this.location();}} style={{position:'absolute',backgroundColor:'white',borderRadius:20,justifyContent:'center',alignItems:'center'
              ,borderWidth:0.5,borderColor:'#66ccff',width:40,height:40,right:10,bottom:250}}>
                                  <Icon  name='body-outline'  color='#009999' size={23} />

           </TouchableHighlight>:<View></View>}

           {this.state.isloadingDirection==true ?   
           <View style={{position:'absolute',width:'100%',height:'100%',justifyContent:'center',alignItems:'center'}}><ActivityIndicator /></View>
    :<View></View>}
                {this.state.bottomchiduong==true ?   
              <View style={{width:x1,alignSelf:'baseline',paddingLeft:10,borderWidth:0.5,borderColor:'#ffff00',bottom:2,paddingTop:5,paddingBottom:10,backgroundColor:'white',justifyContent:'flex-start',position:'absolute',alignItems:'flex-start'}}>
                <View style={{flexDirection:'row',justifyContent:'flex-start',}}>
                    <View style={{flex:8.3,flexDirection:'row'}}>
                    <Text >Đến  </Text>
                    <Text style={{color:'#660066'}} >{end_address}  </Text>
                    </View>
                <View style={{flex:1.7,alignItems:'center',justifyContent:'center'}}>
                <TouchableHighlight underlayColor='#ebebe0' onPress={()=>{this.setState({bottomchiduong:false,coords:[]})}}>
                  
                <Icon name='cut-outline' size={20} color='green' />
                </TouchableHighlight>
                </View>
                </View>
                <View style={{flexDirection:'row'}}>
                  <Text>Từ  </Text>
                  <Text style={{color:'blue'}}>Vị trí của tôi   </Text>

                  <Text style={{color:'green'}}>{khoangcach2diem}</Text>
                  <Text style={{marginLeft:10,color:'#ff00ff'}}>{thoigiandichuyengiua2diem}</Text>
                </View>
              </View>
       :<View></View>}

          </View>
         
          
        );
      }
}