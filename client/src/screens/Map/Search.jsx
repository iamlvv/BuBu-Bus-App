import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchResult from './SearchResult';
const Stack = createStackNavigator();

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1, //the container will fill the whole screen.
        alignItems: "center",
        // backgroundColor: '#F5F5F5',
        backgroundColor: '#fff',
    },
    searchBtn: {
        backgroundColor: '#006657',
    },
    recentTrips: {
        color: '#006657',
    }
});

const RecentSearchList = () => {
    return (
        <ScrollView className='bg-white border border-gray-300'>
            <View className='ml-5 mt-3 flex flex-row justify-between items-center'>
                <Text style={
                    styles.recentTrips
                } className='font-bold text-base'>Recent trips</Text>
            </View>
            {
                [...Array(2)].map((e, i) => <SearchItem key={i} />)
            }
        </ScrollView>
    )
};

const SearchItem = () => {
    const navigate = useNavigation();
    return (
        <View className='w-full px-10 py-5'>
            <TouchableOpacity className='flex flex-row justify-between items-center' onPress={() => {
                navigate.navigate('SearchResult');
            }}>
                <Image source={require('../../images/bus-icon.png')} className='w-8 h-8' />
                <View className='mr-10 ml-5'>
                    <View className='my-1 flex flex-row justify-between'>
                        <Text className='font-bold'>Bus {Math.floor(Math.random() * 50 + 1)}</Text>
                        <Text className='font-bold'>{Math.floor(Math.random() * 30 + 1)}/{Math.floor(Math.random() * 12 + 1)}</Text>
                    </View>
                    <View className='my-1 h-5 w-72'>
                        <Text className='text-gray-400'>Diamond Plaza, Le Duan Street, Ben Nghe
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const SearchList = () => {
    return (
        <ScrollView className='bg-white border border-gray-300'>
            <View className='mr-10 ml-5 mt-3 flex flex-row justify-between items-center'>
                <Text style={
                    styles.recentTrips
                } className='font-bold text-base'>Search result</Text>
            </View>
            {
                [...Array(20)].map((e, i) => <SearchItem key={i} />)
            }
        </ScrollView>
    )
}

const Search = () => {
    const [startLoc, setStartLoc] = useState('');
    const [endLoc, setEndLoc] = useState('');
    const [searchResult, setSearchResult] = useState(false);
    const handleSearch = () => {
        if (startLoc !== '' || endLoc !== '')
            setSearchResult(true);
    }
    return (
        <View style={styles.container}>
            {/* Search input */}
            <View className='mt-5'>
                {/* Start location search input */}
                <View className='rounded-lg w-3/4 my-3 flex flex-row justify-evenly items-center bg-white border border-gray-300'>
                    <Image source={require('../../images/search-icon.png')} className='w-5 h-5' />
                    <TextInput placeholder='Please enter your start location...'
                        className='py-3 pr-5'
                        keyboardType='email-address'
                        value={startLoc || ""}
                        // caretHidden={true}
                        onChangeText={(text) => {
                            setStartLoc(text);
                            setSearchResult(false);
                        }}
                    />
                </View>
                {/* End location search input */}
                <View className='rounded-lg w-3/4 my-3 flex flex-row justify-evenly items-center bg-white border border-gray-300'>
                    <Image source={require('../../images/search-icon.png')} className='w-5 h-5' />
                    <TextInput placeholder='Please enter your start location...'
                        className='py-3 pr-5'
                        keyboardType='email-address'
                        value={endLoc || ""}
                        // caretHidden={true}
                        onChangeText={(text) => {
                            setEndLoc(text);
                            setSearchResult(false);
                        }}
                    />
                </View>
            </View>
            {/* Search button */}
            <TouchableOpacity className='m-5 w-3/4 py-3 flex flex-row items-center justify-center rounded-lg' style={styles.searchBtn} onPress={handleSearch}>
                <Text className='text-white'>Search</Text>
            </TouchableOpacity>
            {/* Search result */}

            {
                searchResult ? (<SearchList />) : (<RecentSearchList></RecentSearchList>)
            }
        </View>
    );
}

// const Search = () => {
//     return (
//         <Stack.Navigator initialRouteName='Homepage'>
//             <Stack.Screen
//                 name="SearchMain"
//                 component={SearchMain}
//                 options={{ headerShown: false }}
//             />
//             <Stack.Screen
//                 name="SearchResult"
//                 component={SearchResult}
//                 options={{
//                     cardStyle: { backgroundColor: '#fff' },
//                     headerStyle: { backgroundColor: '#009580' }, headerTintColor: '#fff'
//                 }}
//             />
//         </Stack.Navigator>
//     )
// }

export default Search;