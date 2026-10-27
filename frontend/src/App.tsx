import { Route, Routes } from "react-router-dom";
import { CadastroEmpresa } from "./pages/CadastroEmpresa";
import { EstoqueEmpresa } from "./pages/EstoqueEmpresa"
import { PainelEmpresa } from "./pages/PainelEmpresa";
import { PaginaPedidos } from "./pages/Pedidos";
import { LoginEmpresa } from "./pages/LoginEmpresa";
import { ProtecaoRota } from "./components/ProtecaoRota";
import { PublicRoute } from "./components/PublicRoute";
import { PerfilEmpresa } from "./pages/PerfilEmpresa";

function App() {

  return (
    <Routes>
      <Route path="/cadastro" element={<PublicRoute> <CadastroEmpresa /></PublicRoute>} />
      <Route path="/login" element={<PublicRoute> <LoginEmpresa /></PublicRoute>} />
      <Route path="/estoque" element={<ProtecaoRota> <EstoqueEmpresa /> </ProtecaoRota>} />
      <Route path="/painel" element={<ProtecaoRota> <PainelEmpresa /> </ProtecaoRota>} />
      <Route path="/pedido" element={<ProtecaoRota><PaginaPedidos /> </ProtecaoRota>} />
      <Route path="/perfil" element={<ProtecaoRota>< PerfilEmpresa /> </ProtecaoRota>} />



    </Routes>
  )
}

export default App
