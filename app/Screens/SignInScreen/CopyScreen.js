import React from 'react';
import {View,Text,TextInput,TouchableOpacity,Image} from 'react-native';
import styles from './Styles';

export default class SignInScreen extends React.Component{
    static navigationOptions={
        header:null
    };
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return(
            <View style={styles.BackgroundView}>
                <View style={styles.TopView}>
                    <Text style={styles.TitleFontText}>
                        SIGN IN
                    </Text>
                </View>
                <View style={styles.MiddleView}>
                    <View style={styles.MiddleViewMargin}>
                        <View style={styles.FieldView}>
                            <Text style={styles.FieldFontText}>
                                EMAIL
                            </Text>
                            <TextInput
                                style={styles.FieldInputText}
                                placeholder={'Email Address'}
                                keyboardType={'email-address'}
                            />
                        </View>
                        <View style={styles.FieldView}>
                            <Text style={styles.FieldFontText}>
                                PASSWORD
                            </Text>
                            <View style={styles.FieldPasswordView}>
                                <TextInput
                                    style={styles.FieldPasswordInput}
                                    placeholder={'Password'}
                                    keyboardType={'visible-password'}
                                />
                                <Image
                                    style={styles.FieldPasswordImage}
                                    source={require('./materials/eyePasswordClose.png')}
                                    resizeMode={'cover'}
                                />
                            </View>
                        </View>
                        <View style={styles.ButtonsNavigateView}>
                            <TouchableOpacity>
                                <Text style={styles.ButtonsNavigateText}>
                                    ←BACK
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.ButtonsNavigateText}>
                                    SIGN IN→
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ForgotPasswordView}>
                            <TouchableOpacity>
                                <Text style={styles.ForgotPasswordText}>
                                    FORGOT PASSWORD
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.BottomView}>
                    <View style={styles.BottomViewMargin}>
                        <TouchableOpacity
                            style={styles.BottomTouchableGoogle}
                        >
                            <Text style={styles.BottomTouchableText}>
                                GOOGLE
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.BottomTouchableLinkedId}
                        >
                            <Text style={styles.BottomTouchableText}>
                                LINKEDIN
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}