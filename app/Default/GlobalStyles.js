
import {Dimensions,Alert} from 'react-native';
// Нужно добавить изменение размера шрифта при определенных размеров экрана

function getSize(diag){
    let titleFont,textFont,buttonFont,eyeCatchFont,iconSize;
    if(3<diag && diag<=4){
        titleFont=20;
        textFont=10;
        buttonFont=20;
        eyeCatchFont=12;
        iconSize=18;
        Alert.alert(String(diag));
    }
    else if(4<diag && diag <=5){
        titleFont=20;
        textFont=12;
        buttonFont=20;
        eyeCatchFont=12;
        iconSize=18;
    }
    else if(diag>5){
        titleFont=28;
        textFont=14;
        buttonFont=24;
        eyeCatchFont=16;
        iconSize=24;
    }
    else{
        titleFont=14;
        textFont=8;
        buttonFont=12;
        eyeCatchFont=10;
        iconSize=12;
    }
    return [titleFont,textFont,buttonFont,eyeCatchFont,iconSize]
}

const {height,width} = Dimensions.get('window');
let diag = Math.sqrt(height*height-width*width)/96;
let [titleFont,textFont,buttonFont,eyeCatchFont,iconSize]=getSize(diag);

const GlobalStyles = {
    FontFamily: 'Lato-Light',
    TitleFontSize: titleFont,
    TextFontSize:textFont,
    ButtonFontSize:buttonFont,
    EyeCatchFontSize:eyeCatchFont,
    FontEyeCatchColor: '#F2D3B7',
    FontButtonColor: '#54CCDA',
    FontTextColor: '#848B9E',
    diag:diag,
    BackgroundColor: '#252D40',
    iconSize:iconSize

};
export default GlobalStyles;
