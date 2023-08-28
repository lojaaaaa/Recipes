import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = () => {
  return (
    <header className="header">
      <div className="header__container container">
          <NavLink to='/' className="header__logo">
            <svg className="header__logo-img" alt="logo" width="26" height="34" viewBox="0 0 26 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 16H17.0678C21.9511 16 25.9099 19.9588 25.9099 24.8421C25.9099 29.7255 21.9511 33.6842 17.0678 33.6842H0V16Z" fill="#34c759"/>
              <path d="M0 0.526337H11.3927C15.0552 0.526337 18.0243 3.4954 18.0243 7.15792C18.0243 10.8204 15.0552 13.7895 11.3927 13.7895H0V0.526337Z" fill="#34c759"/>
            </svg> 
          </NavLink>
          <ul className="header__menu">
            <li className="header__menu-item">
              <NavLink to='/' className="header__menu-link">Home</NavLink>
            </li>
            <li className="header__menu-item">
              <NavLink to='/recipes' className="header__menu-link">Recipes</NavLink>
            </li>
            <li className="header__menu-item">
              <NavLink to='/create' className="header__menu-link">Create</NavLink>
            </li>
            <li className="header__menu-item">
              <NavLink to='/favorites' className="header__menu-link">Favorites</NavLink>
            </li>
          </ul>
      </div>
  </header>
  )
}

export default Header