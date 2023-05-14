import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const styles = StyleSheet.create({
  bottom : {
    width: 420,
    margin: 70
  },
  logo : {
    marginTop: 100
  }
})
const SplashScreen = () => {
  const navigate = useNavigation();
  useEffect(() => {
    const timeOut = setTimeout(() => {
      navigate.navigate('OnboardingScreen')
    }, 3000)
    return () => clearTimeout(timeOut)
  }, [])
  return (
    <View className="bg-white flex items-center">
      <Image source={require('../../images/Logo.png')} style = {styles.logo}/>
      <ActivityIndicator size="large" color="#009580" className = 'mt-10'/>
      <Image source={require('../../images/splash.png')} className = '' style = {styles.bottom}/>
    </View>
  )
}

export default SplashScreen