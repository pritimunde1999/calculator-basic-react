import React from "react";

const Button = ({sign,num1,num2,setAns,setSuccess,setError}) =>{

    function validation()
    {
        if(num1!=="" && num2!=="")
        {
            setSuccess("Success");
            setError("");
            operation(Number(num1),Number(num2),sign)
        }
        else
        {   
            if(num1==="")
            {
              setError("Num 1 cannot be empty");
              setSuccess("");
              return;
            }
            else if(num2==="")
            {
              setError("Num 2 cannot be empty");
              setSuccess("");
              return;
            }
           
        }
    }

    function operation(num1,num2,sign)
    {
        if(sign==="+") 
        {
            setAns(num1+num2);
            return;
        }
        if(sign==="-") 
        {
            setAns(num1-num2);
            return;
        }
        if(sign==="*") 
        {
            setAns(num1*num2);
            return;
        }
        if(sign==="/") 
        {
            setAns(num1/num2);
            return;
        }
    }


    return(
        <button className="sinButton" onClick={validation}>{sign}</button>
    )
}
export default Button;