import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addRecipe } from '../../redux/slices/recipesSlice'

const CreateForm = () => {

  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const [ingred, setIngred] = useState('')

  const recipes = useSelector(state => state.recipes.recipes)
  const dispatch = useDispatch()

  const onSubmitForm = (e) =>{
    e.preventDefault()
    const recipe = {
      id: recipes.length,
      title: name,
      description: desc,
      ingredients: ingred.split('\n'),
      image: "./img/recipes/1.jpg"
    }

    dispatch(addRecipe(recipe))
  }

  return (
    <form onSubmit={onSubmitForm} className="create__form">
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
      placeholder='Cook Time ~ 35 min'/>
    <textarea 
      value={ingred} 
      onChange={e => setIngred(e.target.value)}
      className="create__form-input input" 
      placeholder='1 tablespoon unsalted butter and etc...'></textarea>
    <input type="file" className="create__form-input" />
    <button className='btn btn--green'>Create recipe</button>
  </form>
  )
}

export default CreateForm