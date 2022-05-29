import React, {  createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
 

// step1: Declear all your states
const initialState = {
    transcations :[
  { id: 1, text: 'Flower', amount: -20 },
  { id: 2, text: 'Salary', amount: 300 },
  { id: 3, text: 'Book', amount: -10 },
  { id: 4, text: 'Camera', amount: 150 }
    ]
}

// step2 Create context for the app

export const GlobelContext = createContext(initialState)



// step3 Create a Provider component (HOC) <GlobleProvider></GlobleProvider>

export const GlobleProvider = ({children} ) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState)

    //  step 4 define your action
    function addTranscation(transcation){
      dispatch({
        type:'ADD_TRANSCATION',
        payload: transcation
      })
    }

    function deleteTranscation(id){
      dispatch({
        type:'DELETE_TRANSCATION',
        payload:id
      })
    }
    return (
      <GlobelContext.Provider value={{
        transcations: state.transcations,
        addTranscation,
        deleteTranscation
      }}>{children}</GlobelContext.Provider>
    )
}