import {combineReducers} from "@reduxjs/toolkit";
import recipesSlice from "./slices/recipesSlice";
import favoritesSlice from "./slices/favoritesSlice";

const rootReducer = combineReducers({
  recipes: recipesSlice,
  favorites: favoritesSlice
})

export default rootReducer