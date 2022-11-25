import Carrinho from "./Componentes/Carrinho/Carrinho"
import Filtros from "./Componentes/Filtros/Filtros"
import Produto from "./Componentes/Produto/Produto"
import ListaProdutos from "./Componentes/ListaProdutos/ListaProdutos.json"
import { useEffect, useState } from "react";
import {GlobalStyle, Div, H1, Section, Aside} from "./styledApp"


function App() {

  const [ valorMinimo, setValorminimo ] = useState(0);
  const [ valorMaximo, setValorMaximo ] = useState(100000000000);
  const [ guardaNome, setGuardaNome ] = useState("");
  const [ carrinho, setCarrinho ] = useState([]);
  const [ ordenar , setOrdenar ] = useState("")

  const onChangeMinimo = (e) => {setValorminimo(e.target.value)};
  const onChangeMaximo = (e) => {setValorMaximo(e.target.value)};
  const onChangeNome = (e) => {setGuardaNome(e.target.value)};
  const onClickClear = () => {
    setValorminimo(0)
    setValorMaximo(100000000000)
    setGuardaNome("")

    localStorage.setItem("valor mínimo", 0)
    localStorage.setItem("valor máximo", 100000000000)
    localStorage.setItem("nome", "")
  };

  useEffect(() => {
    if(carrinho.length > 0 || valorMinimo > 19 || valorMaximo < 100000000000 || guardaNome){
      localStorage.setItem("valor mínimo", valorMinimo)
      localStorage.setItem("valor máximo", valorMaximo)
      localStorage.setItem("nome", guardaNome)
  
      const transformaCarrinhoString = JSON.stringify(carrinho)
      localStorage.setItem("carrinho", transformaCarrinhoString)
    }
  }, [valorMinimo, valorMaximo, guardaNome, carrinho])

  useEffect(() => {
    const trazerValorMinimo = localStorage.getItem("valor mínimo")
    setValorminimo(Number(trazerValorMinimo))

    const trazerValorMaximo = localStorage.getItem("valor máximo")
    setValorMaximo(Number(trazerValorMaximo))

    const trazerNome = localStorage.getItem("nome")
    setGuardaNome(trazerNome)

    const trazerCarrinho = localStorage.getItem("carrinho")
    if(trazerCarrinho){
      const transformaCarrinhoObjeto = JSON.parse(trazerCarrinho)
      setCarrinho(transformaCarrinhoObjeto)
    }
  }, [])

  const onClickLimpaCarrinho = () => {
    localStorage.setItem("carrinho", "")
    setCarrinho([])};

  const onClickRemoveItem = (produtoRemover) => {
    const novoCarrinho = [... carrinho]

    if(produtoRemover.quantidade > 0 ){
      produtoRemover.quantidade--
    } 
    if(produtoRemover.quantidade === 0 ) {
      //se entrar aqui, é pq a quantidade é menor que 1, e ele tem de deixar de existir. 
      const index = novoCarrinho.indexOf(produtoRemover) // achar o índice do ítem a ser removido
      console.log(index)
      novoCarrinho.splice(index, 1) //remove o ítem em que o índice foi achado com o método indexOf()
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
            valorMinimo={valorMinimo}
            valorMaximo={valorMaximo}
            guardaNome={guardaNome}
            setOrdenar={setOrdenar}
          />
        </Aside>
        <Section>
          {ListaProdutos
          .filter((produto) => {
            return produto.value > valorMinimo 
          }  
          )
          .filter((produto) => { 
            return produto.value < valorMaximo
          }
          )
          .filter((produto) => {
            return produto.name.toLocaleLowerCase().includes(guardaNome.toLocaleLowerCase())
          })
          .sort((atual, seguinte) => {
            if(ordenar === "crescente"){
              return atual.name < seguinte.name? -1 :1
            } else if( ordenar === "decrescente") {
              return atual.name > seguinte.name ? -1 : 1
            }
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
