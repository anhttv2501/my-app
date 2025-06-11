import React,{useState,useRef} from "react";
const RefCounter=()=>{
    const [count,setCount]=useState(0);
    const countRef=useRef(0);
    const [update,setUpdate]=useState(false);
    return (
        <>
           <p>Count state:{count}</p>
           <button onClick={()=>setCount(count+1)}> + (useStae)</button>
           <p>Count ref:{countRef.current}</p>
           <button onClick={()=>{
            countRef.current=countRef.current+1;
            setUpdate(u=>!u);
            }}> + (useRef)</button>
        </>
    );
}
export default RefCounter;