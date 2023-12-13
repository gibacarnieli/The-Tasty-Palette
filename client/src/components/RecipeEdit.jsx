import { useEffect, useState } from 'react'
import { Form, useActionData, useLoaderData, useNavigate } from 'react-router-dom'
import textedit from '../images/text-editrecipe.png'
import ImageUploadField from './ImageUploadField'

export default function RecipeEdit(){
  const res = useActionData()
  const navigate = useNavigate()
  const recipe = useLoaderData()

  useEffect(() => {
    // console.log('res->', res)
    if (res?.status === 200) {
      console.log('CREATED SUCCESSFULLY')
      navigate(`/recipes/${res.data._id}`)
    }
  }, [res, navigate])

  const [ formData, setFormData ] = useState({
    title: '',
    category: '',
    description: '',
    prepTime: 0,
    ingredients: [],
    method: '',
    poster: ''
  })

  // function handleChange(e) {
  //   setFormData({ ...formData, [e.target.name]: e.target.value })
  // }

  return (
    <>
      <img src={textedit} className="textrecipe"></img><br />
      <Form className='createform' method="POST">
        <div className="formstlying">
          <label hidden htmlFor="title"></label>
            <input className="createtittle" type="text" name="title" placeholder='Dish Name' defaultValue={recipe.title}/><br />

            <label hidden htmlFor="category"></label>
            <input className="createcategory" type="text" name="category" placeholder='Category' defaultValue={recipe.category}/><br />

            <label hidden htmlFor="description"></label>
            <textarea className="createdescription" type="number" name="description" placeholder='Description' defaultValue={recipe.description}></textarea><br />

            <label hidden htmlFor="prepTime"></label>
            <input className="createprepTime" type="text" name="prepTime" placeholder='PREP Time(mins)' defaultValue={recipe.prepTime} /><br />

            <label hidden htmlFor="ingredients"></label>
            <input className="createingredients" type="text" name="ingredients" placeholder='Ingredients' defaultValue={recipe.ingredients} /><br />

            <label hidden htmlFor="poster"></label>
            <input className="createposter" type="text" name="poster" placeholder='poster' defaultValue={recipe.poster}/><br />

            <label hidden htmlFor="method"></label>
            <textarea className="createmethod" name="method" placeholder='method' defaultValue={recipe.method}></textarea><br />

            <ImageUploadField setFormData={setFormData} formData={formData} />
            
            {res && <p className="danger">{res.data.message}</p>}
            <button className="createbtn" type="submit">Edit</button><br />
        </div>
      </Form>
    </>
  )
}