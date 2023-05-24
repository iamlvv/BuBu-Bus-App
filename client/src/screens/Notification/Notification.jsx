import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'
import list from './NotificationLists'
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator()

const style = StyleSheet.create({
  successNoti: {
    backgroundColor: '#F2F8F2',
    borderTopColor: '#238C31',
    borderTopWidth: 5,
  },
  warningNoti: {
    backgroundColor: '#FEF7F1',
    borderTopColor: '#E98305',
    borderTopWidth: 5,
  },
  infoNoti: {
    backgroundColor: '#F1F8FE',
    borderTopColor: '#006657',
    borderTopWidth: 5,
  }
})

const NotiList = () => {
  const warningNoti = "bg-yellow-200 p-2 rounded-lg p-5"
  const successNoti = "bg-green-200 p-2 rounded-lg p-5"
  const infoNoti = "bg-blue-200 p-2 rounded-lg p-5"
  return (
    <View>
      <ScrollView>
        <View className="flex flex-col gap-5 mx-5 mt-1 ml-0">
          {list.map((item) => {
            return (
              <View key={item.id} className={item.type == 'success' ? successNoti : item.type == 'warning' ? warningNoti : infoNoti}
                style={item.type == 'success' ? style.successNoti : item.type == 'warning' ? style.warningNoti : style.infoNoti}
              >
                <View className='flex flex-row gap-5 mb-2'>
                  <Image source={item.type == 'success' ? require('../../images/successNoti.png') : item.type == 'warning' ? require('../../images/alertNoti.png') : require('../../images/infoNoti.png')} />
                  <Text className = 'font-bold'>{item.date}</Text>
                  <Text className = 'font-bold'>{item.time}</Text>
                </View>
                <Text>{item.description}</Text>
              </View>
            )

          })}
        </View>
      </ScrollView>
    </View>
  )
}
const Notification = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="NotiList" component={NotiList} 
        options={{
          headerShown: false,
          cardStyle: { backgroundColor: '#fff' }
        }}
      />
    </Stack.Navigator>
  )
}

export default Notification