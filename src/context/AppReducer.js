/* eslint-disable import/no-anonymous-default-export */
export default (state, action) =>{
   switch(action.type){
       case'ADD_TRANSCATION':
           return{
            ...state,
            transcations:[action.payload, ...state.transcations]
           }

        case'DELETE_TRANSCATION':
        return{
            ...state,
            transcations: state.transcations.filter(transcation => transcation.id !== action.payload)
        }
       default: 
       return state;
   }
}

// AppReducer --> managing all the functionalities in state