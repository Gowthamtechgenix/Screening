import React from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'


export default function Navbar() {
  return (
<View style={styles.navbar}>
 <Text style={styles.logo}>Gowtham</Text>
 <View style={styles.user}>
  <Image style={styles.img} source={{uri:"https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=400"}} />
  <Text>John</Text>
 </View>
</View>
  )
}

const styles=StyleSheet.create({
 navbar:{
  alignItems:"center",
  flexDirection:"row",
  backgroundColor:"#2f2d52",
  height:50,
  padding:10,
  justifyContent:"space-between",
  color:"#ddddf7"
 },
 logo:{
  fontWeight:"bold"
 },
 user:{
  flexDirection:"row",
  gap:5
 },
 img:{
  backgroundColor:"#ddddf7",
  height:24,
  width:24,
  objectFit:"cover",
  overflow:"hidden"
 },
 

})
