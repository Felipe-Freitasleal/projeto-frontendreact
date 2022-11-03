import React from "react"
import {Div} from "./styledProduto"

function Produto (props) {

    return(
        <Div>
               <span>
                <img src={props.foto} alt="foto do produto"/>
               </span>
               <p>
                {props.nome}
               </p>
               <p>
                Valor: R${props.preco}
               </p>
               <button>
                Adicionar ao carrinho
               </button>
        </Div>
    )
}


export default Produto