import React, {useReducer} from 'react';

/** helps creating context and provider **/
//reducer = function(state,action)
//actions = array
//defaultValue = {state1:defaultValue1,...}
export default (reducer,actions,defaultValue) =>{
    
    //initialize context
    const Context = React.createContext();

    //creates provider
    const Provider = ({children}) =>{
        const [state,dispatch] = useReducer(reducer,defaultValue);
        
        //bound each action to reducer
        const boundActions = {};
        for (let key in actions){
            boundActions[key] = actions[key](dispatch);
        };

        return(
            <Context.Provider value={{state:state,...boundActions}}>
                {children}
            </Context.Provider>
        );
    };

    return {Context,Provider}
}; 