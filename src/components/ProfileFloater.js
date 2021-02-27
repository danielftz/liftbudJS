import React from 'react';
import {View,StyleSheet,Dimensions} from 'react-native';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import GeneralStyles from '../GeneralStyles';

const ProfileFloater = ({children}) =>{
    return (
        <ScrollView contentContainerStyle={styles.scroll}>
            <View style={styles.regular}>
                {children}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scroll:{
        zIndex:999,
        backfaceVisibility:'hidden'
    },
    regular:{
        padding:30,
        marginBottom:200,
        left:Dimensions.get('window').width/10,
        top:Dimensions.get('window').height/4,
        width:Dimensions.get('window').width/10*8,
        backgroundColor:'white',

    }
})

export default ProfileFloater;