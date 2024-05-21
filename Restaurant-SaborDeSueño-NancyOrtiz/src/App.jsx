import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ItemListCointaner from "./components/ItemListContainer"
import MenuDetail from "./MenuDetail"
import CartContext from"/CartContext"
import CheckOut from './components/CheckOut'
function App() {
 

  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<ItemListCointaner saludo="Nuestros Menus" />} />
      <Route path="/description/:idDescription" element={<ItemListCointaner saludo="Nuestros Menus"/>} />
      <Route path="/menu/:idMenu" element={<MenuDetail/>} />
    </Routes>
   </BrowserRouter>
  )
}

export default App
