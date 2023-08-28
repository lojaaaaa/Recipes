import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      <section className="food">
        <div className="food__container container">
            <h1 className="food__title">Your <span>favourite food</span> delivered <span>hot & fresh</span></h1>
            <p className="food__text">HEALTHY SWITCHER chefs do all the prep work, like peeling, chopping & marinating, so you can cook a fresh homemade dinner in just 15 minutes.</p>
            <div className="food__btn">
              <Link to='/create' className="btn btn--green">Create recipe</Link>
            </div>
        </div>
      </section>
    </>
  )
}

export default HomePage