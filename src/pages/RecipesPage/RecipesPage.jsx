import React from 'react'
import RecipesWrapper from '../../components/RecipesWrapper/RecipesWrapper'

const RecipesPage = () => {

  return (
    <>
      <section className="dishes">
        <RecipesWrapper>
          <h2 className="dishes__title title">DISHES</h2>
          <div className="dishes__line line--green"></div>
        </RecipesWrapper>
      </section>
    </>
  )
}

export default RecipesPage