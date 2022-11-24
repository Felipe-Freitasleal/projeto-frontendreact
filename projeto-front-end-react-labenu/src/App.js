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

  const onClickLimpaCarrinho = () => {setCarrinho([])};

  const onClickRemoveItem = (produtoRemover) => {
    const novoCarrinho = [... carrinho]


    if(produtoRemover.quantidade > 0 ){
      produtoRemover.quantidade--
    } 
    if(produtoRemover.quantidade === 0 ) {
      //se entrar aqui, é pq a quantidade é 1, e ele tem de deixar de existir. 
      const index = novoCarrinho.indexOf(produtoRemover)
      console.log(index)
      novoCarrinho.splice(index, 1)
    }

    return setCarrinho(novoCarrinho)
  };

  const onClickAddMais1 = (produtoMais1) => {
    const novoCarrinho = [... carrinho]
    produtoMais1.quantidade = produtoMais1.quantidade +1
    setCarrinho(novoCarrinho)
  }

  const onClickAdd = (produtoClicado) => {
    //Copia o array de produtos que vão para o carrinho. Em seu estado original ele está vazio, será preenchido por cada produto novo que for clicado para ser adicionado.
    const nocoCarrinho = [... carrinho]

    //Compara o id do produto clicado com cada produto da copiada da lista de produtos. Se não achar nenhum id igual adiciona o produto. Se achar, só adiciona + 1 a quantidade.
    const compararItens = nocoCarrinho.find((produto) => produto.id === produtoClicado.id)
    console.log(compararItens)
    //O .find() retorn o item achado quando comparado e achar um igual. Nesse caso aqui, se o id de algum item for igual, ele retornario o item, se não, ele retorna "undefined" que tem valor de "false".

    //Se o valor retornado pelo .find feito no compararItens for false, ele adiciona a propriedade "quantidade" com valor 1 e adiciona ao array que vai ser exibino no carrinho. Se for "true", então esse item já existe no carrinho e só é adicionado + 1 em quantidade. 
    if(!compararItens){
      const produtoClicadoQuantidade = {... produtoClicado, quantidade: 1}
      nocoCarrinho.push(produtoClicadoQuantidade)
    } else {
      // const acherIndexObjeto = nocoCarrinho.findIndex((produto) => produto.id === produtoClicado.id)
      // const alterarListaCarrinho = nocoCarrinho.splice(acherIndexObjeto, 1, produtoClicado.quantidade = produtoClicado.quantidade + 1)
      compararItens.quantidade = compararItens.quantidade +1
    }

    setCarrinho(nocoCarrinho)
  };

  const total = carrinho.reduce(
    (acc, produto) => produto.value * produto.quantidade + acc,
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
            onClickLimpaCarrinho={onClickLimpaCarrinho}
            onClickRemoveItem={onClickRemoveItem}
            onClickAddMais1={onClickAddMais1}
          />
        </Aside>
      </Div>
    </>
  );
}

export default App;
