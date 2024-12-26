import Values from 'values.js'
import './App.css'
import { useState } from 'react'
import FormColor from './components/FormColor'
import DisplayColors from './components/DisplayColors'

function App() {
  const [list,setList] = useState(new Values('#802FDE').all(10)) //en el use state definimos la clase nueva y el metodo que utilizaremos para obtener los colores

  console.log(list)

  return (
    <>
      <div className='App'>
        <FormColor list={list} setList={setList}/>
        <DisplayColors list={list}/>
      </div>
    </>
  )
}

export default App
