import React from 'react';

class Calculator extends React.Component       //React.component is the parent of calculator class which is defined by using extends keyword
{
    constructor(props)       //To create a state is to add constructor in our class component
    {
        super(props);    //to call the constructor of its parent class
        this.state = {      //this.state as object
            num1 : ' ',
            num2 : ' ',
        };
    }
    
    calculation()
    {
        var num1 = Number.parseInt(this.state.num1);
        var num2 = Number.parseInt(this.state.num2);
        var Addition = num1 + num2;
        var Subtraction = num1 - num2;
        var Multiply = num1 * num2;
        var Divide = num1 / num2;
        document.getElementById("resultDiv").innerHTML="Addition Result : " +Addition+"<br/> Subtraction Result : " +Subtraction+ "<br/> Multiplication Result : " +Multiply+" <br/>Division Result : " +Divide;
        
    }
   
    render() 
    {
        
        return(
            <div className='calcContents'>
                <h1>Calculator Using Class</h1>


                <label htmlFor ="fnum"> Enter First Number : </label>
                <input type="text" name="firstnum" id="fnum" className="inputStyle" value={this.state.num1} onChange={ (eve) => { this.setState({num1:eve.target.value}) } }/>
                <br></br>

                <label htmlFor ="snum"> Enter Second Number : </label>
                <input type="text" name="secondnum" id="snum" className="inputStyle" value={this.state.num2} onChange={ (eve) => { this.setState({num2:eve.target.value }) } }/>
                <br></br>

                

                <button className='calcbtn' onClick={()=>{this.calculation()}} value="calculate">Calculate</button>
                
                <div id="resultDiv">
                </div>
                
                
            </div>
        )

    }
}

export {Calculator};