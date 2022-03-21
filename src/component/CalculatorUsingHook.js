import React, {useState} from 'react';

function CalculatorUsingHook() {
   
    const [num1, setNum1]=useState("");
    const [num2, setNum2]=useState("");
    const [resultValue, setResultValue] = useState("");
    
    const handleOnChangeNum1 = (e) => {
        setNum1(e.target.value);
    };
  
    const handleOnChangeNum2 = (e) => {
        setNum2(e.target.value);
    };
    const handleOnChangeResult = () => {
       
    };
    const handleAdd = () => {
        setResultValue(Number(num1)+Number(num2));
    };
    const handleSub = () => {
        setResultValue(Number(num1)-Number(num2));
    };
    const handleMultiply = () => {
        setResultValue(Number(num1)*Number(num2));
    };
    const handleDivide = () => {
        setResultValue(Number(num1)/Number(num2));
    };
        
    return (
        <div class="calcContents">
            <h1>Calculator Using Hooks</h1>
            <table>
                <tr>
                    <td><label>Enter First Number</label></td>
                    <td><input type="text"  id="num1" name="num1" value={num1} onChange={handleOnChangeNum1} placeholder="enter first number"/></td>
                </tr>
               
               <tr>
                   <td><label>Second Number</label></td>
                   <td><input type="text" id="num2" name="num2" value={num2} onChange={handleOnChangeNum2} placeholder="enter second number"/></td>
               </tr>
                
                <tr>
                    <td></td>
                    <td><input type="text" id="result" value={resultValue} onChange={handleOnChangeResult}/></td>
                </tr>

                <tr>
                    <td>
                        <button onClick={handleAdd}>ADD</button> 
                        <button onClick={handleSub}>SUB</button>
                    </td>
                    <td>
                        <button onClick={handleMultiply}>MULTIPLY</button>
                        <button onClick={handleDivide}>DIVIDE</button>
                    </td>
                </tr>

                
            </table>
        </div>
    );
}

export default CalculatorUsingHook;

