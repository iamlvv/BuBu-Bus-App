import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
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

const Signup = () => {
  const navigate = useNavigation();
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const signup = async() => {
    try {
      const response = await axios.post(`http://${ipaddress}:3000/api/auth/register`, {
        email: email,
        password: password,
        phone: phone
      })
      console.log(response.data.data)
    }
    catch (e) {
      console.log(e);
    }
  }
  const handleSignup = () => {
    if (email && password && phone) {
      if (phone.length < 10) {
        alert("Phone number must be 10 digits")
        return
      }
      signup()
      navigate.navigate('Home')
    }
    else {
      alert("Please fill in all the fields")
    }
  }
  return (
    <View>
      <View className='flex items-center mt-20 mb-10'>
        <Text className='font-bold text-2xl mb-5'>Create an account</Text>
        <Text className='text-gray-500'>Travel with bus right now!</Text>
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
          <Text style={styles.color} className='ml-3 mb-3'>Phone Number</Text>
          <TextInput placeholder='Please enter your phone number'
            className='border border-gray-200 rounded-lg p-2 ml-3 mr-3'
            keyboardType='phone-pad'
            value= {phone || ""}
            onChangeText={(text) => setPhone(text)}
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
            onPress={handleSignup}
          >
            <Text className='font-bold text-white'>SIGN UP</Text>
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
            <Text className='text-center'>Already have an account? <Text className='font-bold' style={styles.color} onPress={() => navigate.navigate('Login')}>Log in</Text></Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Signup