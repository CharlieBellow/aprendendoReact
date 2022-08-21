
import React, { useState, useEffect } from 'react' //hook: funções que permitem conectar o estado com o ciclo de vida dos componentes funcionais

import './style.css'

import {Card} from '../../components/Card'

export function Home() {

  const [studentName, setStudentName] = useState('nome inicial')
  const [students, setStudents] = useState([])

  const [user, setUser] = useState({name: '', avatar: ''})

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

  useEffect(() => {
    //corpo: ações ou aquilo que eu quero que execute.o useEffect é executado sempre que renderiza a aplicação
    //console.log('useEffect foi chamado')
    //comando JS pra fazer requisições HTTP 
    //consumindo API do github
    fetch('https://api.github.com/users/charliebellow').then(response => response.json()).then(data => {
      console.log(data)
      
      setUser({
        name: data.name,
        avatar: data.avatar_url
      })

      //obs. useEffect não pode ser async, tem que criar uma função async await

    })
  }, [
    students
    //aqui colocamos os estados dos quais o useEffect depende. se tiver vazio, o useEffect vai ser executado uma única vez. coloca os estados separados por vírgula
  ]) // estrutura do useEffect

  return (
    <div className="container">
      {/* uma variável não consegue refletir o estado na interface sozinha, por isso é preciso usar estado */}
      {/*aqui eu mostro o valor atualizado da variável que eu quero*/}
      <header>
        <h1>Nome: lista de presença</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar } alt="foto" />
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
