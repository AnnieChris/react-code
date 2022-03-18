import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background-color:blue;
    color:white;
    font-size:30px
`;


function StyledDemo(props) {
    return (
        <div>
            <StyledButton>Login</StyledButton>
        </div>
    );
}

export default StyledDemo;