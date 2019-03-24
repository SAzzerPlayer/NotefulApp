import React from 'react';
import {View,Text,TouchableOpacity,AsyncStorage,Alert} from 'react-native';
import styles from './Styles';
import RNFS from 'react-native-fs';

const DownloadText = "Download your personal data";

const DeleteText = "Delete your personal data. By clicking\n" +
    "this button you delete your personal\n" +
    " data and log out from the application";

export default class GDPRScreen extends React.Component{
    _GetUserData = async()=>{
        let data = JSON.parse(await AsyncStorage.getItem('User'));
        this.setState({userData:data});
    };
    constructor(props){
        super(props);
        this.state={
            userData:null
        };
        this._GetUserData();
    }
    _DownloadProfile=()=>{
        let path=RNFS.DocumentDirectoryPath+'/profile.txt';
        RNFS.writeFile(path,String(this.state.userData),'utf8')
            .then(()=>{
                Alert.alert('Download is success. Folder: '+RNFS.DocumentDirectoryPath);
            })
            .catch((err)=>{
                Alert.alert(err.message);
            })
    };
    _DeleteUser = async (email) => {
        Alert.alert(email);
        await fetch('http://10.0.2.2:3000/users/delete',{
            method:'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email:email})
        });
        this._LogOut();
    };
    _LogOut = async ()=>{
        await AsyncStorage.setItem('User',JSON.stringify(null));
        this.props.navigation.navigate('Authentication');
    };
    _Delete = () => {
        Alert.alert(
            'Deleting your personal data',
            'Are you sure?',
            [
                {text:'No',onPress:()=>{}},
                {text:'Yes',onPress:()=>{this._DeleteUser(this.state.userData.email)}}
            ],
            {cancelable:false}
        )
    };
    render(){
        return(
            <View style={styles.BackgroundView}>
                <View style={styles.TopView}>
                    <Text style={styles.TitleFontText}>
                        GDPR
                    </Text>
                </View>
                <View style={styles.MiddleView}>
                    <View style={styles.MiddleViewMargin}>
                        <View style={styles.FieldDownloadView}>
                            <Text style={styles.FieldTitleText}>
                                DOWNLOAD
                            </Text>
                            <View style={styles.FieldInfoView}>
                                <Text style={styles.FieldFontText}>
                                    {DownloadText}
                                </Text>
                                <TouchableOpacity
                                    onPress={this._DownloadProfile}
                                >
                                    <Text style={styles.ButtonsNavigateText}>
                                        Download
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.FieldDeleteView}>
                            <Text style={styles.FieldTitleText}>
                                DELETE
                            </Text>
                            <View style={styles.FieldInfoView}>
                                <Text style={styles.FieldFontText}>
                                    {DeleteText}
                                </Text>
                                <TouchableOpacity
                                    onPress={this._Delete}
                                >
                                    <Text style={styles.ButtonsNavigateText}>
                                        Delete
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.ButtonsNavigateView}>
                    <TouchableOpacity
                        onPress={()=>{this.props.navigation.navigate('Settings')}}
                    >
                        <Text style={styles.ButtonsNavigateText}>
                            ←BACK
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}