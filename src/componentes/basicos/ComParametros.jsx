import React from 'react'
export default function ComParametros(props) {

    const status = props.nota >= 7? 'Aprovado' : 'Reprovado'

    console.log(props)

    return (
        <div>
            <h2>{ props.titulo}</h2>

            <p>
            <strong> {props.aluno}  </strong> 
            tem nota 
            <strong> {props.nota}</strong>
             e esta  
            <strong> {status}</strong> ! 
            </p>
        </div>
    )
}