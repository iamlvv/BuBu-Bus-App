import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from 'axios'
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#009580',
  },
  color: {
    color: '#009580',
    fontWeight: 'bold'
  }
})
const ipaddress = process.env.IPADDRESS

const Login = () => {
  const navigate = useNavigation();
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  // const getData = async () => {
  //   try {
  //     const jsonValue = await AsyncStorage.getItem('userInfo')
  //     return jsonValue != null ? JSON.parse(jsonValue) : null;
  //   } catch (e) {
  //     // error reading value
  //     console.log(e);
  //   }
  // }
  const storeData = async(data) => {
    try {
      await AsyncStorage.setItem('userInfo', JSON.stringify(data))
      console.log("store data success")
    } catch (e) {
      // saving error
      console.log(e);
    }
  }
  const handleLogin = async() => {
    const response = await axios.post(`http://${ipaddress}:3000/api/auth/login`, {
      email: email,
      password: password
    }
    )
    await storeData(response.data)
    //getData()
    console.log(response.data)
    navigate.navigate('Home')
    //console.log(process.env.IPADDRESS)
  }
  return (
    <View>
      <View className='flex items-center mt-20 mb-10'>
        <Text className='font-bold text-2xl mb-5'>Hi, Welcome back!</Text>
        <Text className='text-gray-500'>Hello again, you 've been missed!</Text>
      </View>
      <View className='flex flex-col gap-5'>
        <View>
          <Text style={styles.color} className='ml-3 mb-3'>Email</Text>
          <TextInput placeholder='Please enter your email'
            className='border border-gray-200 rounded-lg p-2 ml-3 mr-3'
            keyboardType='email-address'
            value={email || ""}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View>
          <Text style={styles.color} className='ml-3 mb-3'>Password</Text>
          <TextInput placeholder='Please enter your password'
            className='border border-gray-200 rounded-lg p-2 ml-3 mr-3'
            secureTextEntry={true}
            value={password || ""}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View className='flex items-center'>
          <TouchableOpacity className="px-28 py-4 rounded-2xl ml-5 mr-5" style={styles.button}
            onPress={handleLogin}
          >
            <Text className='font-bold text-white'>LOG IN</Text>
          </TouchableOpacity>
        </View>
        <View className='flex items-center'>
          <Text className='text-gray-500 mb-5'>Or with</Text>
          <View className='flex flex-row gap-3 mb-5'>
            <TouchableOpacity>
              <Image source={require('../../images/google.png')}

              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../../images/facebook.png')}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text className='text-center'>Don't have an account? <Text className='font-bold' style={styles.color} onPress={() => navigate.navigate('Signup')}>Sign up</Text></Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Login