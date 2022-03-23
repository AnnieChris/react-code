import React from 'react';
import UserA from './UserA';
import UserB from './UserB';


const components = {
    userA : UserA,
    userB : UserB
}
function DynamicContent(props) {

    const SelectUser = components[props.user];
    return (
        <SelectUser/>
    );
}

export default DynamicContent;