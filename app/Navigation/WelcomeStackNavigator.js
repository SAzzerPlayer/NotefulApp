import React from 'react';
import {createStackNavigator} from 'react-navigation';
import SignInStackNavigator from './SignInStackNavigator';
import WelcomeScreen from '../Screens/WelcomeScreen/WelcomeScreen';
import SignUpScreen from '../Screens/SignUpScreen/SignUpScreen'
export default WelcomeStackNavigator = createStackNavigator({
        Welcome: WelcomeScreen,
        SignIn: SignInStackNavigator,
        SignUp: SignUpScreen
    },
    {
        initialRouteName:'Welcome',
        headerMode: 'none'
    });