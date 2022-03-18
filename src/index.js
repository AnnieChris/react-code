import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './component/style.css';
import reportWebVitals from './reportWebVitals';
import {Calculator} from './component/Calculator';

/* import App from './App';
import Demo from './component/Demo';
import {ToDoComponent} from './component/ToDoComponent';  //giving{}is for named component to avoid changing the name of the component
import FuntionComponent from './component/FuntionComponent'; */


ReactDOM.render(
  <React.StrictMode>
     <Calculator/> 

    {/* <App/> 
    <ToDoComponent/>
    <Demo/> */}  

    {/*<ToDoComponent name="John"/>       passing name or any property to the component using props. Here we can pass the data from the parent (index.js)to the component in a uni directional*/}
    {/*<FuntionComponent name="Chris" age={36}/>  numeric values are puted inside {}for typescript */}
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
