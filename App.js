import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import RegiScreen from './src/screens/RegiScreen';
import ProfileScreen_0 from './src/screens/InitialSetup/ProfileScreen_0';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ProfileScreen_1 from './src/screens/InitialSetup/ProfileScreen_1';
import ProfileScreen_2 from './src/screens/InitialSetup/ProfileScreen_2';
import ProfileScreen_3 from './src/screens/InitialSetup/ProfileScreen_3';
import ProfileScreen_4 from './src/screens/InitialSetup/ProfileScreen_4';
import {Provider as AuthProvider} from './src/context/AuthContext';

const RegiFlow = createStackNavigator();

const App = () =>{
  return (
    <AuthProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <RegiFlow.Navigator screenOptions={{headerShown:false}}>
            <RegiFlow.Screen name="Regi" component={RegiScreen}/>
            <RegiFlow.Screen name="Profile_0" component={ProfileScreen_0}/>
            <RegiFlow.Screen name="Profile_1" component={ProfileScreen_1}/>
            <RegiFlow.Screen name="Profile_2" component={ProfileScreen_2}/>
            <RegiFlow.Screen name="Profile_3" component={ProfileScreen_3}/>
            <RegiFlow.Screen name="Profile_4" component={ProfileScreen_4}/>
          </RegiFlow.Navigator>
        </NavigationContainer> 
      </SafeAreaProvider>
    </AuthProvider>
    
  )
}


export default App;
