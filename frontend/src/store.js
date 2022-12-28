import React, { createContext, useReducer } from "react";

const initialState = {

}

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    useReducer(reducer, initialState);
    return (
        <AppContext.Provider value={{}}>
            { children }
        </AppContext.Provider>
    )
}