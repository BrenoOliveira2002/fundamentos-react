import React from 'react'
import './TabelaProdutos.css'
import produtos from '../../data/produtos'

export default (props) => {

    function getLinhas(){

            return produtos.map((produto, id) => {
                return (
                    <tr key = {produto.id} className={id % 2 == 0 ? 'Par' : 'Impar'}>
                        <td>{produto.id}</td>
                        <td>{produto.nome}</td>
                        <td>R$ {produto.preco}</td>
                    </tr>
                )
            })
    }

    return (

        <div className='TabelaProdutos'>   

            <table>

                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>preco</th>
                    </tr>
                </thead>

                <tbody>

                    {getLinhas()}

                </tbody>
            </table>
        </div>
    )
}