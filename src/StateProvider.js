// My data layer
// to keep track of basket items
import React, { createContext, useContext, useReducer } from "react";

//this is my data layer
export const StateContext = createContext();

//build a provider
export const StateProvider = ({ reducer, initialState, children }) => (
	//useReducer is a hook's component
	<StateContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</StateContext.Provider>
);

//this is how we access it in componets
export const useStateValue = () => useContext(StateContext);
