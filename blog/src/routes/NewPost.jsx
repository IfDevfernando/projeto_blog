import './NewPost.css'
import blogFetch from '../axios/config'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const NewPost = () => {

  const navigate=useNavigate()

  const[title,setTitle]=useState()
  const[body,setBody]=useState()

  const createPost= async(e)=>{
    e.preventDefault()

    const post={title,body,userId:1}

    await blogFetch.post("/posts",{
      body:post,
    })
      navigate("/")
  }



  return (
    <div className="new-post">
      <h2>Inserir novo post</h2>
      <form onSubmit={(e)=>createPost(e)}>
        <div className="form-control">
          <label htmlFor="title">Titulo:</label>
          <input type="text"  name="title" id="tilte" placeholder="digite aqui" onChange={(e)=>setTitle(e.target.value)}/>
          
        </div>
        <div className="form-control">
          <label htmlFor="body">Conteudo:</label>
          <textarea name="title" id="title"></textarea>
          <button type="submit" className="btnpost" onChange={(e)=>setBody(e.target.value)}>Postar</button>
        </div>
      </form>
    </div>
  )
}

export default NewPost