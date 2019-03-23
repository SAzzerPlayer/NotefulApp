import React from 'react';
import {View,Text,Image,TouchableOpacity,TextInput} from 'react-native';
import styles from './Styles';

export default class UserSettingsScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return(
            <View style={styles.BackgroundView}>
                <View style={styles.TopView}>
                    <Text style={styles.TitleFontText}>
                        MY SETTINGS
                    </Text>
                    <TouchableOpacity
                        onPress={()=>{this.props.navigation.navigate("Authentication")}}
                    >
                        <Image
                            style={styles.TopImage}
                            source={require('./materials/logout.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.MiddleView}>
                    <View style={styles.MiddleViewMargin}>
                        <View style={styles.FieldView}>
                            <Text style={styles.FieldTextFont}>
                                FIRST NAME
                            </Text>
                            <TextInput
                                style={styles.FieldInputText}
                                placeholder={'First name'}
                            />
                        </View>
                        <View style={styles.FieldView}>
                            <Text style={styles.FieldTextFont}>
                                SURNAME
                            </Text>
                            <TextInput
                                style={styles.FieldInputText}
                                placeholder={'Surname'}
                            />
                        </View>
                        <View style={styles.FieldView}>
                            <Text style={styles.FieldTextFont}>
                                EMAIL ADDRESS
                            </Text>
                            <TextInput
                                style={styles.FieldInputText}
                                placeholder={'Email'}
                            />
                        </View>
                        <View style={styles.ButtonsNavigateTopView}>
                            <TouchableOpacity
                                onPress={()=>{this.props.navigation.navigate('UserTemp')}}
                            >
                                <Text style={styles.ButtonsNavigateText}>
                                    ←BACK
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={()=>{this.props.navigation.navigate('UserTemp')}}
                            >
                                <Text style={styles.ButtonsNavigateText}>
                                    Save changes→
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ButtonsNavigateBottomView}>
                            <TouchableOpacity
                                onPress={()=>{this.props.navigation.navigate('GDPR')}}
                            >
                                <Text style={styles.ButtonsNavigateText}>
                                    Account and Privacy→
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}