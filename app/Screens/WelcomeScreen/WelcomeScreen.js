import React from 'react';
import {View,Text,TouchableOpacity,Image,Alert} from 'react-native';
import styles from "./Styles";
import GlobalStyles from '../../Default/GlobalStyles';



const LogoText =
    "Noteful  uses  1%\n" +
    "of  your  time   to\n" +
    "inform  on  100%\n" +
    "of                 your\n" +
    "i n f o r m a t i o n\n" +
    "needs  while  you\n" +
    "control   all  input\n" +
    "sources!"
;
export default class WelcomeScreen extends React.Component{
    static navigationOptions={
        title:'Profile',
        header:null
    };

    constructor(props){
        super(props);
        this.state = {IsUserAuthed:false};
    }
    render() {
        return (
            <View style={styles.BackgroundView}>
                <View style={styles.TopView}>
                    <Text style={styles.TitleFontTextBig}>
                        {"WELCOME TO"}
                    </Text>
                    <Text style={styles.TitleFontTextSmall}>
                        {"the demo version of"}
                    </Text>
                </View>
                <View style={styles.MiddleView}>
                    <View style={styles.LogoView}>
                        <Image
                            style={styles.LogoImage}
                            source={require('../../Materials/LOGO.png')}
                            resizeMode={'contain'}
                        />
                    </View>
                    <View style={styles.WelcomeTextView}>
                        <Text style={styles.WelcomeTextFont}>
                            {"Noteful  uses  "}<Text style={{color:GlobalStyles.FontEyeCatchColor}}>1%</Text>{"\n" +
                            "of  your  time   to\n" +
                        "inform  on  "}<Text style={{color:GlobalStyles.FontEyeCatchColor}}>100%</Text>{"\n" +
                            "of                 your\n" +
                            "i n f o r m a t i o n\n" +
                            "needs  while  you\n" +
                            "control   all  input\n" +
                            "sources!"}
                        </Text>
                    </View>
                </View>
                <View style={styles.BottomView}>
                    <TouchableOpacity
                        style={styles.ButtonTouchable}
                        onPress={()=>{this.props.navigation.navigate('SignIn')}}
                    >
                        <Text style={styles.ButtonFontText}>
                            SIGN IN→
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.ButtonTouchable}
                        onPress={()=>{this.props.navigation.navigate('SignUp')}}
                    >
                        <Text style={styles.ButtonFontText}>
                            SIGN UP→
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}