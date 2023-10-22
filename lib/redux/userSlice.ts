
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../redux/store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


interface State { 
    currentUser: null | {id:string,name:string,email:string,image:string,createdAt:string,followingIds:string[],followedIds:string[]} ,
    currentPage:string ,
    currentProfile:null | {id:string,name:string,email:string,image:string,createdAt:string,followingIds:string[],followedIds:string[]} ,
    allPosts:null | {    body:string,id:string,image:string,createdAt:string,updatedAt:string,userId:string,user:{ id:string,name:string,email:string,image:string }}[]
    
}

const initialState : State = {
    currentUser:null,
    currentPage:"home",
    currentProfile:null,
    allPosts:null
    

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
        setAllPosts:(state,action) => {
            
            state.allPosts = action.payload
        },

        
    },
    extraReducers: (builder) => {
        builder        
    },
});

export const { setCurrentUser,setCurrentPage,setCurrentProfile,setAllPosts} = userSlice.actions;
export default userSlice.reducer;