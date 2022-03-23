import React from 'react';

function Child1({setMessage}) {

    const onButtonClick = (changeValue) =>{
        setMessage(changeValue)
    }
    return (
        <div>
            <button onClick={()=>onButtonClick("Message from Child1")}>Child-1</button>
        </div>
    );
}

export default Child1;