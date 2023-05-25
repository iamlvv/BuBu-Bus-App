import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  image : {
    width: 500,
    marginTop: -205
  },
  color : {
    color: '#009580',
    fontWeight: 'bold'
  },
  button : {
    backgroundColor: '#BFE8E2',
  }
})
const OnboardingScreen = () => {
  const navigate = useNavigation();
  return (
    <View className = 'flex flex-1 bg-white '>
      <Onboarding
        className='items-center'
        bottomBarHeight={60}
        bottomBarColor='#fff'
        showSkip={false}
        showNext={false}
        showDone={false}
        loop={true}
        pages={[
          {
            backgroundColor: '#fff',
            image: <Image source={require('../../images/onboarding1.png')} style = {styles.image} />,
            title: <Text className='font-bold text-2xl mb-10'>Never Get Lost Again</Text>,
            subtitle: <Text className = 'ml-10 mr-10 leading-6'>Get Where You Need to Go with Ease: <Text style = {styles.color}>BuBu</Text> helps you to discover the best bus routes to your destination.</Text>,
          },
          {
            backgroundColor: '#fff',
            image: <Image source={require('../../images/onboarding2.png')} style = {styles.image} />,
            title: <Text className='font-bold text-2xl mb-10'>Always Be on Time</Text>,
            subtitle: <Text className = 'ml-10 mr-10 leading-6'><Text style = {styles.color}>BuBu</Text> helps you keep information and on schedule: tracking for accurate arrival and departure times.</Text>,
          },
          {
            backgroundColor: '#fff',
            image: <Image source={require('../../images/onboarding3.png')} style = {styles.image}/>,
            title: <Text className='font-bold text-2xl mb-10'>Say Goodbye to Travel Worries</Text>,
            subtitle: <Text className = 'ml-10 mr-10 leading-6'><Text style = {styles.color}>BuBu</Text> listen to your personal feedback and queries for better bus experience.</Text>,
          }
        ]}
      />
      <TouchableOpacity className='px-28 py-4 rounded-2xl ml-5 mr-5' style = {styles.button}
        onPress={() => navigate.navigate('Signup')}
      >
        <Text className='text-white text-center' style = {styles.color}>Get Started</Text>
      </TouchableOpacity>
      <View className='mt-5 mb-5'>
        <Text className='text-center'>Already have an account? <Text className='font-bold' onPress={() => navigate.navigate('Login')}>Sign in</Text></Text>
      </View>
    </View>
  )
}

export default OnboardingScreen