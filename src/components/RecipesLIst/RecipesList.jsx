import React from 'react'
import RecipeCard from '../RecipeCard/RecipeCard'

const RecipesList = ({recipes}) => {

  return (
    <>
      {recipes.map(r => 
        <RecipeCard 
          key={r.id}
          id={r.id}
          title={r.title}
          desc={r.description}
          image={r.image}
          ingredients={r.ingredients}
        />)}
    </>

  )
}

export default RecipesList