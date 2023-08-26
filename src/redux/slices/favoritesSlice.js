import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const recipesSlice = createSlice({
  name: 'recipes',     
  initialState: {               
      recipes: [],
  },
  reducers: {
    addNewFavirite(state, action){
      state.recipes.push(action.payload) 
    },
  },
  extraReducers: {
  }
})


export const {addNewRecipe, removeRecipe} = recipesSlice.actions
export default recipesSlice.reducer; 