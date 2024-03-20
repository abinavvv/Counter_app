import { createSlice } from "@reduxjs/toolkit";



export const kauttSlice = createSlice({
    name:'kauttApp',
    initialState:{
        value:0
    },
    /* actions are created  inside reducers key */
    reducers:{
        //function to increment
        increment:(state,action)=>{
            state.value+=action.payload
        },
        //function to decrement
        decrement:(state,action)=>{
            state.value-=action.payload
        },
        //function to reset
        reset:(state)=>{
            state.value = 0
        }
    }
})

/* used by componets */
export const{increment , decrement , reset} = kauttSlice.actions

export default kauttSlice.reducer