import React from 'react';
import styled from "styled-components";

const CircleEach = styled.div`
width:140px;
height:140px;
margin: 30px;
border-radius: 50%;
background-color: ${(props) => (props.circleColor ? props.circleColor : "green")};
display: inline-block;
flex-direction: row;
`

const Circles = (props) => {
    return (
        <CircleEach circleColor={props.circleColor}>

        </CircleEach>
    );
};

export default Circles;

