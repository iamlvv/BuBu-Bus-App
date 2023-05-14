import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#009580',
  },
  color: {
    color: '#009580',
    fontWeight: 'bold'
  }
})
const Login = () => {
  const navigate = useNavigation();
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
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
            value= {email || ""}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View>
          <Text style={styles.color} className='ml-3 mb-3'>Password</Text>
          <TextInput placeholder='Please enter your password'
            className='border border-gray-200 rounded-lg p-2 ml-3 mr-3'
            secureTextEntry={true}
            value= {password || ""}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View className='flex items-center'>
          <TouchableOpacity className="px-28 py-4 rounded-2xl ml-5 mr-5" style={styles.button}
            onPress={() => navigate.navigate('Home')}
          >
            <Text className='font-bold text-white'>LOG IN</Text>
          </TouchableOpacity>
        </View>
        <View className='flex items-center'>
          <Text className='text-gray-500 mb-5'>Or with</Text>
          <View className='flex flex-row gap-3 mb-5'>
            <TouchableOpacity onPress={() => navigate.navigate('Home')}>
              <Image source={require('../../images/google.png')}

              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate.navigate('Home')}>
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