import React,{useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Input,Text,Button} from 'react-native-elements';
import {Picker} from '@react-native-picker/picker';
import { ColorPalette } from '../../ColorPalette';
import DismissKeyboardView from '../../components/DismissKeyboardView';
import TitleCard from '../../components/TItleCard';
import GeneralStyles from '../../GeneralStyles';

const ProfileScreen_0 = ({navigation}) =>{

    const [sex, setSex] = useState('Male');

    return (
        <DismissKeyboardView>
            <TitleCard title='Profile Setup' description='We will custom make a meal plan and workout plan for you shortly...'/>
            <View style={GeneralStyles.ProfileFloater}>
                <Input 
                    labelStyle={GeneralStyles.InputLabelText} 
                    inputContainerStyle={GeneralStyles.InputBox} 
                    keyboardType='number-pad'
                    selectTextOnFocus={true} 
                    label='Age (10-100)'
                />
                <View style={styles.choiceContainer}>
                    <Text style={GeneralStyles.InputLabelText}>Biological Sex</Text>
                    {/* use a picker for now */}
                    <View style={GeneralStyles.InputBox}>
                        <Picker selectedValue={sex}
                                onValueChange={(itemValue,itemIndex)=>
                                    setSex(itemValue)
                                }
                                mode='dropdown'       
                        >
                            <Picker.Item label='Male' value='Male'/>
                            <Picker.Item label='Female' value='Female'/> 
                        </Picker>
                    </View>
                </View>

                <Input 
                    labelStyle={GeneralStyles.InputLabelText} 
                    inputContainerStyle={GeneralStyles.InputBox} 
                    keyboardType='number-pad'
                    selectTextOnFocus={true} 
                    label='Height (cm)'
                />

                <Input 
                    labelStyle={GeneralStyles.InputLabelText} 
                    inputContainerStyle={GeneralStyles.InputBox} 
                    keyboardType='number-pad'
                    selectTextOnFocus={true} 
                    label='Weight (kg)'
                />
                
                <Button containerStyle={GeneralStyles.ButtonContainerStyleGeneral}
                        buttonStyle={{backgroundColor:ColorPalette.c3}}
                        title='Next'
                        onPress={()=>navigation.navigate('Profile_1')}
                />
                
            </View>
        </DismissKeyboardView>
    )
}

const styles = StyleSheet.create({
    choiceContainer:{
        paddingTop:3,
        paddingHorizontal:10,
        flex:1,
        marginBottom:30
    },
    buttonContainerStyle:{
        ...GeneralStyles.Shadow,
        marginHorizontal:10,
        marginVertical:7,
    }
    
})
export default ProfileScreen_0;