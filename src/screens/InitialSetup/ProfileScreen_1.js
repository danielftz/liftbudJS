import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Input,Button} from 'react-native-elements';
import DismissKeyboardView from '../../components/DismissKeyboardView';
import TitleCard from '../../components/TItleCard';
import GeneralStyles from '../../GeneralStyles';
import {ColorPalette} from '../../ColorPalette';

const ProfileScreen_1 = ({navigation})=>{
    return(
        <DismissKeyboardView>
            <TitleCard title='Profile Setup' description='We will custom make a meal plan and workout plan for you shortly...'/>
            <View style={GeneralStyles.ProfileFloater}>
                <Input 
                    labelStyle={GeneralStyles.InputLabelText} 
                    inputContainerStyle={GeneralStyles.InputBox} 
                    keyboardType='number-pad'
                    selectTextOnFocus={true} 
                    label='Bodyfat (%)'
                />
                <Button containerStyle={GeneralStyles.ButtonContainerStyleGeneral}
                        buttonStyle={{backgroundColor:ColorPalette.c4}}
                        title="I don't know"
                        onPress={()=>navigation.navigate('Profile_2')}
                        
                />
                <Button containerStyle={GeneralStyles.ButtonContainerStyleGeneral}
                        buttonStyle={{backgroundColor:ColorPalette.c3}}
                        title='Next'
                        onPress={()=>navigation.navigate('Profile_3')}
                        
                />

            </View>
        </DismissKeyboardView>
    )
}

const styles = StyleSheet.create({
    

})

export default ProfileScreen_1;