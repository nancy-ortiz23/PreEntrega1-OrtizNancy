//import Navbar from "./components/Navbar/Navbar";
import NavbarBoot from "./components/Navbarboot/NavbarBoot";
import itemListContainer from "./components/itemListContainer/itemListContainer";
import {BrowserRouter,Routes,Router} from 'React-router-dom'

function App() {
  
  return (
      <BrowserRouter>
      <Nabvar/>
      <Routes>
      <Route path='/' element={<itemListContainer saludo= "Nuestros Menu" />}/>
     
      
      
      
      
      </Routes>
      </BrowserRouter>
    
  )
}

export default App
