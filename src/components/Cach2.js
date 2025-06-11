import React, { useEffect,useRef,useState} from "react";
import {UserAvatar} from './Cach1'
 
  const Cach2= ()=> {
    const user = useRef({
        name: "Image 1",
        avatarURL: "https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      })
    useEffect(() => {
        setTimeout(() => { 
            user.current = {
                name: "Image 2",
                avatarURL: "https://images.unsplash.com/photo-1605496036006-fa36378ca4ab?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
              }
        },2000);
      },[])
    return (
    <div>
      <UserAvatar name={user.current.name} src={user.current.avatarURL} />
    </div>);
  }
  export default Cach2;
