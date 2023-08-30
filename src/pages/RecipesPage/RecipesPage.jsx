import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import Loading from '../../components/Loading/Loading'
import Empty from '../../components/Empty/Empty'
import RecipesList from '../../components/RecipesLIst/RecipesList'
import Search from '../../components/Search/Search'

const RecipesPage = () => {


  const {status, error, recipes} = useSelector(state => state.recipes)
  
  const [filteredRecipes, setFilteredResipes] = useState([])

  useEffect(() => {
    setFilteredResipes(recipes);
  }, [recipes]);


  return (
    <>
      <section className="dishes">
        <div className="dishes__container container">
          {status === 'success' && <>
            <h2 className="dishes__title title">DISHES</h2>
            <div className="dishes__line line--green"></div>
            <Search recipes={recipes} setFilteredResipes={setFilteredResipes}/>
            <div className="dishes__cards">
              {filteredRecipes.length !== 0
              ? <RecipesList recipes={filteredRecipes}/>
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