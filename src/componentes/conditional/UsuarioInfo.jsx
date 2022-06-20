import React from "react";
import If, {Else} from "./If";

export default (props) => {

    const usuario = props.usuario || {}

    return (

        <div>

            {/*

            <if test={usuario && usuario.nome}>
            Seja Bem vindo {props.usuario.nome} !
            <br></br>
            </if>
            <if test = {!usuario || !usuario.nome}>
            
                Seja bem vindo Amigao
            </if>
    */}

        <If test ={usuario && usuario.nome}>
            Seja bem vindo <strong>{usuario.nome}</strong>! <br></br>
        </If>
        </div> 
    )
}