import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteRecipe } from '../../redux/slices/recipesSlice'
import { addNewFavorite } from '../../redux/slices/favoritesSlice'


const FavoriteCard = ({id, image, title, desc, ingredients}) => {

  const dispatch = useDispatch()
  


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
          <button class="dishes__card-btn btn">Remove</button>
        </div>
      </div>
    </div>
  )
}

export default FavoriteCard