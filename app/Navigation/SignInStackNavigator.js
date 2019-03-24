import React from 'react';
import {createStackNavigator} from 'react-navigation';
import SignInScreen from '../Screens/SignInScreen/SignInScreen';
import ForgotPassScreen from '../Screens/ForgotPassScreen/ForgotPassScreen';

export default SignInStackNavigator = createStackNavigator({
    SignIn: SignInScreen,
    ForgotPass: ForgotPassScreen
},
    {
        initialRouteName: "SignIn",
        headerMode: 'none'
    });
