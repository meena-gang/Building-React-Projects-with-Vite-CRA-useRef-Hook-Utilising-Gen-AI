import { useRef, useState } from "react"

function Comp(){
    const[flag, setFlag] = useState(true);
    const division = useRef(null);
    
    return(
        <div ref={division} style={{backgroundColor:"black", border:"1px solid black",height:"100px"}} onClick={() => {
            division.current.style.backgroundColor = "blue";
            setFlag(!flag);
            console.log(division.current);
        }
        }>
        </div>
    )
}

export default Comp;