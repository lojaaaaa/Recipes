import React from 'react'
import { useSelector } from 'react-redux'
import RecipeCard from '../../components/RecipeCard/RecipeCard'
import FavoriteCard from '../../components/FavoriteCard/FavoriteCard'

const FavoritesPage = () => {

  const favorites = useSelector(state => state.favorites.favorites)

  return (
    <section className="dishes">
      <div className="dishes__container container">
        <h2 className="dishes__title title">Favorites</h2>
        <div className="dishes__line line--green"></div>
        <div className="dishes__cards">
        {favorites.map(f => 
            <FavoriteCard 
              key={f.id}
              id={f.id}
              title={f.title}
              desc={f.description}
              image={f.image}
              ingredients={f.ingredients}
            />)}
        </div>
      </div>
    </section>
  )
}

export default FavoritesPage