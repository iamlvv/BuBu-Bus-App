import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import RouteInfo from './RouteInfo';

const Stack = createStackNavigator();

function RouteLists() {
  return (
    <View>
      <Text>RouteList</Text>
    </View>
  )
}
const RouteList = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="RouteList" component={RouteLists}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen name="Route Information" component={RouteInfo} />
    </Stack.Navigator>
  )
}

export default RouteList