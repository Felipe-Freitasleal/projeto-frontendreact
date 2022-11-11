import React from "react"
import {Div} from "./styledProduto"

function Produto (props) {
    const { produto, onClickAdd } = props

    return(
        <Div>
               <span>
                <img src={produto.imageUrl} alt="foto do produto"/>
               </span>
               <p>
                {produto.name}
               </p>
               <p>
                Valor: R${produto.value}
               </p>
               <button onClick={() => onClickAdd(produto)}>
                Adicionar ao carrinho
               </button>
        </Div>
    )
}


export default Produto