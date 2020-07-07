import React,{Component} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableHighlight,
  StyleSheet,
  Dimensions,
  AsyncStorage,
  Button
} from 'react-native';
import CardView from 'react-native-cardview';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-ionicons'

 export default class SMSCODE extends Component{


    constructor(props){
        super(props);
        this.state = { 
          x:null ,
          loading: true,
          address: ''
        
     
      }}

      getCoordinates(query) {
        console.log('start loading animation');
      }

      componentDidMount(){
        let x1=Dimensions.get('window').width;
        this.setState({
          x:x1,
        })
       
      }



    forgotpassword(){
      
    }

    async ghifile()
      {
        const taikhoan={
          sodt:this.state.sodt,
         
        }
        try {
            await AsyncStorage.setItem('statelogin3',this.state.sodt );
          } catch (error) {
              console.log('sai');
              
            // Error saving data
          }
      }

      

    guitinnhan(){
        console.log('aa');
        
       // this.setState{{loadingVisible: true}}
        if(this.state.sodt=='') alert('Vui lòng nhập đúng số điện thoại');
        if(this.state.sodt!=''){
          if(this.state.sodt=='1900'){
            this.ghifile();
        
            this.setState({ spinner: false });
 
          }
          else{
            alert('Nhập sai số điện thoại vui lòng nhập lại')
          }
        }
    }

render(){
    return(
<CardView  height={100} flex={9/10} width={this.state.x} marginTop ={90}>
    <KeyboardAvoidingView
             style = {styles.wrapper}
                          behavior = "padding">
        <View style = {styles.form}>
            <Text style ={styles.forgotpasswordHeading} > Forgot your Password</Text>
       <Text style={styles.forgotpasswordSubheading} > Enter your telephone to find</Text>

                    
       <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',width:300,height:40,borderWidth:0.5,borderRadius:5,padding:10,marginTop:-10, color:'#FFFFFF'}}>
       <Icon name='person-outline' size={20} />  
                <TextInput
               style={{width:250,height:35,color:'#000000'}}
                 placeholder='Số điện thoại'
                 keyboardType = 'numeric'
                 onChangeText={(text)=>{this.setState({sodt:text})}}  />
                </View>

       <View style={{flex:3,justifyContent:'flex-start',alignItems:'center',marginTop:8,marginRight: 5}}>
              <TouchableHighlight 
               onPress={()=>{this.guitinnhan('Vui lòng chờ trong giây lát')}}
              style={{width:200,borderRadius:10,height:35,backgroundColor:'#1aa3ff',justifyContent:'center',alignItems:'center'}} >
                <Text style={{color:'white'}}>Gửi Tin Nhắn</Text>
              </TouchableHighlight>
</View>
</View>
           
        </KeyboardAvoidingView>
        </CardView>
    );
}
}

const styles = StyleSheet.create({
    wrapper : {
        display : 'flex',
        flex : 1,
        backgroundColor : '#E6E6E6'
    },
    
    form: {
        marginTop : 10,
        paddingLeft: 20,
        paddingRight: 20,
        flex: 1

    },
    forgotpasswordHeading:{

        color : '#000000',
        fontSize: 28,
        fontWeight: '300',
      
    },
    forgotpasswordSubheading: {
        color : '#000000',
        fontWeight: '600',
        fontSize: 15,
        marginTop: 10,
        marginBottom: 60,
    },
   });