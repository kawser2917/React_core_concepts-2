import './App.css'
import Counter from './counter';
import Team from './team';
import Users from './Users';

function App() {
  function one(){
    alert("First Button Clicked")
  }

  const add = (num)=> alert (3+num);

  return (
    <>
      <h3>React core concept 2</h3>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={one}>Click Me</button>
      <button onClick={()=>alert("Second Button Clicked")}>Click Me</button>
      <button onClick={()=>add(3)}>Click Me</button>

    </>
  )
}

export default App
