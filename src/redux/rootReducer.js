import {combineReducers} from "@reduxjs/toolkit";
import recipesSlice from "./slices/recipesSlice";

const rootReducer = combineReducers({
  recipes: recipesSlice,
})

export default rootReducer