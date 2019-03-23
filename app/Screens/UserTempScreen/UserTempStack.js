import React from 'react';
import {createStackNavigator} from 'react-navigation';
import UserTempScreen from './UserTempScreen';
import UserSettingStackNavigator from '../UserSettingsScreen/UserSettingsStackNavigator';

export default UserTempStack = createStackNavigator({
    UserTemp: UserTempScreen,
    UserSettings: UserSettingStackNavigator
},
    {
        initialRouteName: 'UserTemp',
        headerMode: 'none'
    })