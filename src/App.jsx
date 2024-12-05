import React from 'react'
import "./App.css"
import Header from './components/header/Header'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import SignUp from './pages/sign-up/Sign-up'
import LogIn from './pages/log-in/LogIn'
import Footer from './components/footer/Footer'
import ViewAll from './pages/view-all/ViewAll'
import ItemDetails from './pages/item-details/ItemDetails'
import WishList from './pages/wish-list/WishList'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact ' element={<Contact/>}/>
          <Route path='/Sign-up' element={<SignUp/>}/>
          <Route path='/Log-in' element={<LogIn/>}/>
          <Route path='/View-all' element={<ViewAll/>}/>
          <Route path='/Item-details' element={<ItemDetails/>}/>
          <Route path='/Wishlist' element={<WishList/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
