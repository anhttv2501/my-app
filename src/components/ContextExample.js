import {UserProvider} from './UserContext';
import {Page1,Page2,Page3} from './Page';
import React from "react";
function ChoosePage({page}){
   const Page=[Page1,Page2,Page3][page];
   return (
    <Page/>
   );
}
const ContextExample=()=>{
    const [page,setPage]=React.useState(0);
    return (
        <>
        <UserProvider>
      <button onClick={()=>setPage(0)} disabled={page===0}>
        Page 1
      </button>
      <button onClick={()=>setPage(1)} disabled={page===1}>
        Page 2
      </button>
      <button onClick={()=>setPage(2)} disabled={page===2}>
        Page 3
      </button>
      <ChoosePage page={page}/>
      </UserProvider>
        </>
    );

}
export default ContextExample;