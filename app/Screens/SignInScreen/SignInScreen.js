import React from 'react';
import {View,Text,TextInput,AsyncStorage,TouchableOpacity,Image,Alert} from 'react-native';
import styles from './Styles';

export default class SignInScreen extends React.Component{
    static navigationOptions={
        header:null
    };
    _SetUserData = async (userData) =>{
        await AsyncStorage.setItem('User',JSON.stringify(userData));
    };
    _GetUser=async (email)=>{
        let answer=null;
        await fetch('http://10.0.2.2:3000/users/'+email)
            .then((response)=>{return response.json()
                .then((responseJson) => {
                    answer = responseJson;
                })});
        return answer;
    };
    _CheckUser = async (email,password) => {
        let data = await this._GetUser(email);
        if(data.email==null){
            Alert.alert("This email address hasn't existed!");
        }
        else if(data.password !== password){
            Alert.alert("This password is wrong!");
        }
        else{
            this._SetUserData(data);
            this.props.navigation.navigate('UserProfile');
        }
    };
    _Login = () => {
        let regPass = /^[a-zA-Z0-9'][a-zA-Z0-9' ]+[a-zA-Z0-9']?$/;
        let regEmail = /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/;
        if(this.state.email.match(regEmail)==null){
            Alert.alert('Invalid email format');
        }
        else if(this.state.password.match(regPass)==null){
            Alert.alert('Invalid password format');
        }
        else this._CheckUser(this.state.email,this.state.password);
    };
    constructor(props){
        super(props);
        this.state={
            isOpenedPassword:false,
            email:String(),
            password:String()
        };
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
                                placeholderTextColor={'grey'}
                                value={this.state.email}
                                onChangeText={(text)=>{this.setState({email:text})}}
                            />
                        </View>
                            <View style={styles.FieldView}>
                                <Text style={styles.FieldFontText}>
                                PASSWORD
                                </Text>
                            <View style={styles.FieldPasswordView}>
                                <TextInput
                                    secureTextEntry={!this.state.isOpenedPassword}
                                    style={styles.FieldPasswordInput}
                                    placeholder={'Password'}
                                    placeholderTextColor={'grey'}
                                    value={this.state.password}
                                    onChangeText={(text)=>{this.setState({password:text})}}
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
                                onPress={this._Login}
                            >
                                <Text style={styles.ButtonsNavigateText}>
                                    SIGN IN→
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ForgotPasswordView}>
                            <TouchableOpacity
                                onPress={()=>{this.props.navigation.navigate('ForgotPass')}}
                            >
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