import logo from './logo.svg';
import { useState } from 'react';

import './App.css';
/* import Demo  from './component/Demo';
//import StyledDemo from './component/StyledDemo'; 
import Component1 from './component/Component1';
import FirstComponent from './component/FirstComponent';
import ParentToChild from './component/ParentToChild';
import Child2 from './component/Child2';
import Child1 from './component/Child1';
import TwoWayBind from './component/TwoWayBind';

import DynamicContents from './component/DynamicContent';
import NumberList from './component/NumberList';


import Home from './component/Home';
import About from './component/About';
import Profile from './component/Profile';
import Error from './component/Error';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import Redirect from './component/Redirect';

 */

import UserDetailsForm from './component/UserDetailsForm';

function App() {

  //const[user, changeUser] = useState('userA');
  //const numbers = [1,2,3,4,5];

  /* const[selectedMessage, setMessage] = useState(''); */
  return (
    <div className="App">
      {/* <h1>This is my First React App</h1> */}

      <UserDetailsForm />
      
    </div>
  );
}

export default App;
