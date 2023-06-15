import{useState,useEffect} from 'react'
import{Link} from 'react-router-dom'
import blogFetch from '../axios/config'//importação do axios
import './Home.css' 


const Home = () => {
  const [posts,setPosts]=useState([])
//chamada da API
  const getPots=async()=>{
    
    try {
      const response=await blogFetch.get("/posts")

      const data=response.data
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    
    getPots()

  },[])
  return (
    
    <div className='home'>
      <h1>Ultimos Posts</h1>
      {posts.length===0 ?(<p>Carregando...</p>):(posts.map((post)=>(
        <div className='post' key={post.id}>
          
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <Link to={`/posts/${post.id}`} className='btnpost'>Ler mais</Link>

           </div>
      )))}
    </div>
  )
}

export default Home