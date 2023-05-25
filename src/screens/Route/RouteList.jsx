import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import RouteInfo from './RouteInfo';
import {routes} from './Routes';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#009580',
  },
  backgroundColor: {
    backgroundColor: '#F5F7F9'
  },
  border: {
    borderBottomColor: '#E8EDF1',
    borderBottomWidth: 2,
  },
})

function RouteLists() {
  const navigate = useNavigation();
  const [bus, setBus] = React.useState('')

  return (
    <View>
      <View className="flex flex-col justify-between shadow-sm px-2" style={styles.header}>
        <Text className='font-bold text-xl text-white m-3'>Danh sách các tuyến bus</Text>
        <TextInput placeholder='Nhập tuyến bus cần tìm'
            className='border border-gray-200 rounded-lg p-2 ml-3 mr-3 mb-4 bg-white'
            keyboardType='default'
            value= {bus || ""}
            onChangeText={(text) => setBus(text)}
        />
      </View>

      <ScrollView className='mb-2' >
        <View className="flex flex-col mt-1 ml-0 gap-0">
          {routes.map((item) => {
            return (
              <TouchableOpacity key={item.id} onPress={() => navigate.navigate('Route Information', {routeId: item.id})}>
                <View
                  className="flex flex-col gap-1 bg-white p-4" style={styles.border}
                >
                  <Text className="font-bold">Tuyến xe {item.route}</Text>
                  <Text>{item.from} - {item.to}</Text>
                  <View className="flex flex-row">
                    <AntDesign name="clockcircleo" size={24} color="#252A31" />
                    <Text className="ml-3">{item.start} - {item.end}</Text>
                  </View>
                </View>                
              </TouchableOpacity>
            )

          })}
        </View>
      </ScrollView>
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
      <Stack.Screen name="Route Information" component={RouteInfo} 
        options={{
          tabBarActiveTintColor: '#009580',
          headerStyle: {
            backgroundColor: '#009580',
          },
          headerTintColor: '#fff',
        }}
      />
    </Stack.Navigator>
  )
}

export default RouteList