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
                <h1>Calculator Using Class Component</h1>

                <table>
                    <tr>
                        <td><label htmlFor ="fnum"> Enter First Number : </label></td>
                        <td><input type="text" name="firstnum" id="fnum" className="inputStyle" value={this.state.num1} onChange={ (eve) => { this.setState({num1:eve.target.value}) } }/></td>
                    </tr>
                    
                    <tr>
                        <td><label htmlFor ="snum"> Enter Second Number : </label></td>
                        <td><input type="text" name="secondnum" id="snum" className="inputStyle" value={this.state.num2} onChange={ (eve) => { this.setState({num2:eve.target.value }) } }/></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><button className='calcbtn' onClick={()=>{this.calculation()}} value="calculate">Calculate</button></td>
                    </tr>
                    
                    <tr>
                        <td></td>
                        <td><div id="resultDiv"></div></td>
                    </tr>
                    
                    
                </table>
                
            </div>
        )

    }
}

export {Calculator};