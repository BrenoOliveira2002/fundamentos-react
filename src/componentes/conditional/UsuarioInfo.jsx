import React from "react";
import _if from "./if";

export default props => {

    const usuario = props.usuario || {}

    return (

        <div>

            <if test={usuario && usuario.nome}>
            Seja Bem vindo {props.usuario.nome} !
            <br></br>
            </if>
            <if test = {!usuario || !usuario.nome}>

                Seja bem vindo Amigao
            </if>
        </div> 
    )
}