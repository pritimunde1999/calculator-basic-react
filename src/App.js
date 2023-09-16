import React,{useState} from "react";
import Button from "./Components/Button";
import "./style.css"



const App = () =>{
    const[num1,setNum1] = useState("");
    const[num2,setNum2] = useState("");
    const[ans,setAns] = useState("");
    const[success,setSuccess] = useState("");
    const[error,setError] = useState("");
    

    
    return(
        <div className="calculator">
            <h1>React Calculator</h1>

            <div className="inputs">
            <input onChange={e=>{setNum1(e.target.value)}} type="number" step="any" placeholder="Num 1" />
            <input onChange={e=>{setNum2(e.target.value)}} type="number" step="any" placeholder="Num 2" />
            </div>
            
            <div className="buttons">
            <Button sign="+" num1={num1} num2={num2} setAns={setAns} setSuccess={setSuccess} setError={setError}/>
            <Button sign="-" num1={num1} num2={num2} setAns={setAns} setSuccess={setSuccess} setError={setError}/>
            <Button sign="*" num1={num1} num2={num2} setAns={setAns} setSuccess={setSuccess} setError={setError}/>
            <Button sign="/" num1={num1} num2={num2} setAns={setAns} setSuccess={setSuccess} setError={setError}/>
            </div>


            {
                success && ans && (
                    <div>
                        <h2 style={{color:"green"}}>{success}</h2>
                        <h3>Result : {ans}</h3>
                    </div>
                )
            } 

            {
                error && (
                  <div>
                     <h2 style={{color:"red"}}>Error</h2>
                     <h3>{error}</h3>
                  </div>

                )
            }
        </div>
    )
}

export default App;