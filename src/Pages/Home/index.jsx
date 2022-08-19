
import React, { useState } from 'react' //hook: funções que permitem conectar o estado com o ciclo de vida dos componentes funcionais

import './style.css'

import {Card} from '../../components/Card'

export function Home() {

  const [studentName, setStudentName] = useState('nome inicial')
  const [students, setStudents] = useState([])

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    }

    setStudents(prevState => [...prevState, newStudent])
  }


  return (
    <div className="container">
      {/* uma variável não consegue refletir o estado na interface sozinha, por isso é preciso usar estado */}
      {/*aqui eu mostro o valor atualizado da variável que eu quero*/}
      <header>
        <h1>Nome: lista de presença</h1>
        <div>
          <strong>Charlie</strong>
          <img src="https://github.com/charliebellow.png" alt="foto" />
        </div>
      </header>
      
      <input
        type="text" placeholder="Digite o nome"
        // aqui eu pego o valor do estado quando ele mudar
        onChange={e => setStudentName(e.target.value)}
      />
      
      <button type="button" onClick={handleAddStudent}>Adicionar</button>
      {/* o map serve nesse caso para adicionar vários componentes */}
      {
        //para cada estudante renderiza um cartão 
        students.map(student => (
          <Card
            key={student.time}
            name={student.name}
            time={student.time}
          />))
      
      }
    </div>
  )
}
