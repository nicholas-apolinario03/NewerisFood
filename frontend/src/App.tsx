import { Route, Routes } from "react-router-dom";
import { CadastroEmpresa } from "./pages/CadastroEmpresa";
import {EstoqueEmpresa} from "./pages/EstoqueEmpresa"
import { PainelEmpresa } from "./pages/PainelEmpresa";
import { PaginaPedidos } from "./pages/Pedidos";
import { LoginEmpresa } from "./pages/LoginEmpresa";
import { ProtecaoRota } from "./components/ProtecaoRota";

function App() {
 
return(
  <Routes>
      <Route path ="/cadastro"  element={<CadastroEmpresa/>}/>
      <Route path ="/login"  element={<LoginEmpresa/>}/>
      <Route path="/estoque" element={
        <ProtecaoRota> <EstoqueEmpresa/> </ProtecaoRota>}/>
      <Route path="/painel" element={<ProtecaoRota> <PainelEmpresa/> </ProtecaoRota>}/>
       <Route path="/pedido" element={ <ProtecaoRota><PaginaPedidos/> </ProtecaoRota>}/>
     
        
      
  </Routes>
)
}

export default App
