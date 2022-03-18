import React, {Component, useState} from 'react';
import Component2 from './Component2.js';

export const UserContext = React.createContext();
function Component1(props) {
    const [user, setUser] = useState("David");
    return (
        <UserContext>
        <div>
            <h1>{`Hello ${user}`}</h1>
        </div>
        </UserContext>
    );
}

export default Component1;