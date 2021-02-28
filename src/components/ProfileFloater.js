import React from 'react';
import {StyleSheet,Dimensions} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import GeneralStyles from '../GeneralStyles';

const ProfileFloater = ({children}) =>{
    return (
        <ScrollView style = {styles.scrollStyle} 
        contentContainerStyle={styles.contentStyle} >
            {children}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollStyle:{
        paddingTop:330,
    },
    contentStyle:{
        ...GeneralStyles.Shadow,
        padding:30,
        position:'absolute',
        width:Dimensions.get('window').width/10*8,
        backgroundColor:'white',
        alignSelf:'center'
    }
})

export default ProfileFloater;