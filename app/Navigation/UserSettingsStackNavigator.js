import {createStackNavigator} from 'react-navigation';
import UserSettingsScreen from '../Screens/UserSettingsScreen/UserSettingsScreen';
import GDPRScreen from '../Screens/GDPRScreen/GDPRScreen';

export default UserSettingsStackNavigator = createStackNavigator({
    Settings:UserSettingsScreen,
    GDPR:GDPRScreen
    },
    {
        initialRouteName: 'Settings',
        headerMode:'none'
    });