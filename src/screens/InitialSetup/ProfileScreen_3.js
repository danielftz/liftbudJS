import React,{useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text,Button} from 'react-native-elements';
import {Picker} from '@react-native-picker/picker';
import DismissKeyboardView from '../../components/DismissKeyboardView';
import TitleCard from '../../components/TItleCard';
import GeneralStyles from '../../GeneralStyles';
import {ColorPalette} from '../../ColorPalette';
import ProfileFloater from '../../components/ProfileFloater';

const ProfileScreen_3 = ({navigation}) =>{
    //use context later??
    const [q0Goal,setQ0] = useState(0);
    const [q1Activity,setQ1] = useState(0);
    const [q2CookingSkill,setQ2] = useState(0);
    const [q3CookingTime,setQ3] = useState(0);
    
    return (
        <DismissKeyboardView>
            <TitleCard title='Just A Little More' description='Select the option that best describe you'/>
            <ProfileFloater>
                
                <View style={styles.choiceContainer}>
                    <Text style={GeneralStyles.InputLabelText}>What is your fitness goal?</Text>
                    {/* use a picker for now */}
                    <View style={GeneralStyles.InputBox}>
                        <Picker selectedValue={q0Goal}
                                onValueChange={(itemValue,itemIndex)=>
                                    setQ0(itemValue)
                                }
                                mode='dropdown'       
                        >
                            <Picker.Item label='Lose fat fast' value={0}/>
                            <Picker.Item label='Lose fat gradually' value={1}/> 
                            <Picker.Item label='Stay fit and toned' value={2}/> 
                            <Picker.Item label='Clean bulk' value={3}/> 
                        </Picker>
                    </View>
                </View>

                <View style={styles.choiceContainer}>
                    <Text style={GeneralStyles.InputLabelText}>What is your planned activty level?</Text>
                    {/* use a picker for now */}
                    <View style={GeneralStyles.InputBox}>
                        <Picker selectedValue={q1Activity}
                                onValueChange={(itemValue,itemIndex)=>
                                    setQ1(itemValue)
                                }
                                mode='dropdown'       
                        >
                            <Picker.Item label='None or close to no exercise' value={0}/>
                            <Picker.Item label='Weekend warrior' value={1}/> 
                            <Picker.Item label='Regular exercise' value={2}/> 
                        </Picker>
                    </View>
                </View>

                <View style={styles.choiceContainer}>
                    <Text style={GeneralStyles.InputLabelText}>How skilled are you at cooking?</Text>
                    {/* use a picker for now */}
                    <View style={GeneralStyles.InputBox}>
                        <Picker selectedValue={q2CookingSkill}
                                onValueChange={(itemValue,itemIndex)=>
                                    setQ2(itemValue)
                                }
                                mode='dropdown'       
                        >
                            <Picker.Item label='Complete beginner' value={0}/>
                            <Picker.Item label='Somewhat experienced' value={1}/> 
                            <Picker.Item label='Years of experience' value={2}/> 
                        </Picker>
                    </View>
                </View>

                <View style={styles.choiceContainer}>
                    <Text style={GeneralStyles.InputLabelText}>How much time would spend cooking?</Text>
                    {/* use a picker for now */}
                    <View style={GeneralStyles.InputBox}>
                        <Picker selectedValue={q3CookingTime}
                                onValueChange={(itemValue,itemIndex)=>
                                    setQ3(itemValue)
                                }
                                mode='dropdown'       
                        >
                            <Picker.Item label='As little as possible' value={0}/>
                            <Picker.Item label='Once every several days' value={1}/> 
                            <Picker.Item label='Fresh meals every day' value={2}/> 
                        </Picker>
                    </View>
                </View>

                <Text h5>What is your availability? (under development)</Text>
                
                <Button containerStyle={GeneralStyles.ButtonContainerStyleGeneral}
                        buttonStyle={{backgroundColor:ColorPalette.c3}}
                        title='Finish'
                        onPress={()=>{}}
                />


            </ProfileFloater>
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

})

export default ProfileScreen_3;