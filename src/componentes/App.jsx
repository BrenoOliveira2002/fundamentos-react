
import React from 'react'

import Aleatorio from './basicos/Aleatorio'
import Primeiro from './basicos/Primeiro'
import ComParametros from './basicos/ComParametros'
import Fragmentos from './basicos/Fragmentos'



export default () => (  

    <div id="app">
      <h1>Fundamentos React </h1>
      <Aleatorio min={1} max={60} />
      <Fragmentos />
      <ComParametros
        titulo="Situacao do aluno"
        aluno="Breno"
        nota={9.3}
      />

      <Primeiro> </Primeiro>
    </div>
    );
