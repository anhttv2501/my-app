import React,{useState} from "react";
import {Button} from 'react-bootstrap';
import Box from "./Box";

const PropExample=()=>{
    const [boxColor,setBoxColor]=useState('#FE5D26');
    const handleChangRed=()=>{
        setBoxColor('red'); 
    }
    const handleChangYellow=()=>{
        setBoxColor('yellow'); 
    }
    return (
        <>
        <Box boxColor={boxColor} />
        <Button variant="danger" onClick={handleChangRed}>Change RED</Button>
        <Button variant="warning" onClick={handleChangYellow}>Change Yellow</Button>
        </>
    );
}
export default PropExample;