import React from "react";
import {ScrollView,TextInput,Text,View,Image,StyleSheet,StatusBar,TouchableOpacity} from 'react-native'



const App = () => {
  return (
    //Thanh cuộn 'ScrollView:
    <ScrollView style={styles.container}>

      <StatusBar backgroundColor="#ffd834"></StatusBar>
      <View style={styles.rowHead}>
        <TouchableOpacity style={styles.buttonRound}>
          <Image source={require("../NguyenAssignment1/asset/images/back.png")} />
        </TouchableOpacity>
        <View style={styles.logo}>
        <Image source={require("../NguyenAssignment1/asset/images/logo.png")} />
        </View>
      </View>

      <Image style={styles.image} source={require("../NguyenAssignment1/asset/images/rabit.png")} />
      <Text style={styles.login_title}>Login to Labbit</Text>

      <View style={styles.text_input}>
      <Image style={styles.icon} source={require("../NguyenAssignment1/asset/images/email.png")} />
        <TextInput style={{flex:1}}  placeholder="Email" />
      </View>

      <View style={styles.text_input}>
      <Image style={styles.icon} source={require("../NguyenAssignment1/asset/images/pass.png")} />
        <TextInput style={{flex:1}} placeholder="Password" />
      </View>
      
      <View style={styles.button_login}>
          <Text style={{color:'white',fontFamily:'bold',fontSize:16}}>Login</Text>
      </View>

      <View style={{
        flexDirection:'row',
        justifyContent:'center',
        flex:1,
        marginTop:30,
        marginBottom:40}}>
        <Text>Forgot Password? </Text>
        <Text style={{fontFamily:'bold',color:'black'}}>Click Here</Text>
      </View>
    </ScrollView>
)}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    backgroundColor:'#ffd834',
  },
  rowHead:{
    flex:1,
    paddingLeft:25,
    paddingRight:65,
    paddingTop:30,
    flexDirection:'row'
  },
  buttonRound:{
    width:40,
    height:40,
    padding:10,
    borderRadius:100,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center'
  },
  logo:{
    flex:2,
    justifyContent:'center',
    alignItems:'center',
  },
  image:{
    flex:7,
    resizeMode:"cover",
    alignItems:'center',
    alignSelf:'center',
    marginTop:40,
    marginRight:40,
  },
  login_title:{
    flex:1,
    alignSelf:'center',
    fontSize:24,
    fontStyle:"normal",
    color:"#304D95",
    fontWeight:"bold"
  },
  text_input:{
    flexDirection:'row',
    backgroundColor:'white',
    marginLeft:25,
    marginRight:25,
    marginTop:25,
    borderRadius:100,
    paddingLeft:20,
    paddingRight:20
  },
  button_login:{
    flexDirection:'row',
    height:50,
    borderRadius:100,
    justifyContent:'center',
    alignItems:'center',
    marginLeft:25,
    marginRight:25,
    marginTop:25,
    backgroundColor:'#FF6D03',
    borderRadius:100,
  },
  icon:{
    width:30,
    height:30,
    marginRight:10,
    alignSelf:'center'
  }
  
})


export default App