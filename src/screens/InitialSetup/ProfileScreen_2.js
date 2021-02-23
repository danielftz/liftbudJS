import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Input,Button} from 'react-native-elements';
import DismissKeyboardView from '../../components/DismissKeyboardView';
import TitleCard from '../../components/TItleCard';
import GeneralStyles from '../../GeneralStyles';
import {ColorPalette} from '../../ColorPalette';
import { Video } from 'expo-av';

const ProfileScreen_2 = ({navigation}) =>{
    return (
        <DismissKeyboardView>
            <TitleCard title='Let Us Help' description='Use our bodyfat calculator or simply estimate...'/>
            <View style={GeneralStyles.ProfileFloater}>
                <Video
                />
            </View>
        </DismissKeyboardView>
    )
}

const styles = StyleSheet.create({
    

})

export default ProfileScreen_2;