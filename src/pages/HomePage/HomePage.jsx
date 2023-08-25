import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      <section class="food">
        <div class="food__container container">
            <h1 class="food__title">Your <span>favourite food</span> delivered <span>hot & fresh</span></h1>
            <p class="food__text">HEALTHY SWITCHER chefs do all the prep work, like peeling, chopping & marinating, so you can cook a fresh homemade dinner in just 15 minutes.</p>
            <div class="food__btn">
              <Link to='/create' class="btn btn--green">Create recipe</Link>
            </div>
        </div>
      </section>
    </>
  )
}

export default HomePage