import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteRecipe } from '../../redux/slices/recipesSlice'
import { addNewFavorite, addToFavorites, addToLocalStorage } from '../../redux/slices/favoritesSlice'


const RecipeCard = ({id, image, title, desc, ingredients}) => {

  const dispatch = useDispatch()
  const favorites = useSelector(state => state.favorites.favorites)

  const onClickDelete = () =>{
    dispatch(deleteRecipe(id))
  }

  const onClickFavorite= () =>{
    dispatch(addToLocalStorage({id, image, title, desc, ingredients}))
  }

  return (
    <div class="dishes__card">
      <div class="dishes__card-image">
        <img src={image} alt="card" class="dishes__card-img"/>
      </div>
      <div class="dishes__card-main">
        <div class="dishes__main">
          <div class="dishes__main-text">
            <h4 class="dishes__card-title">{title}</h4>
            <p class="dishes__card-desk">{desc}</p>
            <p class="dishes__card-text">{ingredients.join(', ')}</p>
          </div>
        </div>
        <div class="dishes__rating">
          <button class="dishes__card-btn btn" onClick={onClickDelete}>Delete</button>
          <button class="dishes__card-btn btn" onClick={onClickFavorite}>Favorite</button>
        </div>
      </div>
    </div>
  )
}

export default RecipeCard