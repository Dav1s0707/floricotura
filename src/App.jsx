import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Cadastro from "./pages/Cadastro";
import "./App.css"

function App(){
  return(
    <div>
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/produtos" element={<Produtos/>}/>
    <Route path="/Cadastro" element={<Cadastro/>}/>
  </Routes>
</BrowserRouter>
    </div>
  )
}
export default App