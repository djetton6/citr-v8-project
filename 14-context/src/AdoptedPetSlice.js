import { createSlice } from '@reduxjs/toolkit';

export const adoptedPetSlice = createSlice({
    name: "adoptedPet",
    initialState: {
        value: null
    },
    //reducer just takes an old state, and an action, to return a new state 
    reducers : {
        adopt: (state, action) => {
            // make state changes here
            state.value = action.payload;
        }
    },
    }, 
);
// under the hood | whenever reducer is createed, it creates an action
export const { adopt } = adoptedPetSlice.actions
export default adoptedPetSlice.reducer;