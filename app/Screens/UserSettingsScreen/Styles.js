import {StyleSheet} from 'react-native';
import GlobalStyles from '../../Default/GlobalStyles';

export default styles = StyleSheet.create({
    BackgroundView:{
        alignItems:'stretch',
        flex:1,
        justifyContent:'flex-start',
        backgroundColor:GlobalStyles.BackgroundColor
    },
    TopView:{
        flex:0.1,
        justifyContent:'space-between',
        marginLeft:20,
        marginRight:20,
        marginTop:20,
        flexDirection:'row'
    },
    TitleFontText:{
        fontSize:GlobalStyles.TitleFontSize,
        color:GlobalStyles.FontTextColor,
        fontFamily:'Lato'
    },
    TopImage:{
        width:GlobalStyles.iconSize+8,
        height:GlobalStyles.iconSize+8
    },
    MiddleView:{
        flex:0.7,
        justifyContent:'center'
    },
    MiddleViewMargin:{
        flex:1,
        justifyContent:'flex-start',
        marginLeft:20,
        marginRight:20
    },
    FieldView:{
        flex:0.2,
        justifyContent:'space-between',
        marginBottom:15,
        borderBottomWidth:1,
        borderColor:'grey'
    },
    FieldTextFont:{
        fontSize:GlobalStyles.TextFontSize,
        color:GlobalStyles.FontEyeCatchColor,
        fontFamily:'Lato'
    },
    FieldTextInput:{
        flex:1,
        color: GlobalStyles.FontTextColor,
        fontSize: GlobalStyles.TextFontSize,
        fontFamily:"Lato-Regular"
    },
    ButtonsNavigateTopView:{
        flex:0.1,
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:15
    },
    ButtonsNavigateBottomView:{
        flex:0.1,
        flexDirection:'row',
        justifyContent:'flex-end',
        marginBottom:15
    },
    ButtonsNavigateText:{
        fontSize:GlobalStyles.ButtonFontSize,
        color:GlobalStyles.FontButtonColor,
        fontFamily:'Lato'
    }
});