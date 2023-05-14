import { View, Text, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import HelpCenter from './HelpCenter'
import About from './About'
import { createStackNavigator } from '@react-navigation/stack'
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import SelectDropdown from 'react-native-select-dropdown'
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native'
const Stack = createStackNavigator()

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#009580',
  },
  backgroundColor: {
    backgroundColor: '#F5F7F9'
  }
})
const UserProfileMain = () => {
  const navigate = useNavigation();
  const [lastName, setLastName] = useState('Nguyen')
  const [firstName, setFirstName] = useState('Van A')
  const [gender, setGender] = useState('Male')
  const [phone, setPhone] = useState('0123456789')
  const [dob, setDob] = useState('01/01/2000')
  const [email, setEmail] = useState('hi@gmail.com')

  const Gender = ['Male', 'Female', 'Other']

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [date1, setDate1] = useState(new Date());
  const [date2, setDate2] = useState(new Date());
  const [mode1, setMode1] = useState('date');
  const [mode2, setMode2] = useState('date');
  const onChangeDateOfBirth = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow1(false);
    setDate1(currentDate);
    temp = new Date(currentDate);
    setDob(temp.getDate() + '/' + (temp.getMonth() + 1) + '/' + temp.getFullYear());
  };
  const showMode1 = (currentMode) => {
    if (Platform.OS === 'android') {
      setShow1(true);
    }
    setMode1(currentMode);
  };
  const showTimepicker1 = () => {
    showMode1('date');
  };
  return (
    <View className=''>
      {/* Header */}
      <View className="flex flex-row justify-between shadow-sm px-5 items-center" style={styles.header}>
        <Text className='font-bold text-xl text-white mt-5'>User Profile</Text>
        <View className='flex flex-row gap-4 mt-1'>
          <TouchableOpacity onPress={() => navigate.navigate('Help Center')}>
            <AntDesign name="questioncircleo" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate.navigate('About')}>
            <Feather name="info" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      {/* Body */}
      <ScrollView>
        <Image source={require('../../images/userBackground.png')} style={{ width: '100%', height: 200 }} />
        <View className='flex flex-row justify-center items-center'>
          <Image source={require('../../images/userAvatar.png')} style={{ width: 100, height: 100, marginTop: -50 }} />
        </View>

        <View style={styles.backgroundColor} className = 'p-5 rounded-lg flex flex-col gap-1 mt-5'>
          <View className='flex flex-row items-center justify-between'>
            <Text className = 'font-bold'>Last Name</Text>
            <TextInput onChangeText={text => setLastName(text)} value={lastName}
              className='border border-gray-200 rounded-lg p-1 bg-white'
            />
          </View>
          <View className='flex flex-row  items-center justify-between'>
            <Text className = 'font-bold'>First Name</Text>
            <TextInput onChangeText={text => setFirstName(text)} value={firstName}
              className='border border-gray-200 rounded-lg p-1 bg-white'
            />
          </View>
          <View className='flex flex-row items-center justify-between'>
            <Text className = 'font-bold'>Gender</Text>
            <SelectDropdown
              data={Gender}
              onSelect={(selectedItem, index) => {
                setGender(selectedItem)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                return item
              }}
              defaultValue={gender}
              buttonStyle={{ width: 100, height: 30, backgroundColor: '#fff', borderRadius: 5, borderColor: '#ccc', borderWidth: 1 }}
            />
          </View>
          <View className='flex flex-row items-center justify-between'>
            <Text className = 'font-bold'>Phone</Text>
            <TextInput onChangeText={text => setPhone(text)} value={phone}
              className='border border-gray-200 rounded-lg p-1 bg-white'
            />
          </View>
          <View className='flex flex-row items-center justify-between'>
            <Text className = 'font-bold'>Date of Birth</Text>
            <TouchableOpacity onPress={showTimepicker1}>
              <Text className='border rounded-lg border-gray-200 p-1 bg-white'>
                {dob}
              </Text>
            </TouchableOpacity>
            {show1 && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date1}
                mode={mode1}
                onChange={onChangeDateOfBirth}
              />
            )}
          </View>
          <View className='flex flex-row items-center justify-between'>
            <Text className = 'font-bold'>Email</Text>
            <TextInput onChangeText={text => setEmail(text)} value={email}
              className='border border-gray-200 rounded-lg p-1 bg-white'
            />
          </View>

        </View>
        <View className='items-center flex'>
          <TouchableOpacity
            className=' rounded-lg p-2 mt-5' style={{ backgroundColor: '#009580' }}
          >
            <Text className='text-white font-bold'>Save Changes</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}
const UserProfile = () => {
  return (
    <Stack.Navigator initialRouteName='UserProfile'>
      <Stack.Screen name="UserProfile" component={UserProfileMain}
        options={{ headerShown: false, cardStyle: { backgroundColor: '#fff' } }} />
      <Stack.Screen name="Help Center" component={HelpCenter}
        options={{ cardStyle: { backgroundColor: '#fff' }, headerStyle: { backgroundColor: '#009580' }, headerTintColor: '#fff' }} />
      <Stack.Screen name="About" component={About}
        options={{ cardStyle: { backgroundColor: '#fff' }, headerStyle: { backgroundColor: '#009580' }, headerTintColor: '#fff' }} />
    </Stack.Navigator>
  )
}

export default UserProfile