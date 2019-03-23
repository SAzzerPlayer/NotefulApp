import React from 'react';
import {View,Text,Button} from 'react-native';
import styles from './Styles';

export default class UserTempScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return(
            <View style={styles.BackgroundView}>
                <Text>UserTempScreen</Text>
                <Button
                    onPress={()=>{this.props.navigation.navigate('Authentication')}}
                    title={'Log out'}
                />
                <Button
                    onPress={()=>{this.props.navigation.navigate('Settings')}}
                    title={'Settings'}
                />
            </View>
        );
    }
}