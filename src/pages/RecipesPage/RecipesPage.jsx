import React, { useEffect } from 'react'
import RecipeCard from '../../components/RecipeCard/RecipeCard'
import { useDispatch, useSelector } from 'react-redux'

const RecipesPage = () => {

  const recipes = useSelector(state => state.recipes.recipes)


  return (
    <>
      <section className="dishes">
        <div className="dishes__container container">
          <h2 className="dishes__title title">DISHES</h2>
          <div className="dishes__line line--green"></div>
          <div className="dishes__cards">
            {recipes.map(r => 
            <RecipeCard 
              key={r.id}
              title={r.title}
              desc={r.description}
              image={r.image}
              ingredients={r.ingredients}
            />)}
          </div>
        </div>
      </section>
    </>
  )
}

export default RecipesPage