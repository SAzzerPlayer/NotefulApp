import {createStackNavigator} from 'react-navigation';
import UserSettingsScreen from './UserSettingsScreen';
import GDPRScreen from '../GDPRScreen/GDPRScreen';

export default UserSettingsStackNavigator = createStackNavigator({
    Settings:UserSettingsScreen,
    GDPR:GDPRScreen
    },
    {
        initialRouteName: 'Settings',
        headerMode:'none'
    });