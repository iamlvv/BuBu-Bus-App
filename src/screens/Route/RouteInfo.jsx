import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BusStop from './BusStop';
import { useRoute } from '@react-navigation/native';
import { routes } from './Routes';

const Tab = createMaterialTopTabNavigator();

const styles = StyleSheet.create({
    border: {
      borderBottomColor: '#E8EDF1',
      borderBottomWidth: 2,
    },
  })

const TimeSchedule = () => {
    const route = useRoute();
    const routeId = route.params.routeId - 1;

    const [startHour, startMin] = routes[routeId].start.split(':');
    const [endHour, endMin] = routes[routeId].end.split(':');

    const time = [];
    
    let currHour = +startHour, currMin = +startMin;
    while (currHour < +endHour || (currHour === +endHour && currMin < +endMin)) {
        let curr = [currHour < 10 ? `0${currHour}` : currHour, currMin < 10 ? `0${currMin}` : currMin].join(':');
        time.push(curr);
        if (currMin + 15 >= 60) {
            currMin = (currMin + 15) - 60;
            currHour += 1;
        } else {
            currMin += 15;
        }
    }
    time.push(routes[routeId].end);

    return (
        <ScrollView className='flex flex-col bg-white gap-0 pr-4 pl-4'>
            {time.map((item) => {
                return (
                    <View className='p-2' style={styles.border}>
                        <Text className='font-semibold'>{item}</Text>
                    </View>
                )
            })}
        </ScrollView>
    )
}

const Info = () => {
    const route = useRoute();
    const routeId = route.params.routeId;
    return (
        <View className='bg-white rounded-sm p-4'>
            {routes.filter((item) => item.id === routeId).map((item) => {
                return (
                    <View className='flex flex-col gap-3'>
                        <View className='flex flex-row'>
                            <View className='w-32'>
                                <Text className='font-bold'>Tuyến số</Text>
                            </View>
                            <Text>{item.route}</Text>
                        </View>

                        <View className='flex flex-row'>
                            <View className='w-32'>
                                <Text className='font-bold'>Tên tuyến</Text>
                            </View>
                            <Text>{item.from} - {item.to}</Text>
                        </View>

                        <View className='flex flex-row'>
                            <View className='w-32'>
                                <Text className='font-bold'>Thời gian</Text>
                            </View>
                            <Text>{item.start} - {item.end}</Text>
                        </View>

                        <View className='flex flex-row'>
                            <View className='w-32'>
                                <Text className='font-bold'>Giá vé</Text>
                            </View>
                            <Text>{item.price}</Text>
                        </View>

                        <View className='flex flex-row'>
                            <View className='w-32'>
                                <Text className='font-bold'>Giá vé HSSV</Text>
                            </View>
                            <Text>{item.stuPrice}</Text>
                        </View>

                        <View className='flex flex-row'>
                            <View className='w-32'>
                                <Text className='font-bold'>Loại tuyến</Text>
                            </View>
                            <Text>{item.type}</Text>
                        </View>

                        <View className='flex flex-row'>
                            <View className='w-32'>
                                <Text className='font-bold'>Giãn cách tuyến</Text>
                            </View>
                            <Text>{item.interval}</Text>
                        </View>

                        <View className='flex flex-row'>
                            <View className='w-32'>
                                <Text className='font-bold'>Số chuyến</Text>
                            </View>
                            <Text>{item.times}</Text>
                        </View>
                    </View>
                )
            })}
        </View>
    )
}

const RouteInfo = () => {
    const route = useRoute();
    const routeId = route.params.routeId;

    return (
        <Tab.Navigator>
            <Tab.Screen name="Time Schedule" component={TimeSchedule} initialParams={{routeId : routeId}} />
            <Tab.Screen name="Bus Stop" component={BusStop} initialParams={{routeId : routeId}} />
            <Tab.Screen name="Route Info" component={Info} initialParams={{routeId : routeId}} />
        </Tab.Navigator>
    );
}

export default RouteInfo