import React from 'react';

function FuntionComponent(props) {          //function is passing with the props parameter
    console.log("property", props);
    return (
        <div>
            <h1>From Funtional Component</h1>
            <p>Hi {props.name}, age : {props.age}</p>
        </div>
    );
}

export default FuntionComponent;