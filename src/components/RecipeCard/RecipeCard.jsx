import React from 'react'


const RecipeCard = ({image, title, desc, ingredients}) => {
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
          <button class="dishes__card-btn btn">Delete</button>
          <button class="dishes__card-btn btn">Favorite</button>
        </div>
      </div>
    </div>
  )
}

export default RecipeCard