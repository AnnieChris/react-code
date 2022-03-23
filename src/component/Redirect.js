import React from 'react';
import {useNavigate} from 'react-router'

function Redirect(props) {
    let navigate = useNavigate();   //assigning function to a variable
    function handleClick(){
        navigate('/profile');
    }
    return (
        <div>
            <button onClick={handleClick}>go to profile</button>
        </div>
    );
}

export default Redirect;