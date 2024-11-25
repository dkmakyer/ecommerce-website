import React from 'react'
import "./App.css"
import Header from './components/header/Header'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import SignUp from './pages/Sign-up/Sign-up'
import LogIn from './pages/log-in/LogIn'
import Footer from './components/footer/Footer'
import ViewAll from './pages/view-all/ViewAll'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Contact' element={<About/>}/>
          <Route path='/About' element={<Contact/>}/>
          <Route path='/Sign-up' element={<SignUp/>}/>
          <Route path='/Log-in' element={<LogIn/>}/>
          <Route path='/View-all' element={<ViewAll/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
