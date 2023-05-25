import { View, Text, StyleSheet, Button, Dimensions, Platform, Animated, PanResponder, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import { Portal } from 'react-native-paper'
import busList from './BusList';
import { AntDesign } from '@expo/vector-icons';


const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get('window');
const BOTTOM_SHEET_MAX_HEIGHT = WINDOW_HEIGHT * 0.6;
const BOTTOM_SHEET_MIN_HEIGHT = WINDOW_HEIGHT * 0.1;
const MAX_UPWARD_TRANSLATE_Y = BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT;
const MAX_DOWNWARD_TRANSLATE_Y = 0;
const DRAG_THRESHOLD = 50;
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    bottomSheet: {
        position: 'absolute',
        width: '100%',
        height: BOTTOM_SHEET_MAX_HEIGHT,
        bottom: BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT,
        backgroundColor: 'white',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: -3,
                },
                shadowOpacity: 0.29,
                shadowRadius: 4.65,
            },
            android: {
                //elevation: 3,
                shadowColor: '#000',
                shadowOffset: {
                    width: 2,
                    height: 2,
                },
                shadowOpacity: 1,
                shadowRadius: 6,
            },
        }),
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    draggHandle: {
        width: 40,
        height: 5,
        backgroundColor: 'black',
        borderRadius: 5,
        alignSelf: 'center',
        marginTop: 5,
    },
    draggableArea: {

        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mapSearch: {
        width: 450
    },
    width: {
        width: 200
    }

});
const SearchResult = () => {
    const [show, setShow] = useState(false);
    const animatedValue = useRef(new Animated.Value(0)).current;
    const lastGestureDy = useRef(0);
    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                animatedValue.setOffset(lastGestureDy.current);
                animatedValue.setValue(0);
            },
            onPanResponderMove: (e, gesture) => {
                animatedValue.setValue(gesture.dy);
            }

            ,
            onPanResponderRelease: (e, gesture) => {
                animatedValue.flattenOffset();
                lastGestureDy.current += gesture.dy;
                if (gesture.dy > 0) {
                    if (gesture.dy <= DRAG_THRESHOLD) {
                        springAnimation('up')
                    }
                    else {
                        springAnimation('down')
                    }
                }
                else {
                    if (gesture.dy >= -DRAG_THRESHOLD) {
                        springAnimation('down')
                    }
                    else {
                        springAnimation('up')
                    }
                }
            },

        })
    ).current;

    const springAnimation = (direction) => {
        lastGestureDy.current = direction === 'up' ? MAX_UPWARD_TRANSLATE_Y : MAX_DOWNWARD_TRANSLATE_Y;
        Animated.spring(animatedValue, {
            toValue: lastGestureDy.current,
            useNativeDriver: true,
        }).start();
    }
    const bottomSheetAnimation = {
        transform: [
            {
                translateY: animatedValue.interpolate({
                    inputRange: [MAX_UPWARD_TRANSLATE_Y, MAX_DOWNWARD_TRANSLATE_Y],
                    outputRange: [MAX_UPWARD_TRANSLATE_Y, MAX_DOWNWARD_TRANSLATE_Y],
                    extrapolate: 'clamp',
                }),
            }
        ]

    }

    return (
        <View style={styles.container}>
            <Image source={require('../../images/mapSearch.png')} style={styles.mapSearch} />
            <Animated.View style={[styles.bottomSheet, bottomSheetAnimation]}>
                <View style={styles.draggableArea} {...panResponder.panHandlers}>
                    <View style={styles.draggHandle}>
                    </View>
                </View>
                <ScrollView>
                    {show ? <View>
                        <ScrollView>
                            <View className = 'flex flex-row justify-between mr-10'>
                            <Text></Text>
                            <TouchableOpacity onPress={() => {
                                setShow((prev) => !prev)
                            }}
                                className='bg-red-300 px-3 py-2 rounded-md'
                            >
                                <Text className='font-bold text-white'>Close</Text>
                            </TouchableOpacity>
                            </View>
                            
                            <View className='flex flex-row justify-center gap-5 items-center mt-3'>
                                <Image source={require('../../images/busSearchInfo.png')} />
                                <Text className='font-bold'>Bus 8</Text>
                                <AntDesign name="arrowright" size={24} color="black" />
                                <Image source={require('../../images/busSearchInfo.png')} />
                                <Text className='font-bold'>Bus 10</Text>
                            </View>
                            <View className='flex flex-row items-center justify-between ml-10 mr-10 mt-5'>
                                <View>
                                    <View className='flex flex-row gap-9 mb-5'>
                                        <Text className='font-bold'>Time Total:</Text>
                                        <Text className='text-green-500 font-bold'>20 min</Text>
                                    </View>
                                    <View className='flex flex-row gap-9'>
                                        <Text className='font-bold'>Price Total:</Text>
                                        <Text className='text-orange-500 font-bold'>14000 VND</Text>
                                    </View>
                                </View>
                                <View>
                                    <Text className='bg-red-200 text-red-500 font-bold px-2 py-3 rounded-2xl'>Crowded</Text>
                                </View>
                            </View>
                            <View className='mt-10 ml-10 flex flex-row'>
                                <Image source={require('../../images/column.png')} />
                                <View className='ml-10 mb-5'>
                                    <Text>Your location</Text>
                                    <Text className='mt-12 mb-5'>Walking for 80m</Text>
                                    <View className='flex flex-col'>
                                        <Text className='font-bold mb-5'>1491 Huynh Tan Phat</Text>
                                        <View>
                                            <View className='flex flex-row gap-9 items-center'>
                                                <Text className='font bold text-white bg-green-700 rounded-lg px-3 py-1'>8</Text>
                                                <View>
                                                    <Text className='font-bold'>50F 01723</Text>
                                                    <Text>arrive after: 3min</Text>
                                                </View>
                                            </View>
                                            <View className='flex flex-row gap-8 items-center'>
                                                <Image source={require('../../images/tick.png')} />
                                                <View>
                                                    <Text>6 stations</Text>
                                                    <Text>35 min</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <Text className='mt-10 font-bold'>Ham Nghi Bus Depot</Text>
                                    </View>
                                    <View className='flex flex-col mt-16'>
                                        <Text className='font-bold mb-10'>140 Ham Nghi</Text>
                                        <View>
                                            <View className='flex flex-row gap-9 items-center'>
                                                <Text className='font bold text-white bg-green-700 rounded-lg px-3 py-1'>10</Text>
                                                <View>
                                                    <Text>51F 33845</Text>
                                                    <Text>arrive after: 3min</Text>
                                                </View>
                                            </View>
                                            <View className='flex flex-row gap-8 items-center'>
                                                <Image source={require('../../images/tick.png')} />
                                                <View>
                                                    <Text>18 stations</Text>
                                                    <Text>40 min</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <Text className='mt-7 font-bold'>Vincom Dong Khoi</Text>
                                        <Text className='font-bold mt-10'>Your Destination</Text>
                                        <Text style={styles.width}>Vincom Dong Khoi, Dong Khoi, Ben Nghe,
                                            Quan 1, Tp.HCM</Text>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>

                    </View>
                        :
                        busList.map((item, index) => {
                            return (
                                <TouchableOpacity key={item.id}
                                    onPress={() => {
                                        console.log(show)
                                        setShow(!show)
                                        console.log('open')
                                    }}
                                >
                                    <View className='flex flex-row justify-between ml-5 mr-5 mb-5' >
                                        <View className='flex flex-row gap-2'>
                                            <Image source={require('../../images/busSearchResult.png')} />
                                            <View>
                                                <Text className='font-bold'>{item.name}</Text>
                                                <Text className='text-gray-600'>{item.price}</Text>
                                            </View>
                                        </View>
                                        <Text className={item.property == 'fast' ? 'text-green-500 font-bold' :
                                            item.property == 'medium' ? 'text-yellow-500 font-bold' : 'text-red-500 font-bold'
                                        }>{item.time}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        })}
                </ScrollView>
            </Animated.View>
        </View>
    )
}

export default SearchResult