import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const styles = StyleSheet.create({
  color: {
    color: '#009580'
  },
  backgroundColor: {
    backgroundColor: '#009580'
  }
})

const About = () => {
  const navigate = useNavigation();
  return (
    <View>
      <View className='flex items-center'>
        <View className="flex flex-row gap-20 items-center">
          <Image source={require('../../images/aboutLogo.png')} />
          <View>
            <Text style={styles.color} className='font-bold'>BUBU - BUS MAP IN HCM</Text>
            <Text style={styles.color}>Version 1.0.0</Text>
          </View>
        </View>
      </View>
      <View className='flex flex-col gap-4 mt-5 ml-5'>
        <Text className='text-gray-500'>Developed by</Text>
        <Text className='text-gray-500'>Nhom Kem - MOBILE SUBJECT</Text>
      </View>
      <Text className='ml-9 font-bold mt-5'>Contact us</Text>
      <View className='flex items-center my-5'>
        <View className='flex flex-row gap-9 items-center'>
          <Image source={require('../../images/fb.png')} />
          <Image source={require('../../images/linkedin.png')} />
          <Image source={require('../../images/ins.png')} />
          <Image source={require('../../images/twitter.png')} />
          <Image source={require('../../images/gmail.png')} />
          <Image source={require('../../images/phone.png')} />
        </View>
      </View>
      <Text className = 'text-gray-500 ml-9 mb-5'>Any questions or feedbacks?</Text>
      <View className='flex items-center'>
        <TouchableOpacity style = {styles.backgroundColor} 
        onPress={() => navigate.navigate('Help Center')}
        className='px-10 py-3 rounded-2xl'>
          <Text className='text-white font-bold'>Help Center</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default About