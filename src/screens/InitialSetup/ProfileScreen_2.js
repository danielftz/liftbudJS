import React,{useRef,useState} from 'react';
import {View, StyleSheet,Dimensions} from 'react-native';
import {Input,Text,Button} from 'react-native-elements';
import DismissKeyboardView from '../../components/DismissKeyboardView';
import GeneralStyles from '../../GeneralStyles';
import {ColorPalette} from '../../ColorPalette';
import { Video } from 'expo-av';
import { ScrollView } from 'react-native-gesture-handler';
import ProfileFloater from '../../components/ProfileFloater';
import TitleCard2 from '../../components/TitleCard2';
import TitleCard from '../../components/TItleCard';

const ProfileScreen_2 = ({navigation}) =>{
    // const video = useRef(null);
    // const [status, setStatus] = useState({});
    return (
            <DismissKeyboardView>
                <TitleCard title='Let Us Help' description='Use our bodyfat calculator or simply estimate...'/>
                    <ScrollView 
                    style={styles.scrollViewStyle}
                    contentContainerStyle={styles.scrollContainerStyle}
                    >
                        <Input 
                            labelStyle={GeneralStyles.InputLabelText} 
                            inputContainerStyle={GeneralStyles.InputBox} 
                            keyboardType='number-pad'
                            selectTextOnFocus={true} 
                            label='Neck Circumference (cm)'
                        />
                        <Input 
                            labelStyle={GeneralStyles.InputLabelText} 
                            inputContainerStyle={GeneralStyles.InputBox} 
                            keyboardType='number-pad'
                            selectTextOnFocus={true} 
                            label='Waist Circumference (cm)'
                        />
                        <Input 
                            labelStyle={GeneralStyles.InputLabelText} 
                            inputContainerStyle={GeneralStyles.InputBox} 
                            keyboardType='number-pad'
                            selectTextOnFocus={true} 
                            label='Hip Circumference (cm)'
                        />
                        <Input 
                            labelStyle={GeneralStyles.InputLabelText} 
                            inputContainerStyle={{...GeneralStyles.InputBox,backgroundColor:ColorPalette.input2}} 
                            keyboardType='number-pad'
                            selectTextOnFocus={true} 
                            label='Bodyfat (%)'
                            disabled={true}
                        />
                        <Button 
                            containerStyle={GeneralStyles.ButtonContainerStyleGeneral}
                            buttonStyle={{backgroundColor:ColorPalette.c4}}
                            title="Help me estimate"
                            onPress={()=>{}}   
                        />
                        <Button containerStyle={GeneralStyles.ButtonContainerStyleGeneral}
                                buttonStyle={{backgroundColor:ColorPalette.c3}}
                                title='Next'
                                onPress={()=>navigation.navigate('Profile_4')}
                                
                        />

                    </ScrollView>
                
                
            </DismissKeyboardView>
        
    )
}

const styles = StyleSheet.create({
    video:{
        // ...GeneralStyles.Shadow,
        width:Dimensions.get('window').width/10*8,
        get height(){
            return this.width*9/16;
        },
        alignSelf:'center',
        flex:1
    },
    floater:{
        ...GeneralStyles.Shadow,
        padding:30,
        // position:'absolute',
        //left:Dimensions.get('window').width/10,
        width:Dimensions.get('window').width/10*8,
        backgroundColor:'white',
        flex:0,
        alignSelf:'center'
    },
    scrollContainerStyle:{
        ...GeneralStyles.Shadow,
        padding:30,
        position:'absolute',
        //left:Dimensions.get('window').width/10,
        width:Dimensions.get('window').width/10*8,
        backgroundColor:'white',
        alignSelf:'center'
    },
    scrollViewStyle:{
        paddingTop:330,
        // backgroundColor:'grey',
        // position:'absolute',
        // left:Dimensions.get('window').width/10,
        // top:Dimensions.get('window').height/4,
        // width:Dimensions.get('window').width/10*8,
        // height:2000
    },


})

export default ProfileScreen_2;