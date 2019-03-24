import React from 'react';
import {createStackNavigator} from 'react-navigation';
import UserTempScreen from '../Screens/UserTempScreen/UserTempScreen';
import UserSettingStackNavigator from './UserSettingsStackNavigator';

export default UserTempStack = createStackNavigator({
    UserTemp: UserTempScreen,
    UserSettings: UserSettingStackNavigator
},
    {
        initialRouteName: 'UserTemp',
        headerMode: 'none'
    })