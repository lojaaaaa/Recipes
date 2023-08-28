import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const parseFavorites =  () => {
  const favorites =  JSON.parse(localStorage.getItem("favorites"))
  return favorites || []
}

const setFavorites = (favorites, dispatch) => {
  localStorage.setItem("favorites", JSON.stringify(favorites))
  dispatch(updateFavorites(favorites))
}


export const getFromLocalStorage = createAsyncThunk(
  'favorites/getFromLocalStorage',
  async function(_, {rejectWithValue}){
    try {
      const favorites = await parseFavorites()
      return favorites

    } catch (error) {
      return rejectWithValue
    }
  }
)


export const addToLocalStorage = createAsyncThunk(
  'favorites/addToLocalStorage',
  async function(favorite, {rejectWithValue, dispatch}){
    try {
      const favorites = await parseFavorites()

      if (!favorites.find(f => f.id === favorite.id)){
        favorites.push(favorite)
        await setFavorites(favorites, dispatch)
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
      const favorites = await parseFavorites()
      await setFavorites(favorites.filter(f => f.id !== favorite.id), dispatch)
      
    } catch (error) {
      return rejectWithValue
    }
  }
)




const favoritesSlice = createSlice({
  name: 'favorites',     
  initialState: {               
    favorites: [],
    status: 'init',
    error: null
  },
  reducers: {
    updateFavorites(state, action){
      state.favorites = action.payload
    },
  },
  extraReducers: {
    [getFromLocalStorage.pending]: (state, action) => {
      state.status = 'loading'
      state.error = null;
    },
    [getFromLocalStorage.fulfilled]: (state, action) => {
      state.favorites = action.payload;
      state.status = 'success'
    },
    [getFromLocalStorage.rejected]: (state, action) => {
      state.favorites = action.payload;
      state.status = 'success'
      state.error = action.payload
    },
  }
  
  
})


export const {updateFavorites} = favoritesSlice.actions
export default favoritesSlice.reducer; 