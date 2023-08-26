import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const favoritesSlice = createSlice({
  name: 'favorites',     
  initialState: {               
    favorites: [],
  },
  reducers: {
    addNewFavorite(state, action){
      state.favorites.push(action.payload) 
    },
  },
  extraReducers: {
  }
})


export const {addNewFavorite} = favoritesSlice.actions
export default favoritesSlice.reducer; 