import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import Primeiro from './componentes/basicos/Primeiro'
import ComParametros from './componentes/basicos/ComParametros'
import Fragmentos from './componentes/basicos/Fragmentos'


ReactDOM.render(

    <div> 
      <Primeiro> </Primeiro> 
      <ComParametros
       titulo="Situacao do aluno"
       aluno="Breno"
       nota="9.3">
        
       </ComParametros>

       <Fragmentos></Fragmentos>
    </div>,
     document.getElementById('root')
)