import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Navbar';
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Login from './pages/authentication/Login'
import Hero from './pages/Hero';
import Main from './pages/Main';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     {/* <BrowserRouter> */}
    
     <Routes>
     <Route path='/' element={<Hero/>}/>
     <Route path='/dashboard' element={<Main/>}/>
     <Route path='/login' element={<Login/>}/>
     </Routes> 
     <Home/>
     <Footer/>
     {/* </BrowserRouter> */}
     
    </>
  )
}

export default App
