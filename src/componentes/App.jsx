
import './basicos/Layout/App.css';
import React from 'react'
import Card from './basicos/Layout/Card'
import Aleatorio from './basicos/Aleatorio'
import Primeiro from './basicos/Primeiro'
import ComParametros from './basicos/ComParametros'
import Fragmentos from './basicos/Fragmentos'



export default () => (

  <div className='App'>
    <h1>Fundamentos React </h1>

    <div className='Cards'>
      <Card titulo="#4Desafio Aleatorio">

        <Aleatorio min={1} max={60} />

      </Card>

      <Card titulo="#3Fragmento">

        <Fragmentos> </Fragmentos>

      </Card>

      <Card titulo="#2Com Parametro">

        <ComParametros
          titulo="Situacao do aluno"
          aluno="Breno"
          nota={9.3}
        />
      </Card>

      <Card titulo=" #1Primeiro Componente">
        <Primeiro></Primeiro>
      </Card>
    </div>



  </div>
);
