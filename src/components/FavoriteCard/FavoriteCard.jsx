import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteRecipe } from '../../redux/slices/recipesSlice'
import { addNewFavorite, deleteFromLocalStorage } from '../../redux/slices/favoritesSlice'


const FavoriteCard = ({id, image, title, desc, ingredients}) => {

  const dispatch = useDispatch()
  
  const onClickRemove = () =>{
    dispatch(deleteFromLocalStorage({id, image, title, desc, ingredients}))
  }

  return (
    <div className="dishes__card">
      <div className="dishes__card-image">
        <img src={image} alt="card" className="dishes__card-img"/>
      </div>
      <div className="dishes__card-main">
        <div className="dishes__main">
          <div className="dishes__main-text">
            <h4 className="dishes__card-title">{title}</h4>
            <p className="dishes__card-desk">{desc}</p>
            <p className="dishes__card-text">{ingredients.join(', ')}</p>
          </div>
        </div>
        <div className="dishes__rating">
          <button className="dishes__card-btn btn" onClick={onClickRemove}>Remove</button>
        </div>
      </div>
    </div>
  )
}

export default FavoriteCard