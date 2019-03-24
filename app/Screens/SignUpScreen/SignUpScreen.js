import React from 'react';
import {View,Text,Image,TextInput,TouchableOpacity,AsyncStorage,Alert} from 'react-native';
import styles from './Styles';

export default class SignUpScreen extends React.Component{
    _SetUserData = async (user) =>{
        await AsyncStorage.setItem('User',JSON.stringify(user));
    };
    _PostNewUser = async(user)=>{
        await fetch('http://10.0.2.2:3000/users/new',{
            method:'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        });
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
    _CheckUser = async (user) => {
        let data = await this._GetUser(user.email);
        if(data.email!==null){
            Alert.alert("This email address has existed!\nPlease,write other email");
        }
        else{
            this._PostNewUser(user);
            this._SetUserData(user);
            this.props.navigation.navigate('UserProfile');
        }
    };
    _Register = () => {
        let regName = /^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/;
        let regPass = /^[a-zA-Z0-9'][a-zA-Z0-9' ]+[a-zA-Z0-9']?$/;
        let regEmail = /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/;
        if(this.state.firstName.match(regName)==null){
            Alert.alert('Invalid first name format');
        }
        else if(this.state.surname.match(regName)==null){
            Alert.alert('Invalid surname format');
        }
        else if(this.state.email.match(regEmail)==null){
            Alert.alert('Invalid email format');
        }
        else if(this.state.password.match(regPass)==null){
            Alert.alert('Invalid password format');
        }
        else this._CheckUser(this.state);
    };
    constructor(props){
        super(props);
        this.state = {
            isOpenedPassword:false,
            firstName:String(),
            surname:String(),
            email:String(),
            password:String()
        };
        this._GetUser=this._GetUser.bind(this);
        this._PostNewUser=this._PostNewUser.bind(this);
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
                                placeholderTextColor={'grey'}
                                value={this.state.firstName}
                                onChangeText={(text)=>{this.setState({firstName:text})}}
                            />
                        </View>
                        <View style={styles.FieldView}>
                            <Text style={styles.FieldFontText}>
                                SURNAME
                            </Text>
                            <TextInput
                                style={styles.FieldInputText}
                                placeholder={'Surname'}
                                placeholderTextColor={'grey'}
                                value={this.state.surname}
                                onChangeText={(text)=>{this.setState({surname:text})}}
                            />
                        </View>
                        <View style={styles.FieldView}>
                            <Text style={styles.FieldFontText}>
                                EMAIL
                            </Text>
                            <TextInput
                                style={styles.FieldInputText}
                                placeholder={'Email address'}
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
                                    style={styles.FieldPasswordInput}
                                    placeholder={'Password'}
                                    secureTextEntry={!this.state.isOpenedPassword}
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
                                onPress={this._Register}
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