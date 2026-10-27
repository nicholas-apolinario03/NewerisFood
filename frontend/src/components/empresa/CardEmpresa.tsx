import type { Empresa } from "../../types/empresa";
 type CardEmpresaProps={
    empresa: Empresa;
 }
 function CardEmpresa({empresa}: CardEmpresaProps){
    return(
        <div>
           <h1> Perfil da Empresa</h1>
              <input type="text" placeholder={empresa.nome}/>
               <input type="text" placeholder={empresa.email}/>
                <input type="text" placeholder={empresa.telefone}/>
                 <input type="text" placeholder={empresa.endereco}/>
        </div>
    )



}
export default CardEmpresa;