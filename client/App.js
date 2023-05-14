import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Homepage from './src/screens/Map/Homepage';
import RouteList from './src/screens/Route/RouteList';
import UserProfile from './src/screens/UserProfile/UserProfile';
import Notification from './src/screens/Notification/Notification';
import SplashScreen from './src/screens/Login/SplashScreen';
import OnboardingScreen from './src/screens/Login/OnboardingScreen';
import Login from './src/screens/Login/Login';
import Signup from './src/screens/Login/Signup';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Home() {
  const navigate = useNavigation();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Map" component={Homepage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="map" size={size} color={color} />
          ),
          tabBarActiveTintColor: '#009580',
          headerShown: false,
        }}
      />
      <Tab.Screen name="Route" component={RouteList}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="route" size={size} color={color} />
          ),
          tabBarActiveTintColor: '#009580',
          headerShown: false,
        }}
      />
      <Tab.Screen name="Notification" component={Notification}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-notifications" size={size} color={color} />
          ),
          tabBarActiveTintColor: '#009580',
          headerShown: false,
        }}
      />
      <Tab.Screen name="User Profile" component={UserProfile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-alt" size={size} color={color} />
          ),
          tabBarActiveTintColor: '#009580',
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  )
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SplashScreen'>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} 
        options={{ cardStyle: { backgroundColor: '#fff' }, headerStyle: { backgroundColor: '#009580' }, headerTintColor: '#fff' }}/>
        <Stack.Screen name="Signup" component={Signup} 
        options={{ cardStyle: { backgroundColor: '#fff' }, headerStyle: { backgroundColor: '#009580' }, headerTintColor: '#fff' }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

