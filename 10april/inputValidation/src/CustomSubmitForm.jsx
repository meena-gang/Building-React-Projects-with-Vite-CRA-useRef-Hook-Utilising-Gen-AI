import React, { useState, useRef, useEffect } from "react";

function CustomSubmitForm() {
  const formRef = useRef(null);
  let [error, setError] = useState("");
  


  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(formRef.current[0].value.length >= 5 && formRef.current[1].value.length >=8){
      setError('');
      const formData = new FormData(formRef.current);
      fetch("your-server-endpoint", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error("Error:", error));
    } else{
       setError("Please enter a valid password and username!");
    }; 
    
  }
    
  

  return (
    <>
        <h2>Custom Submit Form:</h2>
        <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter name" name="field1" /><br />
            <input type="text" placeholder="Enter password" name="field2" /><br />
            {/* Add more input fields as needed */}
            <button type="submit">Submit</button>
        </form>
        {error}
    </>
  );
}


export default CustomSubmitForm