import {StyleSheet} from 'react-native';
import GlobalStyles from '../../Default/GlobalStyles';

export default styles = StyleSheet.create({
    BackgroundView:{
        backgroundColor: GlobalStyles.BackgroundColor,
        flex:1,
        justifyContent: 'flex-start',
        alignItems:'stretch'
    },
    TopView:{
        flex:0.2,
        justifyContent: 'flex-start',
        marginLeft:20,
        marginRight:20,
        marginTop:20
    },
    TitleFontText:{
        color:GlobalStyles.FontTextColor,
        fontSize:GlobalStyles.TitleFontSize,
        marginBottom:5,
        fontFamily:'Lato'
    },
    MiddleView:{
        flex:0.6,
        justifyContent: 'center'
    },
    MiddleViewMargin:{
        flex:1,
        marginLeft:20,
        marginRight:20,
        justifyContent:'center'
    },
    FieldView:{
        flex:0.2,
        borderBottomWidth: 1,
        borderColor: 'grey',
        justifyContent: 'space-between',
        marginBottom:15
    },
    FieldFontText:{
        fontSize: GlobalStyles.TextFontSize,
        color: GlobalStyles.FontEyeCatchColor,
    },
    FieldInputText:{
        flex:0.8,
        fontSize:GlobalStyles.TextFontSize,
        fontFamily:'Lato'
    },
    ButtonsNavigateView:{
        flex:0.1,
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:15
    },
    ButtonsNavigateText:{
        color:GlobalStyles.FontButtonColor,
        fontSize: GlobalStyles.ButtonFontSize,
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
        fontSize:GlobalStyles.TextFontSize
    },
    FieldPasswordImage:{
        height:GlobalStyles.iconSize,
        width:GlobalStyles.iconSize
    },

});