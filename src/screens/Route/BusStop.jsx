import { Text, View, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { busStops, routes } from './Routes'

const styles = StyleSheet.create({
  border: {
    borderBottomColor: '#E8EDF1',
    borderBottomWidth: 2,
  },
})

const BusStop = () => {
  const route = useRoute();
  const routeId = route.params.routeId - 1;

  const from = busStops.indexOf(routes[routeId].from);
  const to = busStops.indexOf(routes[routeId].to);
  
  const stops = [];
  for (let i = from; i <= to; i++) {
    stops.push({id: i, busStop: busStops[i]});
  }

  return (
        <ScrollView className='flex flex-col bg-white gap-0 pr-4 pl-4'>
            {stops.map((item) => {
                return (
                    <View className='p-2' style={styles.border}>
                        <View className='flex flex-row justify-between'>
                          <Text className='font-semibold'>{item.busStop}</Text>
                          <Text className='text-gray-400'>+{item.id * 3} phút</Text>
                        </View>
                    </View>
                )
            })}
        </ScrollView>
  )
}

export default BusStop