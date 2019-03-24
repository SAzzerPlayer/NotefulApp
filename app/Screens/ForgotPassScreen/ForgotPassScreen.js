import React from 'react';
import {View,Text,TextInput,AsyncStorage,TouchableOpacity,Image,Alert,KeyboardAvoidingView} from 'react-native';
import styles from './Styles';

export default class ForgotPassScreen extends React.Component{
    _PutUserPassword = async (password,email) => {
        await fetch('http://10.0.2.2:3000/users/update',
            {
                method:'PUT',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(
                    {
                        password:password,
                        email:email
                    }
                    )
            });
    };
    _ChangePassword = () => {
        let regPass = /^[a-zA-Z0-9'][a-zA-Z0-9' ]+[a-zA-Z0-9']?$/;
        if(this.state.password.match(regPass) == null){
            Alert.alert('Invalid password type');
        }
        else if(this.state.password.length < 8){
            Alert.alert('Length of password is short');
        }
        else{
            this._PutUserPassword(this.state.password,this.state.email);
            Alert.alert("Successfull!");
            this.props.navigation.navigate('Welcome');
        }
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
    _CheckUser = async (email) => {
        let data = await this._GetUser(email);
        if(data.email==null){
            Alert.alert("This email address hasn't existed!");
        }
        else{
            this.setState({isRightEmail:true});
        }
    };
    _CheckEmail=()=>{
        let regEmail = /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/;
        if(this.state.email.match(regEmail)==null){
            Alert.alert('Invalid email type');
        }
        else{
            this._CheckUser(this.state.email);
        }
    };
    constructor(props){
        super(props);
        this.state={
            isRightEmail:false,
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
                                    keyboardType={'email-address'}
                                    placeholderTextColor={'grey'}
                                    value={this.state.email}
                                    onChangeText={(text)=>{this.setState({email:text})}}
                                />
                            )}
                            {(this.state.isRightEmail &&
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
                                    onPress={this._CheckEmail}
                                >
                                <Text style={styles.ButtonsNavigateText}>
                                    RECOVER→
                                </Text>
                            </TouchableOpacity>)}
                            {(this.state.isRightEmail &&
                                <TouchableOpacity
                                    onPress={this._ChangePassword}
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