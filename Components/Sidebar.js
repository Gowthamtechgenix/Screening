import React from 'react'
import { Text, View,StyleSheet } from 'react-native'
import Navbar from './Navbar'
import Search from './Search'

export default function Sidebar() {
  return (
    <View style={styles.sidebar}>
        <Navbar/>
        <Search/>
    </View>
  )
}

const styles=StyleSheet.create({

    sidebar:{
        flex:1.5,
        borderRightWidth:2,
        backgroundColor:"#3e3c61",
        borderRadius:10

    }
})