import React, {useRef, useState } from 'react'

const FormValidation = () => {
    const name = useRef(null);
    const email = useRef(null);
    const[error,setError] = useState("");
    const changeHandler = (e) => {
        if(e.target.name == "userName"){
            if(name.current.value.length < 5){
                setError("length must be atleast 5 chaacters")
            }
            else{
            setError("");
            }
        }
        else {
            if(!email.current.value.includes('@')){
                setError(" must have @")
            }
            else{
                setError("");
            }    
        }

    }
  return (
    <>
        <form>
        <input  placeholder='Enter your name'  name="userName" ref={name} onInput={(e) => changeHandler(e)} />
        <input  placeholder='Enter your email'  name="emailId" ref={email} onInput={(e) => changeHandler(e)}/>
        <button>Submit</button>
        </form>
        <p>{error}</p>
    </>
  )
}

export default FormValidation;