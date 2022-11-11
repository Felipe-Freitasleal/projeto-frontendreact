import React from "react"
import { useState } from "react";
import {Div} from "./styledFiltros"

function Filtros (props) {
    const {
        onChangeMinimo, 
        onChangeMaximo, 
        onChangeNome, 
        onClickClear, 
        varloMinimo,
        valorMaximo,
        guardaNome,
   
    } =props


 
    return(
        <Div>
            <h2>Filtros</h2>

            <br/>

                <label htmlFor="valor-minino"> Buscar por valor mínimo </label>
                <select name="valor-minino" id="valor-minino" onChange={onChangeMinimo}>
                    <option value="">Selecione valor mínimo</option>
                    <option value="20">20</option>
                    <option value="100">100</option>
                    <option value="10000">10000</option>
                    <option value="40000">40000</option>
                </select>

            <br/>
            <br/>

            <label htmlFor="valor-maximo"> Buscar por valor máximo </label>
                <select name="valor-maximo" id="valor-maximo" onChange={onChangeMaximo}>
                    <option value="">Selecione valor máximo</option>
                    <option value="1200001">1200001</option>
                    <option value="50001">50001</option>
                    <option value="20001">20001</option>
                    <option value="1000">1000</option>
                    <option value="100">100</option>
                </select>

            <br/>
            <br/>

                <label htmlFor="nome-produto">
                    Buscar por nome
                    <input 
                        placeholder="Digite o nome do produto" 
                        type="text" 
                        onChange={onChangeNome}/>
                </label>

            <button onClick={onClickClear}>
                Limpar Pesquisas
            </button>
        </Div>
    )
};

//Armazeno os valores em useSate aqui, e quando clicar o botão de enviar ele vai acionar uma função que vai filtrar pelo que foi pedido

export default Filtros