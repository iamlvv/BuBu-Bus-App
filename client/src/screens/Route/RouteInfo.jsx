import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BusStop from './BusStop';

const Tab = createMaterialTopTabNavigator();

const TimeSchedule = () => {
    return (
        <View>
            <Text>TimeSchedule</Text>
        </View>
    )
}

const Info = () => {
    return (
        <View>
            <Text>Route Info</Text>
        </View>
    )
}

const RouteInfo = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="TimeSchedule" component={TimeSchedule} />
            <Tab.Screen name="BusStop" component={BusStop} />
            <Tab.Screen name="Route Info" component={Info} />
        </Tab.Navigator>
    );
}

export default RouteInfo