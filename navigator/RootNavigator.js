import React from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView, Image } from 'react-native';
import { Icon } from 'native-base';



import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from '../src/screen/HomeScreen';
import DetailScreen from '../src/screen/DetailScreen';
import DetailEpisode from '../src/screen/DetailEpisode';
import Creation from '../src/screen/Creation';
import Create from '../src/screen/Create';
import EditProfile from '../src/screen/EditProfile';
import LoginScreen from '../src/screen/LoginScreen';
import CreateImage from '../src/screen/CreateImage';
import UpdateScreen from '../src/screen/UpdateScreen';
import UpdateImgScreen from '../src/screen/UpdateImgScreen';
import RegisterScreen from '../src/screen/RegisterScreen';
import Favourite from '../src/screen/Favourite';

import Profile from '../src/screen/Profile';


const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: 'FOR YOU',
            tabBarIcon: ({ tintColor }) => (
                <Icon type="FontAwesome" name="th-large" size={25} />
            )
        }
    },
    Fav: {
        screen: Favourite,
        navigationOptions: {
            tabBarLabel: 'FAVOURITE',
            tabBarIcon: ({ tintColor }) => (
                <Icon type="FontAwesome" name="star" size={25} />
            )
        }
    },
    Prof: {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: 'PROFILE',
            tabBarIcon: ({ tintColor }) => (
                <Icon type="FontAwesome" name="user" size={25} />
            )
        }
    }
}, {
    tabBarOptions: {
        activeTintColor: 'grey',
        inactiveTintColor: 'grey'
    }
},
    {
        initialRouteName: 'Home',
    }
);

const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: TabNavigator,
            navigationOptions: {
                //headerTitle: 'home'
                header: null
            }
        },
        // Fav: {
        //     screen: Favourite,
        //     navigationOptions: {
        //         //headerTitle: 'home'
        //         header: null
        //     }
        // },
        Register: {
            screen: RegisterScreen,
            navigationOptions: {
                header: null
            }
        },
        Detail: DetailScreen,
        Detail_Ep: DetailEpisode,
        Crtn: Creation,
        Crt: {
            screen: Create,
            navigationOptions: {
                //headerTitle: 'home'
                header: null
            }
        },
        Eprofile: {
            screen: EditProfile,
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
        DetailImg: {
            screen: CreateImage,
            navigationOptions: {
                header: null
            }
        },
        Update: {
            screen: UpdateScreen,
            navigationOptions: {
                header: null
            }
        },
        UpdateImg: {
            screen: UpdateImgScreen,
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