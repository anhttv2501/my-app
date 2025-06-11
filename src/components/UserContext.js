import React from "react";
export const UserContext=React.createContext();
function fetUser(){
    return new Promise((resolve)=>{
       setTimeout(()=>{
          resolve({id:1,name:'Fpt University'});
       },1000);
    });
}
export function UserProvider({children}){
   const [user,setUser]=React.useState({name:"..."});
   React.useEffect(()=>{
       fetUser().then((user)=>{
           setUser(user);
       });
   },[]);
   return (
    <UserContext.Provider value={user}>
       {children}
    </UserContext.Provider>
   );
}
