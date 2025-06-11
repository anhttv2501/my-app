import React, { useEffect,useState} from "react";
export function UserAvatar (props) {
    const {name,src}=props;
    return (
        <>
        <span style={{marginLeft:50}}>{name}</span>
        <img src={{src}} style={{marginLeft:30,width:200,height:200}} />
        </>
    );
  }  
  
  const Cach1= ()=> {
    const [user, setUser] = useState({
      name: "Image 1",
      avatarURL: "https://images.unsplash.com/photo-1605496036006-fa36378ca4ab?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }) 
    useEffect(() => {
        setTimeout(() => { 
          setUser({
            name: "Image 2",
            avatarURL: 'https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // a new image
          });
        },2000);
      },[])
    return (
    <div>
      <UserAvatar name={user.name} src={user.avatarURL} />
    </div>);
  }
  export default Cach1;
