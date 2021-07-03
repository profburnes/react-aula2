import React from 'react'
import produtos from '../dados/produtos.js'


export default props => {

    function formatarValor(valor) {
        return valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    }

    function getProdutos() {
        return produtos.map(prod => {
            return <div className="card">
                <h1>{prod.titulo}</h1>
                <img src={prod.img}/>
                <p>{formatarValor(prod.valor)}</p>
            </div>
        })
    }

    return (
        <>
            <h1>Produtos:</h1>
            <div className="grid">
                {getProdutos()}
            </div>
        </>
    )
}

