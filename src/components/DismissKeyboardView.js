import React from 'react';
import {TouchableWithoutFeedback,View,Keyboard} from 'react-native';

const DismissKeyboardView = ({children}) =>{
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={{flex:1,justifyContent:'flex-start'}}>
                {children}
            </View>
        </TouchableWithoutFeedback>
    )
}

export default DismissKeyboardView;