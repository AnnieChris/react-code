import React from 'react';

function NumberList(props) {

    const listItems = props.numbers;
    //console.log(listItems);
    const numbers = listItems.map((number) => 
        <li key={number.toString()}>{number}</li>
    )
    return (
        <ul> {numbers} </ul>
    );
}

export default NumberList;