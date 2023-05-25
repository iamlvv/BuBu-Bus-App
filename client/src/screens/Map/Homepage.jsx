import { View, StyleSheet, Text, Button, TextInput, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import MapView from "react-native-maps";
import Marker from "react-native-maps";
import { useState } from 'react';
import { useRef } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Search from './Search';
import SearchResult from './SearchResult';
import { useNavigation } from '@react-navigation/native';
const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

const HomepageScreen = () => {
  const navigate = useNavigation();
  const mapRef = useRef(null);
  const Camera = {
    center: {
      latitude: 10.8494,
      longitude: 106.7537,
    },
    zoom: 10
  }
  const ThuDucRegion = {
    latitude: 10.8494,
    longitude: 106.7537,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  }
  const HCMRegion = {
    latitude: 10.8231,
    longitude: 106.6297,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  };
  const [region, setRegion] = useState(ThuDucRegion);
  const renavigate = () => {
    mapRef.current.animateToRegion(ThuDucRegion, 500);
  }

  return (
    <View style={styles.container} className='justify-between'>
      {/* Map */}
      <MapView
        ref={mapRef}
        style={styles.map}
        zoomControlEnabled={true}
        initialRegion={region}
        onRegionChangeComplete={(region) => setRegion(region)}
      />

      {/* Search */}
      <View className='mt-5'>
        <TouchableOpacity className='rounded-lg w-3/4 my-3 flex flex-row justify-evenly items-center bg-white' onPress={() => { navigate.navigate('Search') }}>
          <Image source={require('../../images/search-icon.png')} className='w-5 h-5' />
          <Text className='py-5 pr-5 opacity-50'>Please enter your start location...</Text>
        </TouchableOpacity>
      </View>

      {/* <Text>{region.latitude}</Text>
      <Text>{region.longitude}</Text> */}
      <TouchableOpacity className='flex flex-row mr-auto ml-5 my-8 p-3 rounded-full bg-white opacity-60' onPress={() => renavigate()}>
        <Image source={require('../../images/current-location-icon.png')} className='w-10 h-10' />
      </TouchableOpacity>
    </View>
  )
}

const Homepage = () => {
  return (
    <Stack.Navigator initialRouteName='Homepage'>
      <Stack.Screen
        name="HomepageScreen"
        component={HomepageScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{ cardStyle: { backgroundColor: '#fff' }, headerStyle: { backgroundColor: '#009580' }, headerTintColor: '#fff' }}
      />
      <Stack.Screen
        name="SearchResult"
        component={SearchResult}
        options={{ cardStyle: { backgroundColor: '#fff' }, headerStyle: { backgroundColor: '#009580' }, headerTintColor: '#fff' }}
      />
    </Stack.Navigator>
  )
}

export default Homepage