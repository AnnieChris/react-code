import React from "react";      //imported react from react package
class ToDoComponent extends React.Component            //File name and class name should be same
{
    constructor()
    {
        super();
        this.state = {
            id:1,
            value:"sample"
        }
    }
    render()        //render method will return JSX 
    {
        return(     /* jsx must have one parent element, here we have div as parent */
            <div>                          
            <h1>Class To Do Component demo</h1>
            <p>Creating first React class component</p> 
            
            <p>Hello {this.props.name}</p>  {/* here name is passed from parent through props*/}  
            {/* this.props is used for passing data between react components from parent, here name property is passed in the component */}

            <p>Id is {this.state.id} and Value is {this.state.value} </p>
            <button onClick={this.newfunc}>Click Button</button>
            </div>
                    
        )
    }
    /* newfunc(){ */        //calling by normal function 
    newfunc = () =>{        //using arrow function
        console.log("Here it is")
    }
}
//export default ToDoComponent;        //Whenever code is imported we should export by default
export {ToDoComponent};          //This is the named export and we can export in two ways either by default or by named export using{},
                                 //named can export a class,variable or function   