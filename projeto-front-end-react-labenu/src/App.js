import Carrinho from "./Componentes/Carrinho/Carrinho"
import Filtros from "./Componentes/Filtros/Filtros"
import Produto from "./Componentes/Produto/Produto"
import ListaProdutos from "./Componentes/ListaProdutos/ListaProdutos.json"
import { useState } from "react";
import {GlobalStyle, Div, H1, Section, Aside} from "./styledApp"


function App() {

  const [ varloMinimo, setValorminimo ] = useState(0);
  const [ valorMaximo, setValorMaximo ] = useState(100000000000);
  const [ guardaNome, setGuardaNome ] = useState("");
  const [ carrinho, setCarrinho] = useState([]);

  const onChangeMinimo = (e) => {setValorminimo(e.target.value)};
  const onChangeMaximo = (e) => {setValorMaximo(e.target.value)};
  const onChangeNome = (e) => {setGuardaNome(e.target.value)};
  const onClickClear = () => {
    setValorminimo(0)
    setValorMaximo(100000000000)
    setGuardaNome("")
  };

  const onClickAdd = (produtoClicado) => {
    //Copia o array de produtos que vão para o carrinho. Em seu estado original ele está vazio, será preenchido por cada produto novo que for clicado para ser adicionado.
    const novoItem = [... carrinho]

    //Compara o id ro produto clicado com cada produto da lista copiada de produtos. Se não achar nenhum id igual adiciona o produto. Se achar, só adiciona + 1 a quantidade.
    const compararItens = novoItem.find((produto) => produto.id === produtoClicado.id)
    console.log(compararItens)
    //O .find() retorn true se algum item do array comparado for igual. Nesse caso aqui, se o id de algum item for igual, ele retornario "true", se não, ele retorna "undefined" que tem valor de "false".

    //Se o valor retornado pelo .find feito no compararItens for false, ele adiciona a propriedade "quantidade" com valor 1 e adiciona ao array que vai ser exibino no carrinho. Se for "true", então esse item já existe no carrinho e só é adicionado + 1 em quantidade. 
    if(!compararItens){
      const produtoClicadoQuantidade = {... produtoClicado, quantidade: 1}
      novoItem.push(produtoClicadoQuantidade)
    } else {
      // const acherIndexObjeto = novoItem.findIndex((produto) => produto.id === produtoClicado.id)
      // const alterarListaCarrinho = novoItem.splice(acherIndexObjeto, 1, produtoClicado.quantidade = produtoClicado.quantidade + 1)
      compararItens.quantidade++
    }

    setCarrinho(novoItem)
  };

  const total = carrinho.reduce(
    (acc, product) => product.value * product.quantidade + acc,
    0
  )

  return (
    <>
      <GlobalStyle/>
      <H1>Loja Espacial</H1>
      <Div>
        <Aside>
          <Filtros
            onChangeMinimo={onChangeMinimo}
            onChangeMaximo={onChangeMaximo}
            onChangeNome={onChangeNome}
            onClickClear={onClickClear}
            varloMinimo={varloMinimo}
            valorMaximo={valorMaximo}
            guardaNome={guardaNome}
          />
        </Aside>
        <Section>
          {ListaProdutos
          .filter((produto) => {
            return produto.value > varloMinimo 
          }  
          )
          .filter((produto) => { 
            return produto.value < valorMaximo
          }
          )
          .filter((produto) => {
            return produto.name.toLocaleLowerCase().includes(guardaNome.toLocaleLowerCase())
          })
          .map((produto)=>{
            return(
              <Produto
                produto={produto}
                key={produto.id}
                onClickAdd={onClickAdd}
              />
            )
          })

          }
        </Section>
        <Aside>
          <Carrinho
            carrinho={carrinho}
            total={total}
          />
        </Aside>
      </Div>
    </>
  );
}

export default App;
