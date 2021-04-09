import React from 'react';
import {View, StyleSheet, Dimensions,TextInput} from 'react-native';
import {Input,Button} from 'react-native-elements';
import DismissKeyboardView from '../components/DismissKeyboardView';
import TitleCard from '../components/TItleCard';
import { ColorPalette } from '../ColorPalette';
import GeneralStyles from '../GeneralStyles';
import AuthForm from '../components/AuthForm';


const RegiScreen = ({navigation}) =>{
    console.log()
    return (
        <DismissKeyboardView>
            {/* safe area view already implemented in Title Card*/}
            <TitleCard title='Welcome' description='Your fitness journey starts here...'/>
            <AuthForm/>
        </DismissKeyboardView>
    )
}

const styles = StyleSheet.create({
});


export default RegiScreen;