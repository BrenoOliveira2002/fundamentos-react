
import React from 'react'
import Primeiro from './basicos/Primeiro'
import ComParametros from './basicos/ComParametros'
import Fragmentos from './basicos/Fragmentos'



export default () => (

    <div id="app">
      <h1>Fundamentos React (Arrow _)</h1>
      <Fragmentos />
      <ComParametros
        titulo="Situacao do aluno"
        aluno="Breno"
        nota={9.3}
      />

      <Primeiro> </Primeiro>
    </div>
    );
