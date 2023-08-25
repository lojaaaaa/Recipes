import { createSlice } from "@reduxjs/toolkit";

const recipesSlice = createSlice({
  name: 'recipes',     
  initialState: {               
      recipes: [
        {
          "id": 1,
          "title":"Улитки по-бургундски",
          "description":"Подается в луковом соусе",
          "ingredients": ['Улитки виноградные', 'Масло сливочное', 'Лук зеленый'],
          "image": "./img/recipes/1.jpg"
        },
        {
          "id": 2,
          "title":"Улитки по-бургундски",
          "description":"Подается в луковом соусе",
          "ingredients": ['Улитки виноградные', 'Масло сливочное', 'Лук зеленый'],
          "image": "./img/recipes/2.jpg"
        },
        {
          "id": 3,
          "title":"Улитки по-бургундски",
          "description":"Подается в луковом соусе",
          "ingredients": ['Улитки виноградные', 'Масло сливочное', 'Лук зеленый'],
          "image": "./img/recipes/3.jpg"
        },
    ],
  },
  reducers: {        
  },

});



export default recipesSlice.reducer; 