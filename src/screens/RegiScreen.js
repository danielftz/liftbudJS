import React from 'react';
import {View, StyleSheet, Dimensions,TextInput} from 'react-native';
import {Input,Button} from 'react-native-elements';
import DismissKeyboardView from '../components/DismissKeyboardView';
import TitleCard from '../components/TItleCard';
import { ColorPalette } from '../ColorPalette';
import GeneralStyles from '../GeneralStyles';


const RegiScreen = ({navigation}) =>{
    console.log()
    return (
        <DismissKeyboardView>
            {/* safe area view already implemented in Title Card*/}
            <TitleCard title='Welcome' description='Your fitness journey starts here...'/>
            
            
            <View style={GeneralStyles.ProfileFloater}>
                <Input 
                    labelStyle={GeneralStyles.InputLabelText} 
                    inputContainerStyle={GeneralStyles.InputBox} 
                    keyboardType='email-address'
                    selectTextOnFocus={true} 
                    label='Email'
                />
                <Input 
                    labelStyle={GeneralStyles.InputLabelText} 
                    inputContainerStyle={GeneralStyles.InputBox} 
                    selectTextOnFocus={true} 
                    label='Password'
                />
                
                <Button containerStyle={GeneralStyles.ButtonContainerStyleGeneral}
                        buttonStyle={{backgroundColor:ColorPalette.c3}}
                        title='Login/Register'
                        onPress={()=>navigation.navigate('Profile_0')}
                />
                <Button containerStyle={GeneralStyles.ButtonContainerStyleGeneral}
                        buttonStyle={{backgroundColor:ColorPalette.lightText}}
                        titleStyle={{color:ColorPalette.darkText}}
                        title='Login with Google'
                />
                <Button containerStyle={GeneralStyles.ButtonContainerStyleGeneral}
                        buttonStyle={{backgroundColor:ColorPalette.lightText}}
                        titleStyle={{color:ColorPalette.darkText}}
                        title='Login with Facebook'
                />
            </View>
        </DismissKeyboardView>
    )
}

const styles = StyleSheet.create({
});


export default RegiScreen;