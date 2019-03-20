import React from 'react';
import {View,Text,Button} from 'react-native';
import styles from './Styles';

export default class SignInScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return(
            <View>
                <Text>SignInScreen</Text>
                <Button onPress={()=>{this.props.navigation.navigate('ForgotPass')}} title={'Forgot'}/>
            </View>
        );
    }
}