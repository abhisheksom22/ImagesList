import { createSlice } from "@reduxjs/toolkit";


//to create slice in store
export const imagesListSlice = createSlice({
    name:'imagesList',
    initialState:[],
    reducers:{
        fetchImages:(state,action)=>{
            state=action.payload;
            return state;
        }
    }
});

export const {fetchImages}=imagesListSlice.actions;
export default imagesListSlice.reducer