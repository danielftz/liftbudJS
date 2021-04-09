import React,{useState,useEffect,useRef,useContext} from 'react';
import {View,StyleSheet} from 'react-native';
import {Text,Button,Input} from 'react-native-elements';
import GeneralStyles from '../GeneralStyles'
import {ColorPalette} from '../ColorPalette';
import {useNavigation} from '@react-navigation/native';
import {Context as AuthContext} from '../context/AuthContext';

const AuthForm = ()=>{
    const navigation = useNavigation();
    const initialRender = useRef(true);
    const {state,signon,resetMsg} = useContext(AuthContext);
    const [email,setEmail] = useState(''); //email state
    const [password,setPassword] = useState(''); //password state
    const [isLoading,setLoading] = useState(false);
    const [noAuthMsg,setNoAuthMsg] = useState(false);
    //navigation hook built into react-navigation

    useEffect(()=>{
        if(initialRender.current){
            //wont run on initial load up
            initialRender.current=false;
        }else{
            //everytime state changes from authcontext, check for error msg
            alert(state.authMsg);
        }
    },[state]);

    return (
    <View style={GeneralStyles.ProfileFloater}>
        <Input 
            labelStyle={GeneralStyles.InputLabelText} 
            inputContainerStyle={GeneralStyles.InputBox} 
            keyboardType='email-address'
            selectTextOnFocus={true} 
            label='Email'
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            autoCorrect={false}
        />
        <Input 
            labelStyle={GeneralStyles.InputLabelText} 
            inputContainerStyle={GeneralStyles.InputBox} 
            selectTextOnFocus={true} 
            label='Password'
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
        />
        <Button containerStyle={GeneralStyles.ButtonContainerStyleGeneral}
                buttonStyle={{backgroundColor:ColorPalette.c3}}
                title='Login/Register'
                loading={isLoading}
                //loading={true}
                //when button is pressed
                //first verify user
                //then navigate
                onPress={()=>{
                    setLoading(true);
                    //if authorization passed and user
                    signon({email,password});
                    setLoading(false);
                }}
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
    );
};

export default AuthForm;