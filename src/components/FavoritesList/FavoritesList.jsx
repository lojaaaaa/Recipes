import React from 'react'
import FavoriteCard from '../FavoriteCard/FavoriteCard'

const FavoritesList = ({favorites}) => {
  return (
    <>
      {favorites.map(f => 
        <FavoriteCard 
          key={f.id}
          id={f.id}
          title={f.title}
          desc={f.description}
          image={f.image}
          ingredients={f.ingredients}
        />)
      }
    </>
  )
}

export default FavoritesList