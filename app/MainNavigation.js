import React from 'react';
import {createSwitchNavigator} from 'react-navigation';
import {View,Text} from 'react-native';
import WelcomeStackNavigator from './Screens/WelcomeScreen/WelcomeStackNavigator';

const MainNavigator = createSwitchNavigator({
   Start: WelcomeStackNavigator,
},
    {
        initialRouteName: 'Start'
    });
export default MainNavigator;