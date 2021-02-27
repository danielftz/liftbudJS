import React from 'react';
import { ColorPropType } from 'react-native';
import {Dimensions} from 'react-native';
import { ColorPalette } from './ColorPalette';
const Shadow={
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
};

const InputBox={
    backgroundColor:ColorPalette.input1,
    borderBottomWidth:0,
    height:50,
    flex:1
};

const InputLabelText={
    color:ColorPalette.darkText,
    fontWeight:'normal', 
    fontSize:15,
};

const ProfileFloater={
    ...Shadow,
    padding:30,
    paddingTop:30,
    position:'absolute',
    left:Dimensions.get('window').width/10,
    top:Dimensions.get('window').height/4,
    width:Dimensions.get('window').width/10*8,
    backgroundColor:'white',
    flex:1,
    justifyContent:'center',
};

const ButtonContainerStyleGeneral={
    ...Shadow,
    marginHorizontal:10,
    marginVertical:7,
    
}

export default {Shadow,ProfileFloater,InputBox,InputLabelText,ButtonContainerStyleGeneral};