import{Route, BrowserRouter,Routes} from'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './routes/Home.jsx'
import NewPost from './routes/NewPost.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    
      <Routes>
        <Route element={<App/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/new' element={<NewPost/>}/>
        </Route>
      </Routes>


    </BrowserRouter>
    
  </React.StrictMode>,
);
