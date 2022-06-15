import React from 'react'
import FamiliaMembro from './Membro'

export default props => {

    return(
        <div>
            <FamiliaMembro nome ="Pedro" sobrenome={props.sobrenome}></FamiliaMembro>
            <FamiliaMembro nome ="Ana" {...props} ></FamiliaMembro>
            <FamiliaMembro nome ="Gustavo" sobrenome ="Messi"></FamiliaMembro> 
            
        </div>
    )
}