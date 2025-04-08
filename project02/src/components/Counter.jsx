import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);

    const btnHandleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    const counterStyle =  {
        border: '2px solid green'
    }
    return(
        <div style={counterStyle}>
            <h3>Count: {count}</h3>
            <button onClick={btnHandleAdd}>Add</button>
        </div>
    )
}