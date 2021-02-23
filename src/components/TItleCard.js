import { CardStyleInterpolators } from '@react-navigation/stack';
import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {Text,Button} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import { ColorPalette } from '../ColorPalette';
import {LinearGradient} from 'expo-linear-gradient';

const TitleCard = ({title,description}) =>{
    return (
        <SafeAreaView>
            <LinearGradient
                // IMPLEMENT react-native-css-gradient
                // Background Linear Gradient
                colors={[ColorPalette.titleCard_b,ColorPalette.titleCard_g]}
                start={{x:0.5,y:0}}
                end={{x:0.5,y:1}}
                locations={[0.2,0.75]}
            >
            <View style={styles.container}>
            
                <Text style={styles.titleText}>{title}</Text>
                <Text style={styles.descriptionText} >{description}</Text>
                
            </View>
            </LinearGradient>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20,
        paddingTop:15,
        paddingBottom:Dimensions.get('window').height/6,
        //backgroundColor:'green'
    },
    titleText:{
        color:ColorPalette.lightText,
        fontSize:47,
    },
    descriptionText:{
        color:ColorPalette.lightText,
        fontSize:23,
    }
});


export default TitleCard;