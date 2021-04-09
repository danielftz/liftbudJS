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
    //correct output: either response is undefined or error is undefined
    console.log("email"+email);
    let error;
    let token;
    try{
        //receive the jwt token if authorization passes
        token = await instance.post('/signon',{email,password});
        token = resp.data.token;
        //store token in device
        await AsyncStorage.setItem('token',token);
    }catch(err){ 
        //console.log('raw: '+err.response.data.internalErr);
        error = err.response.data.internalErr;
    };
    return {token,error};
};



export default {signonPOST};