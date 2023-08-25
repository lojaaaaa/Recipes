import React from 'react'

const RecipeCard = ({image, title, desc, ingredients}) => {
  return (
    <div class="dishes__card">
      <div class="dishes__card-image">
        <img src={image} alt="card" class="dishes__card-img"/>
      </div>
      <div div class="dishes__card-main">
        <h4 class="dishes__card-title">{title}</h4>
        <p class="dishes__card-desk">{desc}</p>
        <p class="dishes__card-text">{ingredients.join(', ')}</p>
      </div>
    </div>
  )
}

export default RecipeCard