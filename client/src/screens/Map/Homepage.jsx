import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SearchResult from './SearchResult';

const Stack = createStackNavigator();


const Homepage = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="Map" component={Map} /> */}
      <Stack.Screen name="SearchResult" component={SearchResult}
        options={{
          cardStyle: { backgroundColor: '#fff' },
          headerStyle: { backgroundColor: '#009580' }, headerTintColor: '#fff'
        }}

      />
      {/* <Stack.Screen name="SearchInfo" component={SearchInfo} /> */}
    </Stack.Navigator>
  )
}

export default Homepage