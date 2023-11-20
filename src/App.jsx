import { Route, Routes } from "react-router-dom";
import Home from "./Home"
import Contacto from "./Contacto"
import Beer from "./Beer";
import Navbar from "./components/Navbar";

function App() {
  return (
   <>
      <Navbar/>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/contacto" Component={Contacto}/>
        <Route path="/beer/:id" Component={Beer}/>
      </Routes>
   </>
  )
}

export default App
