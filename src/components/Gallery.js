import React from "react";
import img1 from '../images/img1.png';
import img3 from '../images/img3.png';

export function Profile(){
    return (
        <img src={img1} width={100} height={100}/>
    );
}
export function Profile2(){
    return (
        <img src={img3} width={100} height={100}/>
    );
}
const Gallery=()=>{
    return (
        <>
        <Profile/>
        <hr/>
        <Profile2/>
        </>
    );
}
export default Gallery;