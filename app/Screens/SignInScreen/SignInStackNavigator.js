import React from 'react';
import {createStackNavigator} from 'react-navigation';
import SignInScreen from './SignInScreen';
import ForgotPassScreen from '../ForgotPassScreen/ForgotPassScreen';

export default SignInStackNavigator = createStackNavigator({
    SignIn: SignInScreen,
    ForgotPass: ForgotPassScreen
},
    {
        initialRouteName: "SignIn",
        headerMode: 'none'
    });
