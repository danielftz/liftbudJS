import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance = axios.create({
    //expressJS server deployed at this location
    baseURL:'https://hidden-scrubland-08539.herokuapp.com',
});

// instance.interceptors.request.use(
//     async(config) =>{

//         //perform this task before any request is sent
//         const token=await AsyncStorage.getItem('token');
//         if (token) config.headers.Authorization = `Bearer ${token}`;
//         //successful
//         return config;
//     },error =>{
//         //handle error
//         console.log(error);
//         return Promise.reject(error);
//     }
// );

const signonPOST = async({email,password}) =>{
    let response='';
    let error='';
    try{
        //console.log("waiting...")
        const response = await instance.get('/',{email,password});
        //console.log("got it...")
        //console.log(response.data.toString());
        return {response:response.data,error};
    }catch(err){
        return {response,error};
    }
}

export default {signonPOST};