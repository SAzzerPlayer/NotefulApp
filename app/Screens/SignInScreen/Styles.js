import {StyleSheet} from 'react-native';
import GlobalStyles from '../../Default/GlobalStyles';
export default styles = StyleSheet.create({
    BackgroundView:{
        alignItems:'stretch',
        flex:1,
        justifyContent: 'flex-start',
        backgroundColor: GlobalStyles.BackgroundColor
    },
    TopView:{
        flex:0.2,
        marginTop:20,
        justifyContent: 'flex-start',
        marginLeft:20,
        marginRight:20
    },
    MiddleView:{
        flex:0.55
    },
    MiddleViewMargin:{
        flex: 1,
        marginLeft: 20,
        marginRight: 20
    },
    BottomView:{
        flex:0.25,
        alignItems:'stretch',
        justifyContent:'center'
    },
    TitleFontText:{
        color:GlobalStyles.FontTextColor,
        fontSize:GlobalStyles.TitleFontSize,
        fontFamily:'Lato'
    },
    FieldFontText:{
        color:GlobalStyles.FontEyeCatchColor,
        fontSize:GlobalStyles.EyeCatchFontSize-2
    },
    FieldView:{
        flex:0.25,
        justifyContent:'space-between',
        marginBottom:15,
        borderBottomWidth:1,
        borderColor: 'grey'
    },
    FieldInputText:{
        flex:0.65,
        fontSize:GlobalStyles.TextFontSize,
        color:GlobalStyles.FontTextColor,
        fontFamily:'Lato'

    },
    FieldPasswordView:{
        alignItems:'center',
        flex:0.8,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    FieldPasswordInput:{
        flex:1,
        fontSize:GlobalStyles.TextFontSize,
        color:GlobalStyles.FontTextColor,
        fontFamily:"Lato"
    },
    FieldPasswordImage:{
        height:GlobalStyles.iconSize,
        width:GlobalStyles.iconSize
    },
    ButtonsNavigateView:{
        flex:0.1,
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom: 15
    },
    ButtonsNavigateText:{
        fontSize:GlobalStyles.ButtonFontSize,
        color:GlobalStyles.FontButtonColor,
    },
    ForgotPasswordView:{
        alignItems:'center',
        flex:0.2
    },
    ForgotPasswordText:{
        fontSize:GlobalStyles.ButtonFontSize-4,
        color:GlobalStyles.FontEyeCatchColor,
        fontFamily:'Lato-Light'
    },
    BottomViewMargin:{
        flex:0.6,
        justifyContent:'space-around',
        marginLeft:20,
        marginRight:20
    },
    BottomTouchableGoogle:{
        alignItems:'center',
        flex:0.4,
        backgroundColor:'#cc5541',
        justifyContent:'center'
    },
    BottomTouchableLinkedId:{
        alignItems:'center',
        flex:0.4,
        backgroundColor:'#3375a4',
        justifyContent:'center'
    },
    BottomTouchableText:{
        fontSize:GlobalStyles.TextFontSize,
        color: 'white'
    }
});