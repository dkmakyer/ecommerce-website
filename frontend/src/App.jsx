import React from 'react'
import "./App.css"
import { Header , Footer } from './components/index.js'
import {HashRouter, Routes, Route} from "react-router-dom"
import { Home, About, Contact, SignUp, LogIn, ViewAll, ItemDetails, WishList, Cart } from './pages/index.js'

const App = () => {
  return (
    <>
      <HashRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          {/* <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Sign-up' element={<SignUp/>}/>
          <Route path='/Log-in' element={<LogIn/>}/>
          <Route path='/View-all' element={<ViewAll/>}/>
          <Route path='/Item-details' element={<ItemDetails/>}/>
          <Route path='/Wishlist' element={<WishList/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='*' element={<p>Page Not found</p>}/> */}
        </Routes>
        <Footer/>
      </HashRouter>
    </>
  )
}

export default App
