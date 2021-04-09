import createDataContext from './createDataContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authAPI from '../api/authAPI';

//reducer that assigns action
const authReducer = (state,action) =>{
    switch(action.type){
        case 'signon': //action type of signon
            //once succesfully authenticated, user will get the token
            return{token:action.payload,authMsg:''};
        case 'authFail':
            return{...state,authMsg:action.payload};
        case 'resetMsg':
            return{...state,authMsg:''};
    };
};

const signon = (dispatch) =>{
    return async ({email,password}) =>{
        /*future change: locally inspect email and password first within device*/

        //POST the email and password, should get token or error
        
        const {token,error} = await authAPI.signonPOST({email,password});
        if (!error) dispatch({type:'signon',payload:token});
        else dispatch({type:'authFail',payload:error});
        // switch (error){
        //     default:
        //         {};
        //     case 'EMPTY_EMAIL':
        //         {};
        //     case 'NO_USER_FOUND':
        //         {};
        //     case 'NOT_AUTHORIZED':
        //         {};
        // };
    };
};

const resetMsg = (dispatch) =>{
    return ()=>{dispatch({type:'resetMsg'})};
}


export const {Provider,Context} = createDataContext(
    authReducer,
    {signon,resetMsg},
    {token:null,authMsg:''}
)