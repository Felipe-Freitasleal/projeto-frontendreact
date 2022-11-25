import React from "react"
import { useState } from "react";
import { Div } from "./styledFiltros"

function Filtros(props) {
    const {

        onChangeMinimo,
        onChangeMaximo,
        onChangeNome,
        onClickClear,
        valorMinimo,
        valorMaximo,
        guardaNome,
        setOrdenar
    } = props



    return (
        <Div>
            <h2>Filtros</h2>
            <br />
            <label htmlFor="valor-minino"> Buscar por valor mínimo </label>
            <select name="valor-minino" id="valor-minino" onChange={onChangeMinimo}>
                <option value={valorMinimo}>Selecione valor mínimo</option>
                <option value="20">20</option>
                <option value="100">100</option>
                <option value="10000">10000</option>
                <option value="40000">40000</option>
            </select>
            <br />
            <br />
            <label htmlFor="valor-maximo"> Buscar por valor máximo </label>
            <select name="valor-maximo" id="valor-maximo" onChange={onChangeMaximo}>
                <option value={valorMaximo}>Selecione valor máximo</option>
                <option value="1200001">1200001</option>
                <option value="50001">50001</option>
                <option value="20001">20001</option>
                <option value="1000">1000</option>
                <option value="100">100</option>
            </select>
            <br />
            <br />
            <label htmlFor="nome-produto">
                Buscar por nome
                <input
                    placeholder="Digite o nome do produto"
                    type="text"
                    value={guardaNome}
                    onChange={onChangeNome} />
            </label>
            <br />
            <br />
            <button onClick={onClickClear}>
                Limpar Pesquisas
            </button>
            <br />
            <br />
            <hr />
            <label htmlFor="ordenar">Ordenar itens alfabeticamente</label>
            <select name="ordenar" id="ordenar" onChange={(event) => setOrdenar(event.target.value)}>
                <option value="">Selecione ordem</option>
                <option value="crescente">crescente</option>
                <option value="decrescente">decrescente</option>
            </select>
        </Div>
    )
};

//Armazeno os valores em useSate aqui, e quando clicar o botão de enviar ele vai acionar uma função que vai filtrar pelo que foi pedido

export default Filtros