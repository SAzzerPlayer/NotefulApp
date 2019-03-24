import React from 'react';
import {View,Text,Button,AsyncStorage} from 'react-native';
import styles from './Styles';

export default class UserTempScreen extends React.Component{
    _LogOut = async ()=>{
        await AsyncStorage.setItem('User',JSON.stringify(null));
        this.props.navigation.navigate('Authentication');
    };
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return(
            <View style={styles.BackgroundView}>
                <Text>UserTempScreen</Text>
                <Button
                    onPress={this._LogOut}
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