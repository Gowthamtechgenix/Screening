import React from 'react'
import { View ,TextInput,StyleSheet } from 'react-native'

export default function Screen() {
  return (
    <View style={styles.container}>
       <TextInput style={styles.input} placeholder='enter Email'/>
    </View>
  )
}

const styles=StyleSheet.create({
input:{
    borderWidth:2,
    height:50,
    width:200,
    textAlign:"center"

}
})
