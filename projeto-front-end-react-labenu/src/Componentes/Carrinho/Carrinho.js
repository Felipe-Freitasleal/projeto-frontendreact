import React from "react"
import { Div, Section } from "./styledCarrinho"
import imagem from "../../assets/carrinho-de-compras.png"

function Carrinho(props) {
    const
        {
            carrinho,
            total,
            onClickLimpaCarrinho,
            onClickRemoveItem,
            onClickAddMais1,
            mensagem,
            onClickComprar
        } = props

    const quantidadeItens = carrinho.reduce(
        (acc, produto) => produto.quantidade + acc,
        0
    )

    return (
        <Div>
            <h3><img src={imagem} alt="carrinho de compras" /></h3>
            {carrinho.length > 0 ? (
                <>
                    <p>Itens: {quantidadeItens}</p>
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
                    <p>
                        <button className="Limpar" onClick={onClickLimpaCarrinho}>Limpar carrinho</button>
                        <button className="Limpar" onClick={onClickComprar}>Comprar</button>
                    </p>
                </>
            )
                :
                (
                    <>
                        <p>{mensagem? "Compra efetivada com sucesso!" : "Carrinho Vazio"}  </p>
                        <p>Valor total: R${total}</p>
                    </>
                )
            }
        </Div>
    )
}



export default Carrinho