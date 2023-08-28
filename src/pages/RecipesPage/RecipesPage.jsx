import React, { useEffect } from 'react'
import RecipeCard from '../../components/RecipeCard/RecipeCard'
import { useDispatch, useSelector } from 'react-redux'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import Loading from '../../components/Loading/Loading'
import Empty from '../../components/Empty/Empty'

const RecipesPage = () => {

  const recipes = useSelector(state => state.recipes.recipes)
  const {status, error} = useSelector(state => state.recipes)
  

  return (
    <>
      <section className="dishes">
        <div className="dishes__container container">
          {status === 'success' && <>
            <h2 className="dishes__title title">DISHES</h2>
            <div className="dishes__line line--green"></div>
            <div className="dishes__cards">
              {recipes.length !== 0
              ? recipes.map(r => 
              <RecipeCard 
                key={r.id}
                recipes={recipes}
                id={r.id}
                title={r.title}
                desc={r.description}
                image={r.image}
                ingredients={r.ingredients}
              />)
              : <Empty />
              }
            </div>
          </>}

          {status === 'loading' && <Loading />}
          {status === 'error' && <ErrorMessage error={error}/>}
        </div>
      </section>
    </>
  )
}

export default RecipesPage