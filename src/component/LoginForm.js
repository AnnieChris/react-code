import React, {useState} from 'react';

import LoginSucessPage from './LoginSucessPage';
import InvalidLoginPage from './InvalidLoginPage';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';


function LoginForm(props) {

    const users = props.users;
    const[UserName, setUserName] = useState('');
    const[Password, setPassword] = useState('');
    const[Email, setEmail] = useState(''); 
    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }  

    return (

        <Router>
            <div className='loginform'>
                <div id="loginFormDiv">
                    <h1> Login Form</h1>
                    <form>

                        <label>Username</label>
                        <input type="text" onChange={handleUserNameChange} placeholder="enter username" />

                        <label>Password</label>
                        <input type="password" onChange={handlePasswordChange} placeholder="enter password"/>
                    
                        <label>email id</label>
                        <input type="email" onChange={handleEmailChange} placeholder="enter email id"/>
                        <Link to="/loginSubmit"><button>Sign In</button></Link>

                    </form> 
                </div>


                <Routes>
                    <Route path='/loginSubmit' element={<LoginSubmitAction/>}></Route>
                </Routes>
            
            </div>
        </Router>
    );


    function LoginSubmitAction() {

        let tUserFound = false;
        for(var i=0;i<users.length;i++){
            if(users[i].name==UserName && users[i].password==Password && users[i].email==Email){
                tUserFound = true;
                break;
            }
        }
        if(tUserFound){
            document.getElementById("loginFormDiv").style.display="none";
            return (
                <LoginSucessPage username={UserName}/>
            );
        }
        else{
            return (
                <InvalidLoginPage/>
            );
        }
      }
}



export default LoginForm;