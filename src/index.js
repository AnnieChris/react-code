import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import './index.css';
import './component/style.css';

//import {Calculator} from './component/Calculator';
import {ToDoComponent} from './component/ToDoComponent';
import Demo from './component/Demo';
import CalculatorUsingHook from './component/CalculatorUsingHook';
/* import App from './App';
  //giving{}is for named component to avoid changing the name of the component
import FuntionComponent from './component/FuntionComponent'; */


ReactDOM.render(
  <React.StrictMode>
      <CalculatorUsingHook/>
        
      {/* <Demo/>
      <ToDoComponent/>
      <App/> 
      <Calculator/> 
      */}  

    {/*<ToDoComponent name="John"/>       passing name or any property to the component using props. Here we can pass the data from the parent (index.js)to the component in a uni directional*/}
    {/*<FuntionComponent name="Chris" age={36}/>  numeric values are puted inside {}for typescript */}
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
