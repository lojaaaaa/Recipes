import React from 'react'
import style from './Search.module.scss'

const Search = () => {
  return (
    <form onSubmit={e => e.preventDefault()} className={style.search}>
      <input className={style.input} type="text" placeholder='Search'/>
      <button className={style.button}>🔍</button>
    </form>
  )
}

export default Search