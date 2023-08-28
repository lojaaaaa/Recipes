import React from 'react'
import style from './ErrorMessage.module.scss'

const ErrorMessage = ({error}) => {
  return (
    <div className={style.message}>{error}!</div>
  )
}

export default ErrorMessage