import React from "react"
import { useState } from "react";
import { Div, Select, Label } from "./styledFiltros"

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

            <Label htmlFor="valor-minino">
                Buscar por valor mínimo
                <Select name="valor-minino" id="valor-minino" onChange={onChangeMinimo}>
                    <option value={valorMinimo}>Selecione valor mínimo</option>
                    <option value="20">20</option>
                    <option value="100">100</option>
                    <option value="1000">1000</option>
                    <option value="10000">10000</option>
                    <option value="40000">50000</option>
                </Select>
            </Label>
 
            <Label htmlFor="valor-maximo">
                Buscar por valor máximo
                <Select name="valor-maximo" id="valor-maximo" onChange={onChangeMaximo}>
                    <option value={valorMaximo}>Selecione valor máximo</option>
                    <option value="1200000">120001</option>
                    <option value="60000">60000</option>
                    <option value="10000">10000</option>
                    <option value="1000">1000</option>
                    <option value="100">100</option>
                </Select>
            </Label>
  
            <Label htmlFor="nome-produto">
                Buscar por nome
                <input
                    placeholder="Digite o nome do produto"
                    type="text"
                    value={guardaNome}
                    onChange={onChangeNome} />
            </Label>

            <Label htmlFor="ordenar">
                Ordenar itens alfabeticamente
                <Select name="ordenar" id="ordenar" onChange={(event) => setOrdenar(event.target.value)}>
                    <option value="">Selecione ordem</option>
                    <option value="crescente">crescente</option>
                    <option value="decrescente">decrescente</option>
                </Select>
            </Label>

            <button onClick={onClickClear}>
                Limpar Pesquisas
            </button>
            
        </Div>
    )
};

//Armazeno os valores em useSate aqui, e quando clicar o botão de enviar ele vai acionar uma função que vai filtrar pelo que foi pedido

export default Filtros