import React from 'react';
import {View,Text,Button,Image} from 'react-native';
import styles from "./Styles";

export default class WelcomeScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {IsUserAuthed:false};
    }
    render() {
        return (
            <View style={{flex:1}}>
                <View>
                    <Text style={{fontFamily:'segoe-ui'}}>
                        WELCOME TO
                    </Text>
                    <Text style={{fontFamily:'segoe-ui'}}>
                        the demo version of
                    </Text>
                </View>
                <View>
                    <Image/>
                    <View>
                        <Text>

                        </Text>
                    </View>
                </View>
                <View>

                </View>
            </View>
        );
    }
}