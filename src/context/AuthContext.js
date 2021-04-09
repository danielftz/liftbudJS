import createDataContext from './createDataContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authAPI from '../api/authAPI';

//reducer that assigns action
const authReducer = (state,action) =>{
    switch(action.type){
        case 'signon': //action type of signon
            //once succesfully authenticated, user will get the token
            return{token:action.payload,errMsg:''};
        case 'authFail':
            return{...state,authMsg:action.payload};
        case 'newUser':
            return{...state,authMsg:action.payload};
    };
};

const signon = (dispatch) =>{
    return async ({email,password}) =>{
        const {response,error} = await authAPI.signonPOST({email,password});
        console.log(response);
        console.log(error);
    }
};


export const {Provider,Context} = createDataContext(
    authReducer,
    {signon},
    {token:null,authMsg:''}
)