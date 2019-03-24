import React from 'react';
import {View,Text,Image,TouchableOpacity,TextInput,AsyncStorage,Alert} from 'react-native';
import styles from './Styles';

export default class UserSettingsScreen extends React.Component{
    _PutUserPassword = async (firstName,surname,email) => {
        await fetch('http://10.0.2.2:3000/users/update',
            {
                method:'PUT',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(
                    {
                        firstName:firstName,
                        surname:surname,
                        email:email
                    }
                )
            });
        await AsyncStorage.setItem('User',JSON.stringify({
            firstName:firstName,
            surname:surname,
            email:email,
            password:this.state.userData.password
        }));
    };
    _ChangeDatas = () => {
        let regName = /^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/;
        if(this.state.firstName.match(regName) == null){
            Alert.alert('Invalid password type');
        }
        else if(this.state.surname.match(regName) == null){
            Alert.alert('Invalid surname type');
        }
        else{
            this._PutUserPassword(this.state.firstName,this.state.surname,this.state.email);
            Alert.alert("Successfull!");
            this.props.navigation.navigate('UserTemp');
        }
    };
    _GetUserData = async()=>{
        let data = JSON.parse(await AsyncStorage.getItem('User'));
        this.setState({
            firstName:data.firstName,
            surname:data.surname,
            email:data.email,
            userData:data
        });
    };
    _LogOut = async ()=>{
        await AsyncStorage.setItem('User',JSON.stringify(null));
        this.props.navigation.navigate('Authentication');
    };
    constructor(props){
        super(props);
        this.state={
            firstName:String(),
            surname:String(),
            email:String(),
            userData:null,
            isLoading:false
        };
        this._GetUserData();
    }
    render(){
        if(this.state.isLoading){
            return <View></View>;
        }
        else
            return(
            <View style={styles.BackgroundView}>
                <View style={styles.TopView}>
                    <Text style={styles.TitleFontText}>
                        MY SETTINGS
                    </Text>
                    <TouchableOpacity
                        onPress={this._LogOut}
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
                                placeholderTextColor={'grey'}
                                value={this.state.firstName}
                                onChangeText={(text)=>{this.setState({firstName:text})}}
                            />
                        </View>
                        <View style={styles.FieldView}>
                            <Text style={styles.FieldTextFont}>
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
                            <Text style={styles.FieldTextFont}>
                                EMAIL ADDRESS
                            </Text>
                            <TextInput
                                style={styles.FieldInputText}
                                placeholder={'Email'}
                                keyboardType={'email-address'}
                                placeholderTextColor={'grey'}
                                value={this.state.email}
                                onChangeText={(text)=>{this.setState({email:text})}}
                                editable={false}
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
                                onPress={this._ChangeDatas}
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