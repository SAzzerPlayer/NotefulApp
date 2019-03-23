import React from 'react';
import {createStackNavigator} from 'react-navigation';
import SignInStackNavigator from '../SignInScreen/SignInStackNavigator';
import WelcomeScreen from './WelcomeScreen';
import SignUpScreen from '../SignUpScreen/SignUpScreen'
export default WelcomeStackNavigator = createStackNavigator({
        Welcome: WelcomeScreen,
        SignIn: SignInStackNavigator,
        SignUp: SignUpScreen
    },
    {
        initialRouteName:'Welcome',
        headerMode: 'none'
    });