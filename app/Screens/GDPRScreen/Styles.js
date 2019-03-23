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
    FieldDownloadView:{
        flex:0.2,
        justifyContent: 'space-around',
        marginBottom:10
    },
    FieldDeleteView:{
        flex:0.25,
        justifyContent: 'space-between',
        marginBottom:10
    },
    FieldTitleText:{
        fontSize:GlobalStyles.TitleFontSize,
        color:GlobalStyles.FontEyeCatchColor,
        fontFamily:"Lato"
    },
    FieldInfoView:{
        flexDirection:'row',
        justifyContent:'space-between',
        flex:0.8,
        alignItems:'center'
    },
    FieldFontText:{
        fontSize: GlobalStyles.TextFontSize,
        color: GlobalStyles.FontTextColor,
    },
    ButtonsNavigateView:{
        flex:0.1,
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:15,
        marginLeft:20,
        marginRight:20
    },
    ButtonsNavigateText:{
        color:GlobalStyles.FontButtonColor,
        fontSize: GlobalStyles.ButtonFontSize,
        fontFamily:'Lato'
    },

});