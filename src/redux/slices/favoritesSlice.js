import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const addToLocalStorage = createAsyncThunk(
  'favorites/addToLocalStorage',
  async function(favorite, {rejectWithValue, dispatch}){
    try {
      const favorites = await JSON.parse(localStorage.getItem("favorites"))
      favorites.push(favorite)
      
      await localStorage.setItem("favorites", JSON.stringify(favorites))
      dispatch(addNewFavorite(favorites))

    } catch (error) {
      return rejectWithValue
    }
  }
)



export const getFromLocalStorage = createAsyncThunk(
  'favorites/getFromLocalStorage',
  async function(_, {rejectWithValue}){
    try {
      const favorites = await localStorage.getItem("favorites");
      return favorites

    } catch (error) {
      return rejectWithValue
    }
  }
)


const favoritesSlice = createSlice({
  name: 'favorites',     
  initialState: {               
    favorites: [],
  },
  reducers: {
    addNewFavorite(state, action){
      state.favorites = action.payload
    },
  },
  extraReducers: {
    [getFromLocalStorage.fulfilled]: (state, action) => {
      state.favorites = JSON.parse(action.payload);
  },
  }
  
  
})


export const {addNewFavorite} = favoritesSlice.actions
export default favoritesSlice.reducer; 