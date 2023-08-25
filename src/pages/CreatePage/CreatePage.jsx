import React from 'react'

const CreatePage = () => {
  return (
    <>
    <section className="create">
      <div className="create__container container">
        <h2 className="create__title title">Create</h2>
        <div className="create__line line--green"></div>
        <form onSubmit={e => e.preventDefault()} className="create__form">
          <input type="text" className="create__form-input input" placeholder='Dish'/>
          <input type="text" className="create__form-input input" placeholder='Description'/>
          <textarea className="create__form-input input" placeholder='Ingredients'></textarea>
          <input type="file" className="create__form-input" />
          <button className='btn btn--green'>Create recipe</button>
        </form>
      </div>
    </section>
  </>
  )
}

export default CreatePage