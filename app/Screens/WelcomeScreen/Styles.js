import {StyleSheet,Dimensions} from 'react-native';
import GlobalStyles from '../../Default/GlobalStyles';

export default styles = StyleSheet.create({
    BackgroundView: {
        alignItems: 'stretch',
        backgroundColor: GlobalStyles.BackgroundColor,
        flex:1,
        justifyContent: 'flex-start'
    },
    ButtonTouchable: {
        flex:0.4
    },
    TitleFontTextBig:{
        marginBottom:5,
        color: GlobalStyles.FontTextColor,
        fontSize: GlobalStyles.TitleFontSize,
        fontFamily: 'Lato'
    },
    TitleFontTextSmall:{
        marginBottom:5,
        color: GlobalStyles.FontTextColor,
        fontSize: GlobalStyles.TitleFontSize-4,
        fontFamily: 'Lato-Light'
    },
    EyeCatchFontText:{
        color: GlobalStyles.FontEyeCatchColor,
        fontSize: GlobalStyles.EyeCatchFontSize,
        fontFamily: 'Lato-Light'
    },
    ButtonFontText:{
        color: GlobalStyles.FontButtonColor,
        fontSize: GlobalStyles.ButtonFontSize,
        fontFamily: 'Lato-Light'
    },
    TopView:{
        flex:0.1,
        marginTop:20,
        marginLeft:15,
        marginRight:15,
        justifyContent:'flex-start'
    },
    MiddleView:{
        flex:0.70,
        alignItems: 'stretch',
        justifyContent: 'center'
    },
    BottomView:{
        flex:0.2,
        alignItems:'flex-end',
        justifyContent:'flex-start',
        marginRight:10,
        marginLeft:10
    },
    LogoView:{
        flex:0.3,
        alignItems:'center'
    },
    LogoImage:{
        width:'55%',
        height:'100%'
    },
    WelcomeTextView:{
        flex:0.7,
        marginLeft:35,
        marginRight:35,
        paddingTop:10,
        alignItems:'center',
        justifyContent:'flex-start',
    },
    WelcomeTextFont:{
        color: GlobalStyles.FontTextColor,
        fontSize: GlobalStyles.TitleFontSize,
        fontFamily:'Lato-Light'
    }
});