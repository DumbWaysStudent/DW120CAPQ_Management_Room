import React from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView, Image } from 'react-native';
import { Icon } from 'native-base';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

//checkin
//room
//customer
//setting

import CheckinScreen from '../src/screen/CheckinScreen';
import RoomScreen from '../src/screen/RoomScreen';
import InsertRoomScreen from '../src/screen/InsertRoomScreen';
import UpdateRoomScreen from '../src/screen/UpdateRoomScreen';
import UpdatingRoomScreens from '../src/screen/UpdatingRoomScreens';


import CustomerScreen from '../src/screen/CustomerScreen';
import SettingScreen from '../src/screen/SettingScreen';
import LoginScreen from '../src/screen/LoginScreen';


const TabNavigator = createBottomTabNavigator({
    Checkin: {
        screen: CheckinScreen,
        navigationOptions: {
            tabBarLabel: 'Checkin',
            tabBarIcon: ({ tintColor }) => (
                <Icon type="FontAwesome" name="th-large" size={25} />
            )
        }
    },
    Room: {
        screen: RoomScreen,
        navigationOptions: {
            tabBarLabel: 'ROOM',
            tabBarIcon: ({ tintColor }) => (
                <Icon type="FontAwesome" name="th-large" size={25} />
            )
        }
    },
    Customer: {
        screen: CustomerScreen,
        navigationOptions: {
            tabBarLabel: 'CUSTOMER',
            tabBarIcon: ({ tintColor }) => (
                <Icon type="FontAwesome" name="th-large" size={25} />
            )
        }
    },
    Setting: {
        screen: SettingScreen,
        navigationOptions: {
            tabBarLabel: 'SETTING',
            tabBarIcon: ({ tintColor }) => (
                <Icon type="FontAwesome" name="th-large" size={25} />
            )
        }
    },
}, {
    tabBarOptions: {
        activeTintColor: 'grey',
        inactiveTintColor: 'grey'
    }
},
    {
        initialRouteName: 'Checkin',
    }
);

const AppNavigator = createStackNavigator(
    {
        Checkin: {
            screen: TabNavigator,
            navigationOptions: {
                //headerTitle: 'home'
                header: null
            }
        },
        Login: {
            screen: LoginScreen,
            navigationOptions: {
                header: null
            }
        },
        InsertRoom: {
            screen: InsertRoomScreen,
            navigationOptions: {
                header: null
            }
        },
        UpdatingRoom: {
            screen: UpdateRoomScreen,
            navigationOptions: {
                header: null
            }
        },
        Updating: {
            screen: UpdatingRoomScreens,
            navigationOptions: {
                header: null
            }
        }

    },
    {
        initialRouteName: 'Login',
        defaultNavigationOptions: {
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }
    }
);

export default createAppContainer(AppNavigator);