import './App.css'

function App() {
  function one(){
    alert("First Button Clicked")
  }

  const add = (num)=> alert (3+num);

  return (
    <>
      <h3>React core concept 2</h3>
      <button onClick={one}>Click Me</button>
      <button onClick={()=>alert("Second Button Clicked")}>Click Me</button>
      <button onClick={()=>add(3)}>Click Me</button>

    </>
  )
}

export default App
