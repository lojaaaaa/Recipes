import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const addToLocalStorage = createAsyncThunk(
  'favorites/addToLocalStorage',
  async function(favorite, {rejectWithValue, dispatch}){
    try {
      let favorites = await JSON.parse(localStorage.getItem("favorites"))

      if (!favorites.find(f => f.id === favorite.id)){
        favorites.push(favorite)
        await localStorage.setItem("favorites", JSON.stringify(favorites))
        dispatch(updateFavorites(favorites))
      }
      
    } catch (error) {
      return rejectWithValue
    }
  }
)

export const deleteFromLocalStorage = createAsyncThunk(
  'favorites/deleteFromLocalStorage',
  async function(favorite, {rejectWithValue, dispatch}){
    try {
      let favorites = await JSON.parse(localStorage.getItem("favorites"))

      favorites = favorites.filter(f => f.id !== favorite.id)
      await localStorage.setItem("favorites", JSON.stringify(favorites))
      dispatch(updateFavorites(favorites))

      
    } catch (error) {
      return rejectWithValue
    }
  }
)


export const getFromLocalStorage = createAsyncThunk(
  'favorites/getFromLocalStorage',
  async function(_, {rejectWithValue}){
    try {
      const favorites = await JSON.parse(localStorage.getItem("favorites"));
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
    updateFavorites(state, action){
      state.favorites = action.payload
    },
  },
  extraReducers: {
    [getFromLocalStorage.fulfilled]: (state, action) => {
      state.favorites = action.payload;
  },
  }
  
  
})


export const {updateFavorites} = favoritesSlice.actions
export default favoritesSlice.reducer; 