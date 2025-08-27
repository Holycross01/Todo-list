import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Datacomponent from './datacomponent'

function App() {
  const [activeButton, setActiveButton] = useState(true)
  const [input, setInput] = useState("")
  const [todoList, setTodoList] = useState([])
 
  return (
   <div className='min-h-screen bg-cyan-400 flex flex-col items-center'>
  <Datacomponent activeButton={activeButton} setActiveButton={setActiveButton} input={input} setInput={setInput} todoList={todoList} setTodoList={setTodoList}/>
   </div>
  )
}

export default App
