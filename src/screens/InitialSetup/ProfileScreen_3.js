import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Input,Button} from 'react-native-elements';
import DismissKeyboardView from '../../components/DismissKeyboardView';
import TitleCard from '../../components/TItleCard';
import GeneralStyles from '../../GeneralStyles';
import {ColorPalette} from '../../ColorPalette';

const ProfileScreen_3 = ({navigation}) =>{
    return (
        <DismissKeyboardView>
            <TitleCard title='Just A Little More' description='Select the option that best describe you'/>
        </DismissKeyboardView>
    )
}

const styles = StyleSheet.create({
    

})

export default ProfileScreen_3;