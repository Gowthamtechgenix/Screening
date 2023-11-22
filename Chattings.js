import React from 'react'
import { StyleSheet, View } from 'react-native'
import Sidebar from './Components/Sidebar'
import Chat from './Components/Chat'

export default  function Chattings() {
  return (
    <View style={styles.home}>
   <View style={styles.container}>
    <Sidebar/>
    <Chat/>
   </View>
   </View>
  )
}

const styles=StyleSheet.create({
    home:{
 backgroundColor:"#a7bcff",
 height:"100%",
 width:"100%",
 display:"flex",
 alignItems:"center",
 justifyContent:"center"
    },
    container:{
     borderWidth:2,
     borderRadius:10,
     width:"100%",
     height:"70%",
     flexDirection:"row",
     overflow:"hidden"
    },


})

