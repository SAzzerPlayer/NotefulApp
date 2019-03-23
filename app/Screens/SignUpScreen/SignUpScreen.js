import React from 'react';
import {View,Text,Image,TextInput,TouchableOpacity} from 'react-native';
import styles from './Styles';

export default class SignUpScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {isOpenedPassword:false};
    }
    render(){
        return(
            <View style={styles.BackgroundView}>
                <View style={styles.TopView}>
                    <Text style={styles.TitleFontText}>
                        NEW ACCOUNT
                    </Text>
                </View>
                <View style={styles.MiddleView}>
                    <View style={styles.MiddleViewMargin}>
                        <View style={styles.FieldView}>
                            <Text style={styles.FieldFontText}>
                                FIRST NAME
                            </Text>
                            <TextInput
                                style={styles.FieldInputText}
                                placeholder={'First name'}
                            />
                        </View>
                        <View style={styles.FieldView}>
                            <Text style={styles.FieldFontText}>
                                SURNAME
                            </Text>
                            <TextInput
                                style={styles.FieldInputText}
                                placeholder={'Surname'}
                            />
                        </View>
                        <View style={styles.FieldView}>
                            <Text style={styles.FieldFontText}>
                                EMAIL
                            </Text>
                            <TextInput
                                style={styles.FieldInputText}
                                placeholder={'Email address'}
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
                                    secureTextEntry={!this.state.isOpenedPassword}
                                />
                                <TouchableOpacity
                                    onPress={()=>{this.setState({isOpenedPassword:!this.state.isOpenedPassword})}}
                                >
                                    {(!this.state.isOpenedPassword &&
                                        <Image
                                            style={styles.FieldPasswordImage}
                                            source={require('./materials/eyePasswordClose.png')}
                                            resizeMode={'cover'}
                                        />)}
                                    {(this.state.isOpenedPassword &&
                                        <Image
                                            style={styles.FieldPasswordImage}
                                            source={require('./materials/eyePasswordOpen.png')}
                                            resizeMode={'cover'}
                                        />)}
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.ButtonsNavigateView}>
                            <TouchableOpacity
                                onPress={()=>{this.props.navigation.navigate('Welcome')}}
                            >
                                <Text style={styles.ButtonsNavigateText}>
                                    ←BACK
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={()=>{this.props.navigation.navigate('UserProfile')}}
                            >
                                <Text style={styles.ButtonsNavigateText}>
                                    SIGN UP→
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