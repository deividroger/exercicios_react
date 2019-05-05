import React from 'react'
import ReactDOM from 'react-dom'

import PrimeiroComponente from './componentes/primeiroComponente'
import {CompA, CompB } from './componentes/doisComponentes'

import MultiElementos from './componentes/MultiELementos'
import FamiliaSilva from './componentes/FamiliaSilva'
import Familia from './componentes/Familia'
import Membro from './componentes/Membro'
import ComponenteComFuncao from './componentes/ComponenteComFuncao'
import Pai from './componentes/Pai'
import ComponenteClasse from './componentes/ComponenteClasse'
import Contador from './componentes/Contador'
import Hook from './componentes/Hook'
const elemento = document.getElementById('root')

ReactDOM.render(
    <div>
        <Hook />
        <Contador numeroInicial={100} />
        <ComponenteClasse valor='Sou um componente de classe' />
        <Pai />
        <ComponenteComFuncao/>

        <PrimeiroComponente valor='Bom dia!'/>
        <CompA valor='Eu sou o primeiro' />
        <CompB valor='Eu sou o segundo' />
        <MultiElementos />
        <FamiliaSilva/>
        <Familia sobrenome='Santos' >
            <Membro nome='Deivid'  />
            <Membro nome='Leonardo' sobreNome='Santos' />
            <Membro nome='Neusa' sobreNome='Santos' /> 
        </Familia>
    </div>
  
,elemento)