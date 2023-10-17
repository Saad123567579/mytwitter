'use client'

import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../redux/store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

interface State { 
    currentUser: null | {id:string,name:string,email:string,image:string,createdAt:string} ,
    currentPage:string 
    currentProfile:null | {id:string,name:string,email:string,image:string,createdAt:string} 
    
}

const initialState : State = {
    currentUser:null,
    currentPage:"home",
    currentProfile:null
    

};


export const userSlice = createSlice({
    name: 'user',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
    
        setCurrentUser:(state,action) => {
            
            state.currentUser = action.payload
        },
        setCurrentPage:(state,action) => {
            
            state.currentPage = action.payload
        },
        setCurrentProfile:(state,action) => {
            
            state.currentProfile = action.payload
        },

        
    },
    extraReducers: (builder) => {
        builder        
    },
});

export const { setCurrentUser,setCurrentPage,setCurrentProfile} = userSlice.actions;
export default userSlice.reducer;