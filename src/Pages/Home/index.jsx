
import react, { useState } from 'react'

import './style.css'

import {Card} from '../../components/Card'

export function Home() {

  const [studentName, setStudentName] = useState('nome inicial que vai mudar')

  return (
    <div className="container">
      {/* uma variável não consegue refletir o estado na interface sozinha, por isso é preciso usar estado */}
      {/*aqui eu mostro o valor atualizado da variável que eu quero*/}
      <h1>Nome: { studentName}</h1>
      
      <input
        type="text" placeholder="Digite o nome"
        // aqui eu pego o valor do estado quando ele mudar
        onChange={e => setStudentName(e.target.value)}
      />
      
      <button type="button">Adicionar</button>
      
      <Card name="Rodrigo" time="10:55:24"/>
      <Card name="João" time="11:23:45"/>
      <Card />
    </div>
  )
}
