import React from 'react';
import {View,Text,TextInput,TouchableOpacity,Image} from 'react-native';
import styles from './Styles';

export default class ForgotPassScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={isRightEmail:false,isOpenedPassword:false};
    }
    render(){
        return(
            <View style={styles.BackgroundView}>
                <View style={styles.TopView}>
                    <Text style={styles.TitleFontText}>
                        FORGOT PASSWORD
                    </Text>
                </View>
                <View style={styles.MiddleView}>
                    <View style={styles.MiddleViewMargin}>
                        <View style={styles.FieldView}>
                            {(!this.state.isRightEmail &&
                                <Text style={styles.FieldFontText}>
                                    EMAIL ADDRESS
                                </Text>)}
                            {(this.state.isRightEmail &&
                                <Text style={styles.FieldFontText}>
                                    NEW PASSWORD
                                </Text>)}
                            {(!this.state.isRightEmail &&
                                <TextInput
                                    style={styles.FieldInputText}
                                    placeholder={'Email address'}
                                />
                            )}
                            {(this.state.isRightEmail &&
                                <View style={styles.FieldPasswordView}>
                                    <TextInput
                                        secureTextEntry={!this.state.isOpenedPassword}
                                        style={styles.FieldPasswordInput}
                                        placeholder={'Password'}
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
                            )}
                        </View>
                        <View style={styles.ButtonsNavigateView}>
                            {(!this.state.isRightEmail &&
                                <TouchableOpacity
                                onPress = {()=>{this.props.navigation.navigate('SignIn')}}
                            >
                                <Text style={styles.ButtonsNavigateText}>
                                    ←BACK
                                </Text>
                            </TouchableOpacity>)}
                            {(this.state.isRightEmail &&
                                <TouchableOpacity
                                    onPress = {()=>{this.setState({isRightEmail:false})}}
                                >
                                    <Text style={styles.ButtonsNavigateText}>
                                        ←CANCEL
                                    </Text>
                                </TouchableOpacity>)}
                            {(!this.state.isRightEmail &&
                                <TouchableOpacity
                                    onPress={()=>{this.setState({isRightEmail:true})}}
                                >
                                <Text style={styles.ButtonsNavigateText}>
                                    RECOVER→
                                </Text>
                            </TouchableOpacity>)}
                            {(this.state.isRightEmail &&
                                <TouchableOpacity
                                    onPress={()=>{
                                        this.setState({isRightEmail:false});
                                        this.props.navigation.navigate('UserProfile')
                                    }}
                                >
                                    <Text style={styles.ButtonsNavigateText}>
                                        CHANGE→
                                    </Text>
                                </TouchableOpacity>)}
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}