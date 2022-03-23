//Child component
import React from 'react';

function UserDetailsFormResult(props) {
    

    return (
        <div className='formresult'>
            <h1>Form Submitted</h1>
            <h2>First Name : {props.firstName}</h2>
            <h2>Last Name : {props.lastName}</h2>
            <h2>Age : {props.age}</h2>
            <h2>Address : {props.address}</h2>
            <h2>Hobbies : {props.hobbies.map((txt, i) => { return <span key={i}>{txt}, </span>})}</h2>
        </div>
    );
}

export default UserDetailsFormResult;