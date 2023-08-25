import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewRecipe, addRecipe } from '../../redux/recipesSlice'

const CreatePage = () => {

  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const [ingred, setIngred] = useState('')

  const recipes = useSelector(state => state.recipes.recipes)
  const dispatch = useDispatch()

  const onClickButton = () =>{
    const recipe = {
      id: recipes.length,
      title: name,
      description: desc,
      ingredients: ingred.split(' '),
      image: "./img/recipes/1.jpg"
    }

    dispatch(addRecipe(recipe))
  }

  return (
    <>
      <section className="create">
        <div className="create__container container">
          <h2 className="create__title title">Create</h2>
          <div className="create__line line--green"></div>
          <form onSubmit={e => e.preventDefault()} className="create__form">
            <input
              value={name}  
              onChange={e => setName(e.target.value)}
              type="text" 
              className="create__form-input input" 
              placeholder='Dish'/>
            <input 
              value={desc} 
              onChange={e => setDesc(e.target.value)}
              type="text" 
              className="create__form-input input" 
              placeholder='Description'/>
            <textarea 
              value={ingred} 
              onChange={e => setIngred(e.target.value)}
              className="create__form-input input" 
              placeholder='Ingredients'></textarea>
            <input type="file" className="create__form-input" />
            <button onClick={onClickButton} className='btn btn--green'>Create recipe</button>
          </form>
        </div>
      </section>
  </>
  )
}

export default CreatePage