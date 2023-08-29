import React from 'react'
import { useSelector } from 'react-redux'
import Loading from '../../components/Loading/Loading'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import Empty from '../../components/Empty/Empty'
import FavoritesList from '../../components/FavoritesList/FavoritesList'

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
            ? <FavoritesList favorites={favorites}/>
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