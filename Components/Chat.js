import React from 'react'
import { View,Text,StyleSheet } from 'react-native'


export default function Chat() {
  return (
    <View style={styles.chat}>
        <Text>Chat</Text>
    </View>
  )
}

const styles=StyleSheet.create({
  chat:{
    flex:2
  }
})
