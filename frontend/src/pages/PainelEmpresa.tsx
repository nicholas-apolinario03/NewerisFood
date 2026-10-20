import { FormularioProduto } from "../components/cardapio/FormularioProdutos";
import { useCardapio } from "../hooks/useCardapio";
import { useEstoque } from "../hooks/useEstoque";
import { ListarCardapio } from "../components/cardapio/ListaCardapio";
import { useState } from "react";

export function PainelEmpresa(){
    const {produto,erro, carregando, cadastrarProduto} = useCardapio()
    const { insumos: insumosDisponiveis } = useEstoque();
    const [exibirFormulario, setExibirFormulario] = useState(false);
    
    const categoriasExistentes = Array.from(
        new Set(produto.map(p => p.categoria).filter(Boolean))
    );
    return(
        <div>
            <div>
                  <button 
                    onClick={() => setExibirFormulario(!exibirFormulario)}
                    style={{
                        padding: '10px 18px',
                        background: exibirFormulario ? '#6c757d' : '#28a745',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '6px',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                    }}
                >
                    {exibirFormulario ? '✕ Fechar Formulário' : '➕ Adicionar ao Cardapio'}
                </button>
            </div>
              {/* Seção do Formulário de Pedido Manual (Expansível) */}
                        {exibirFormulario && (
                            <div style={{ marginBottom: '30px' }}>
                                 <FormularioProduto  insumosDisponiveis={insumosDisponiveis} categorias={categoriasExistentes} aoSalvar={cadastrarProduto} carregando={carregando}/>
                            </div>
                        )}
              {erro && <p style={{ color: "red" }}>{erro}</p>}
          
           <ListarCardapio  produtos={produto}/>
        </div>
    )
}