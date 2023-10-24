import { useState } from "react"

export default function Counter(){

    const [count,setCount] = useState(0)
    function add(){
        let newCount = count + 1;
        setCount(newCount)
    }

    function reduce(){
        let reduceCount = count - 1;
        setCount(reduceCount)
    }

    return (
        <div style={{border:"2px solid yellow",marginBottom:"10px"}}>
            <h3>Counter: {count}</h3>
            <button onClick={add}>Increase</button>
            <button onClick={reduce}>Reduce</button>
        </div>
    )
}