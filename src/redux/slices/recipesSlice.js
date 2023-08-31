import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getRecipes = createAsyncThunk(
  'recipes/getRecipes',
  async function (_, {rejectWithValue}) {
    try {
      const response = await axios.get('https://64e8e44799cf45b15fe04aa2.mockapi.io/items')
      const data = response.data
      
      return data
  
    } catch (error) {

      return rejectWithValue(error.message)
    }
  }
)



export const addRecipe = createAsyncThunk(
  'recipes/addRecipe',
  async function (item, {rejectWithValue, dispatch}) {
    try {
      const response = await axios.post('https://64e8e44799cf45b15fe04aa2.mockapi.io/items', item)
      const data = response.data
      dispatch(addNewRecipe(data));
  
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const deleteRecipe = createAsyncThunk(
  'recipes/deleteRecipe',
  async function (id, {rejectWithValue, dispatch}) {
    try {
      await axios.delete(`https://64e8e44799cf45b15fe04aa2.mockapi.io/items/${id}`)
      dispatch(removeRecipe(id))

    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)


const recipesSlice = createSlice({
  name: 'recipes',     
  initialState: {               
      recipes: [],
      status: 'init',
      error: null
  },
  reducers: {
    addNewRecipe(state, action){
      state.recipes.push(action.payload) 
    },
    removeRecipe(state, action){
      state.recipes = state.recipes.filter(recipe => recipe.id !== action.payload)
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getRecipes.pending, state => {
        state.status = 'loading';
      })
      .addCase(getRecipes.fulfilled, (state, action) => {
        state.status = 'success';
        state.recipes = action.payload;
      })
      .addCase(getRecipes.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.payload;
      })
  }
})

export const {addNewRecipe, removeRecipe} = recipesSlice.actions
export default recipesSlice.reducer; 