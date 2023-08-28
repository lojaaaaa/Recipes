import React from 'react'
import { useSelector } from 'react-redux'
import RecipeCard from '../../components/RecipeCard/RecipeCard'
import FavoriteCard from '../../components/FavoriteCard/FavoriteCard'
import Loading from '../../components/Loading/Loading'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import Empty from '../../components/Empty/Empty'

const FavoritesPage = () => {

  const favorites = useSelector(state => state.favorites.favorites)
  const {status, error} = useSelector(state => state.favorites)


  return (
    <section className="dishes">
      <div className="dishes__container container">
        {status === 'success' && <>
          <h2 className="dishes__title title">Favorites</h2>
          <div className="dishes__line line--green"></div>
          <div className="dishes__cards">
            {favorites.length !== 0
            ? favorites.map(f => 
              <FavoriteCard 
                key={f.id}
                id={f.id}
                title={f.title}
                desc={f.description}
                image={f.image}
                ingredients={f.ingredients}
              />)
            : <Empty />
          }
          </div>
        </>}

        {status === 'loading' && <Loading />}
        {status === 'error' && <ErrorMessage error={error}/>}
      </div>
    </section>
  )
}

export default FavoritesPage