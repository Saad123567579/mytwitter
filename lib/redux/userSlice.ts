'use client'
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../redux/store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

interface State { 
    currentUser: null | object ,
    
}

const initialState : State = {
    currentUser:null,
    

};






export const userSlice = createSlice({
    name: 'user',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
    
        setCurrentUser:(state,action) => {
            
            state.currentUser = action.payload
        },
        
    },
    extraReducers: (builder) => {
        builder
           
           
            
    },
    


});

export const { setCurrentUser} = userSlice.actions;
export default userSlice.reducer;