import React from "react"
import {Div, Section} from "./styledCarrinho"

function Carrinho (props) {
    const 
    { 
        carrinho, 
        total, 
        onClickLimpaCarrinho, 
        onClickRemoveItem,
        onClickAddMais1
    } = props

    const quantidadeItens = carrinho.reduce(
        (acc, produto) => produto.quantidade + acc,
        0
    )

    return(
        <Div>
            <h2>Carrinho:</h2>
                {carrinho.length > 0 ? (
                <>
                    <p>Quantidade de intens: {quantidadeItens}</p>
                    {carrinho.map((item) => (
                       
                       <Section key={item.id}>
                           <span >
                               {item.name}
                           </span>
                           <span >
                               R$ {item.value}
                           </span>
                           <span>
                                Quantidade: {item.quantidade}
                            </span>
                           <button onClick={() => onClickRemoveItem(item)}>Remover</button>
                           <button onClick={() => onClickAddMais1(item)}>Adicionar</button>
                       </Section>            
                    ))}  
                    <p>Valor total: R${total}</p> 
                    <button onClick={onClickLimpaCarrinho}>Limpar carrinho</button>
                </>   
                             
                )
                :
                ( 
                <>
                  <p>Carrinho vazio  </p>
                  <p>Valor total: R${total}</p>    
                </>

                )
                }
        </Div>
    )
}



export default Carrinho