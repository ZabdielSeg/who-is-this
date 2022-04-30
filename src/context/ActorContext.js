import React, { createContext, useReducer } from 'react';
import appReducer, { initialState } from './AppReducer';

export const ActorContext = createContext();

const ActorContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    return (
        <ActorContext.Provider value={[state, dispatch]}>
            { children }
        </ActorContext.Provider>
    )
}

export default ActorContextProvider;