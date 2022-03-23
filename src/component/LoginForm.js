import React from 'react';

function LoginForm(props) {
    return (
        <div>
            <h1>Login Form</h1>

            <label>UserName</label>
            <input type="text"/>

            <label>email</label>
            <input type="text"/>

            <label>Password</label>
            <input type="password"/>
        </div>
    );
}

export default LoginForm;