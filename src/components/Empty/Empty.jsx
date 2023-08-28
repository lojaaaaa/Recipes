import React from 'react'
import style from './Empty.module.scss'

const Empty = () => {
  return (
    <div className={style.message}>No recipes yet</div>
  )
}

export default Empty