import React from 'react';
import {createSwitchNavigator} from 'react-navigation';
import {View,Text} from 'react-native';
import WelcomeStackNavigator from './WelcomeStackNavigator';
import UserTempStack from './UserTempStack';
const MainNavigator = createSwitchNavigator({
    Authentication: WelcomeStackNavigator,
    UserProfile: UserTempStack
},
    {
        initialRouteName: 'Authentication',
    });
export default MainNavigator;
/* Экраны аутентификации, все что с этим связано.
        По сути это одна из больших точек сбора.
        Тут такая связь между экранами:
                                                         1)-> Переход на другую точку(User)
                                         1)SignInScreen
                                                         2)<-> ForgotPasswordScreen
        Authentication: WelcomeScreen <->

                                         2)SignUpScreen ->Переход на другую точку(User)

        User: связка других экранов

         */