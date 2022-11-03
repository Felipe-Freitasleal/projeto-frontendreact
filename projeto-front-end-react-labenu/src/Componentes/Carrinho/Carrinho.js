import React from "react"
import {Div, Section} from "./styledCarrinho"

function Carrinho () {

    return(
        <Div>
                <h2>Carrinho:</h2>

                <Section>
                    <span>
                        quantidade produto
                    </span>
                    <span>
                        nome do produto
                    </span>
                    <button>Remover</button>
                </Section>
                <p>Valor total:</p>
        </Div>
    )
}


export default Carrinho