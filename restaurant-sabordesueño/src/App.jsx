//import Navbar from "./components/Navbar/Navbar";
import NavbarBoot from "./components/Navbarboot/NavbarBoot";
import itemListContainer from "./components/itemListContainer/itemListContainer";

function App() {
  
  return (
    <>
     {/* <Navbar/> */}
     <NavbarBoot/>
     <itemlistContainer greeting={"Bienvenido a nuestro restaurant"}/>
    </>
  )
}

export default App
