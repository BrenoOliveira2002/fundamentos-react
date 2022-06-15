
import './basicos/Layout/App.css';
import React from 'react'
import Card from './basicos/Layout/Card'
import Familia from './basicos/Familia';
import FamiliaMembro from './basicos/Membro';
import Aleatorio from './basicos/Aleatorio'
import Primeiro from './basicos/Primeiro'
import ComParametros from './basicos/ComParametros'
import Fragmentos from './basicos/Fragmentos'



export default () => (

  <div className='App'>
    <h1>Fundamentos React </h1>

    <Card titulo="#5 Componente com Filhos" color="#FA6900">

      <Familia sobrenome="Messi">

        <FamiliaMembro nome="Pedro"></FamiliaMembro>
        <FamiliaMembro nome="Ana"></FamiliaMembro>
        <FamiliaMembro nome="Gustavo"></FamiliaMembro>


      </Familia>

    </Card>

    <div className='Cards'>
      <Card titulo="#4Desafio Aleatorio" color="#FA6900">

        <Aleatorio min={1} max={60} />

      </Card>

      <Card titulo="#3Fragmento" color="#E94E6F">

        <Fragmentos> </Fragmentos>

      </Card>

      <Card titulo="#2Com Parametro" color="#E8B71A">

        <ComParametros
          titulo="Situacao do aluno"
          aluno="Breno"
          nota={9.3}
        />
      </Card>

      <Card titulo=" #1Primeiro Componente" color="#588C73">
        <Primeiro></Primeiro>
      </Card>
    </div>



  </div>
);
