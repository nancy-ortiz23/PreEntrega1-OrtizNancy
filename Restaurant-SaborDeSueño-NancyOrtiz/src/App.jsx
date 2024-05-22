import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ItemListCointaner from "./components/ItemListContainer"
import MenuDetail from "./MenuDetail"
import CartContext from"/CartContext"
import CheckOut from './components/CheckOut'
import {doc,getDoc,getFirestore} from "firebase/firestore"
import { snapshotEqual } from 'firebase/firestore/lite'
function App() {
  
  const db=getFirestore();

  const prodRef=doc(db,"items","z7Ii8NrkQSeo5oQYVVdA");

  getDoc(prodRef).then(snapshot=> console.log(snapshot.data()))

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
