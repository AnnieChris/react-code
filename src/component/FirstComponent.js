import React from 'react';
import useCustomHook from './useCustomHook';
function FirstComponent(props) {

    const clickedButton = useCustomHook(0, "FirstComponent")
    return (
        <div>
            <h1>This is the first component</h1>
            <button onClick={clickedButton}>Click Here!</button>
            
        </div>
    );
}

export default FirstComponent;