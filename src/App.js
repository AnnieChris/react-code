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

import UserDetailsForm from './component/UserDetailsForm';

 */

import Home from './component/Home';
import Profile from './component/Profile';
import AboutUs from './component/AboutUs';
import ContactUs from './component/ContactUs';
import Error from './component/Error';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import Redirect from './component/Redirect';


import LoginForm from './component/LoginForm';

function App() {

  //const[user, changeUser] = useState('userA');
  //const numbers = [1,2,3,4,5];

  /* const[selectedMessage, setMessage] = useState(''); */
  const users = [ {name:'John', password:'john', email:'john@gmail.com'},
                  {name:'Mike', password:'mike', email:'mike@yahoo.com'}];

  
  return (
    <div className="App">
      {/* <h1>This is my First React App</h1>  */}

      <LoginForm users={users}/>
      
    <Router>
      <Link to="/home">Home </Link> | <Link to="/profile">Profile </Link> | <Link to="/aboutus">About Us </Link>|<Link to="/contactus">Contact Us </Link>
         

        <Routes>
          <Route path='/home' element={<HomePage />}></Route>
          <Route path='/profile' element={<ProfilePage />}></Route>
          <Route path='/aboutus' element={<AboutPage />}></Route>
          <Route path='/contactus' element={<ContactUsPage />}></Route>
        </Routes>
      </Router> 
    </div>

      
  );
  function HomePage() {
    return (
      <Home/>
    );
  }
  function ProfilePage() {
    return (
      <Profile/>
    );
  }
  function AboutPage() {
    return (
      <AboutUs/>
    );
  }
  function ContactUsPage() {
    return (
      <ContactUs/>
    );
  }
}

export default App;
