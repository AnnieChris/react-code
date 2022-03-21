import { useState } from 'react';
import ReactDom from 'react';

function Demo() {
  const[car, setCar] = useState({
    brand : "Benz",
    model : "VisionGST",
    year : "2002",
    color : "blue"
  });
  const updateColor = () => {
    setCar(previousState => {
      return{...previousState,color : "silver"}
    });
  }
  return (
    <div>
      <h1>Demo Component</h1>
      <h2>My Car is {car.brand} , {car.model}</h2>
      <p>My car color is {car.color}</p>
      <button onClick={updateColor}>Change Color</button>  
    </div>
  );
}

export default Demo;






/* import React, {useState} from 'react';

function Demo() {
  const[car, setCar] = useState({
    brand : "Benz",
    model : "VisionGST",
    year : "2002",
    color : "blue"
  });
  return (
    <div>
      <h1>Demo Component</h1>
      <h2>My Car is {car.brand} , {car.model}</h2>
      <p>My car color is {car.color}</p>
      <button onClick={()=>setCar({...car,color : "black"})}>Change Color</button>  
      //Whenever we use setCar,we have to use spread by giving ...car(three dots with the variable name to change only the color property and also keep other datas)


    </div>
  );
}

export default Demo; */










/* import React, { useState } from 'react';

function Demo() 
{
    const[color, setColor] = useState("Pink"); //setColor is a function in react.useState saves the value and executes while runing
    return (
        <div>
            <h1>My Favourite color is {color}</h1>
            <button onClick={()=>setColor("Purple")}>Change Color</button>
        </div>
    );
}
export default Demo; */



/* import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count + 1);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={incrementCount}>Click Me</button>
    </div>
  )
}

export default Counter;
 */
