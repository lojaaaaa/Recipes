import React, { useRef } from 'react'
import style from './Search.module.scss'

const Search = ({setFilteredResipes, recipes}) => {

  const searchValue = useRef('')

  const onSearchChange = () => {
    const filteredRecipes = recipes.filter(f => 
    f.title.toLowerCase().includes(searchValue.current.value.toLowerCase()))

    setFilteredResipes(filteredRecipes)
  }

  return (
    <form onSubmit={e => e.preventDefault()} className={style.search}>
      <input onChange={onSearchChange} ref={searchValue} className={style.input} type="text" placeholder='Search'/>
      <button className={style.button}>🔍</button>
    </form>
  )
}

export default Search