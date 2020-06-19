import { StyleSheet, View,Image, TouchableWithoutFeedback, Animated } from 'react-native';
import React,{Component} from 'react';
export default class App extends Component {
 
  constructor(){
    super();
    this.state={
      animation : new Animated.Value(-150),
    }
  }
 
  startAnimation=()=>{
      Animated.timing(this.state.animation,{
        toValue : 460,
        duration : 2500
      }).start(()=>{
        this.state.animation.setValue(100);
        //If you remove above line then it will stop the animation at toValue point
      });
 
  }
 
  componentDidMount(){
    this.startAnimation()
  }
  
  render() {
    const transformStyle ={
      transform : [{ 
        translateX : this.state.animation, 
      }]
    }
      return(
        <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignContent:'center'}}>    

          <Animated.View style={[ transformStyle]} >  
          <Image 
               style={{width:150,height:150}}
               source={require('../Image/logologin.png') }/>
         
              </Animated.View>     
                

        </View>
      );
    }
}
  
