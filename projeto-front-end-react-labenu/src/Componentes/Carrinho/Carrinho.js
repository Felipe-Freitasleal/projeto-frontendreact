import React from "react"
import {Div, Section} from "./styledCarrinho"

function Carrinho (props) {
    const { carrinho, total } = props
    console.log(carrinho)

    return(
        <Div>
            <h2>Carrinho:</h2>
                {carrinho.includes({}) ? (
                    carrinho.map((item) => (
                       
                        <Section key={item.id}>
                            <span >
                                {item.name}
                            </span>
                            <span >
                                R$ {item.value}
                            </span>
                            {}
                            <button >Remover</button>
                        </Section>            
                ))             
                )
                :
                ( 
                    <p>Carrinho vazio  </p>
                  
                )
                };
            <p>Valor total: R${total}</p>    
        </Div>
    )
}



export default Carrinho