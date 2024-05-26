import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputFild from './components/InputFild'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <InputFild/>
    </>
  )
}

export default App
