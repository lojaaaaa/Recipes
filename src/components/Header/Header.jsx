import React from 'react'

const Header = () => {
  return (
    <header class="header">
      <div class="header__container container">
          <a href="#" class="header__logo">
            <svg class="header__logo-img" alt="logo" width="26" height="34" viewBox="0 0 26 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 16H17.0678C21.9511 16 25.9099 19.9588 25.9099 24.8421C25.9099 29.7255 21.9511 33.6842 17.0678 33.6842H0V16Z" fill="#34c759"/>
              <path d="M0 0.526337H11.3927C15.0552 0.526337 18.0243 3.4954 18.0243 7.15792C18.0243 10.8204 15.0552 13.7895 11.3927 13.7895H0V0.526337Z" fill="#34c759"/>
            </svg> 
          </a>
          <ul class="header__menu">
            <li class="header__menu-item"><a href="#" class="header__menu-link">Home</a></li>
              <li class="header__menu-item"><a href="#" class="header__menu-link">Recipes</a></li>
              <li class="header__menu-item"><a href="#" class="header__menu-link">Create</a></li>
              <li class="header__menu-item"><a href="#" class="header__menu-link">Favorites</a></li>
          </ul>
      </div>
  </header>
  )
}

export default Header