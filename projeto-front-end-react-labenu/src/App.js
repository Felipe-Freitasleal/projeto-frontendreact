import styled, { createGlobalStyle } from "styled-components";
import Carrinho from "./Componentes/Carrinho/Carrinho"
import Filtros from "./Componentes/Filtros/Filtros"
import Produto from "./Componentes/Produto/Produto"
import ListaProdutos from "./Componentes/ListaProdutos/ListaProdutos.json"

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: auto;
  height: auto;
  padding: 10px;
`
const H1 = styled.h1`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const Aside = styled.aside`
  
`

function App() {


  return (
    <>
      <GlobalStyle/>
      <H1>Loja Espacial</H1>
      <Div>
        <Aside>
          <Filtros/>
        </Aside>
        <Section>
          {ListaProdutos.map((produto)=>{
            return(
              <Produto
                nome={produto.name}
                key={produto.id}
                foto={produto.imageUrl}
                preco={produto.value}
              />
            )
          })

          }
        </Section>
        <Aside>
          <Carrinho/>
        </Aside>
      </Div>
    </>
  );
}

export default App;
