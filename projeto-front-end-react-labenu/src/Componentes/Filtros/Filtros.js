import React from "react"
import {Div} from "./styledFiltros"

function Filtros () {

    return(
        <Div>
                <h2>Filtros</h2>
                <br/>
                <label htmlFor="valor-minino">
                Buscar por valor mínimo
                <input placeholder="valor mínimo" type="text"/>
                </label>
                <br/>
                <br/>
                <label htmlFor="valor-maximo">
                Buscar por valor máximo
                <input placeholder="valor máximo" type="text"/>
                </label>
                <br/>
                <br/>
                <label htmlFor="nome-produto">
                Buscar por nome
                <input placeholder="nome do produto" type="text"/>
                </label>
        </Div>
    )
}


export default Filtros