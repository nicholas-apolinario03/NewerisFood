import { Route, Routes } from "react-router-dom";
import { CadastroEmpresa } from "./pages/CadastroEmpresa";
import {EstoqueEmpresa} from "./pages/EstoqueEmpresa"
import { PainelEmpresa } from "./pages/PainelEmpresa";
import { PaginaPedidos } from "./pages/Pedidos";
import { LoginEmpresa } from "./pages/LoginEmpresa";

function App() {
 
return(
  <Routes>
      <Route path ="/cadastro"  element={<CadastroEmpresa/>}/>
      <Route path ="/login"  element={<LoginEmpresa/>}/>
      <Route path="/estoque" element={<EstoqueEmpresa/>}/>
      <Route path="/painel" element={<PainelEmpresa/>}/>
       <Route path="/pedido" element={<PaginaPedidos/>}/>
     
        
      
  </Routes>
)
}

export default App
