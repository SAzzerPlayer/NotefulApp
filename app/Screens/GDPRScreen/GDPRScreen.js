import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import styles from './Styles';

const DownloadText = "Download your personal data";

const DeleteText = "Delete your personal data. By clicking\n" +
    "this button you delete your personal\n" +
    " data and log out from the application";

export default class GDPRScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
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
                                <TouchableOpacity>
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