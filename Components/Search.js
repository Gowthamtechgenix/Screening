import React from 'react'
import { View ,StyleSheet, TextInput, Image,Text} from 'react-native'


export default function Search() {
  return (
    <View style={styles.serach}>
      <View style={styles.serchForm}>
     <TextInput placeholder='' keyboardType='text'/>
      </View>
      <View style={styles.userChat}>
        <Image />
        <View style={styles.userChatInfo}>
          <Text>june</Text>
        </View>
      </View>
    </View>
  )
}

const styles=StyleSheet.create({

  serach:{

  },

})