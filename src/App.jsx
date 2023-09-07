import './App.css'
import { EventHandler } from 'react'

function App() {
  function handleClick(){
    alert('button click')
  }

  const handleClick2=()=>{
    alert('btn2 click')
  }
  const addToFive=(num)=>{
    alert(num+2)
  }

  return (
    <>
      <h2>Explore React core concepts part2</h2>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click me2</button>
      <button onClick={()=>{alert('third click')}}>Click third</button>
      <button onClick={()=>addToFive(5)}>Click Four</button>
     
    </>
  )
}

export default App
