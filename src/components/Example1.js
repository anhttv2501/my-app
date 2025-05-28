import React, { useState } from "react";
import {Button} from 'react-bootstrap'

const Example1 = () => {
  const [counter, setCounter] = useState(0);
  const handleDerease = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  const handleInrease = () => {
    setCounter(counter + 1);
  };
   return (
    <>
       Counter : {counter}<br/>
       <Button className="primary m-2" style={{width:200}} onClick={handleDerease}>Decrease</Button>
       <Button className="primary m-2" style={{width:200}} onClick={handleInrease}>Increase</Button>
    </>
   );
};
export default Example1;
