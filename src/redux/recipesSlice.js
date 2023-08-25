import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getRecipes = createAsyncThunk(
  'recipes/getRecipes',
  async function (_, {rejectWithValue}) {
    try {
      const response = await axios.get('https://64e8e44799cf45b15fe04aa2.mockapi.io/items')
      const data = response.data
      console.log(data)
      
      return data
  
    } catch (error) {

      return rejectWithValue(error.message)
    }
  }

)



const recipesSlice = createSlice({
  name: 'recipes',     
  initialState: {               
      recipes: [],
  },
  reducers: {        
  },
  extraReducers: {
    [getRecipes.pending]: (state, action) => {
    },
    [getRecipes.fulfilled]: (state, action) => {
        state.recipes = action.payload;
    },
  }
})



export default recipesSlice.reducer; 