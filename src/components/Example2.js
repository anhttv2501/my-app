import React, { useState } from "react";
import {Alert,Container, FormGroup,FormControl,Table} from 'react-bootstrap'
const Example2=()=>{
    const init={
      code:'',
      name:'',
      genderValue:'male',
    }
    const [student,setStudent]=useState(init);

    const handleChange=(e)=>{
        setStudent({
            ...student,
            [e.target.name]:e.target.value
        });
    }

    return (
        <Container>
        <Alert style={{backgroundColor:'#0096FF',color:'#FFFF'}}>
         <FormGroup>
            <label>Code</label>
            <FormControl value={student.code} 
            onChange={handleChange} name="code" 
            placeholder="enter code"
            type="text"/>
         </FormGroup>
         <FormGroup>
            <label>Name</label>
            <FormControl value={student.name} 
            onChange={handleChange} name="name" 
            placeholder="enter name"
            type="text"/>
         </FormGroup>
         <FormGroup>
            <legend>Gender:</legend>
            <input className="m-2" type="radio" value='male'
            onChange={handleChange} 
            checked={student.genderValue==='male'} 
            name="genderValue" /> 
            <label className="m-2">Male</label>
            <input className="m-2"  type="radio" value='female'
            onChange={handleChange} 
            checked={student.genderValue==='female'} 
            name="genderValue" /> 
            <label className="m-2">Female</label>
         </FormGroup>
         <Table className="bordered striped hover">
           <thead>
            <tr>
                <th>Code</th>
                <th>Name</th>
                <th>Gender</th>
            </tr>
           </thead>
           <tbody>
            <tr>
                <td>{student.code}</td>
                <td>{student.name}</td>
                <td>{student.genderValue}</td>
            </tr>
           </tbody>
         </Table>
        </Alert>
        </Container>
    );
}
export default Example2;
