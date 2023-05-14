import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
  backgroundColor: {
    backgroundColor: '#009580'
  }
})
const HelpCenter = () => {
  return (
    <View>
      <ScrollView>
        <Text className = 'font-bold m-5'>Email</Text>
        <TextInput placeholder='Please leave us your email for later contact'
          className='border border-gray-200 rounded-lg p-2 ml-3 mr-3'
          keyboardType='email-address'
        />
        <Text className = 'font-bold m-5'>Message</Text>
        <TextInput placeholder='Please leave us your message'
          className='border border-gray-200 rounded-lg p-2 ml-3 mr-3'
          multiline={true}
        />
      </ScrollView>
      <View className='items-center flex mt-5'>
      <TouchableOpacity style = {styles.backgroundColor} className='px-20 py-3 rounded-lg'>
        <Text className='text-white font-bold'>Send</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default HelpCenter