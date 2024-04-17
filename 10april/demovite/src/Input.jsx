import { useRef, useState } from "react"


function Input(){
    const[val, setVal] = useState(true);
    const name = useRef(null);
   
    return (
        <>
        <p>{name.current}</p>
        <input placeholder="Enter your name" ref={name} onInput={(e) => name.current = e.target.value}/>
        <button onClick={() => setVal(!val)}>show</button>
        </>
    )
}

export default Input;