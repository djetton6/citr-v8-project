import {createSlice} from '@reduxjs/toolkit';

const searchParamsSlice = createSlice({
    value: {
        initialState: {
            location: "",
            breed: "",
            animal: ""
        },
    }
    name: "searchParams",

    reducers: {
        all: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const {all} = searchParamsSlice.action
export default searchParamsSlice.reducers
