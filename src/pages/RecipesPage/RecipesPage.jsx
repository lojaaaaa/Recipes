import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import Loading from '../../components/Loading/Loading'
import Empty from '../../components/Empty/Empty'
import RecipesList from '../../components/RecipesLIst/RecipesList'

const RecipesPage = () => {


  const {status, error, recipes} = useSelector(state => state.recipes)
  
  return (
    <>
      <section className="dishes">
        <div className="dishes__container container">
          {status === 'success' && <>
            <h2 className="dishes__title title">DISHES</h2>
            <div className="dishes__line line--green"></div>
            <div className="dishes__cards">
              {recipes.length !== 0
              ? <RecipesList recipes={recipes}/>
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