import React from 'react';
import Profile from './Profile';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';

function LoginSucessPage(props) {
    return (
        <div>
            <div className='loginsucess'>
                <h1>Hello {props.username}</h1>
                <h2>You have sucessfully logged into the page</h2>
            </div>
            
            {/* <nav>
                <ul>
                    <li> <Link to="/profile">Profile </Link></li>
                </ul>
            </nav>
            <Routes>
            <Route path='/profile' element={<ProfilePage />}></Route>
            </Routes> */}

            


        </div>
    );
   /*  function ProfilePage() {
      return (
        <Profile/>
      );
    } */
}

export default LoginSucessPage;