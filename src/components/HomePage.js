import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  FormGroup,
  FormControl,
  Button,
  ButtonGroup,
  Table,
  Alert,
} from "react-bootstrap";

import { ListItems } from "../products";

const HomePage = () => {
  const init = {
    id: "",
    name: "",
    price: "",
    stockValue: "stocking",
    image: "",
  };
  const [info, setInfo] = useState(init);
  const [items, setItems] = useState(
    ListItems || JSON.parse(localStorage.getItem("items"))
  );
  const [update, setUpdate] = useState(false);
  const handleInfo = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };
  //delete
  const handleDelete=(id)=>{
      if(window.confirm('are U sure to delete id '+id+'?')){
        const newItems=items.filter(item => item.id.toString() !== id.toString());
        setItems(newItems);
        localStorage.setItem('items',JSON.stringify(newItems));
      }
  }
  //---------------------add a new
    //kiem tra xem id da co chua
    const getItemById=(id)=>{
        for(let i=0;i<items.length;i++){
            if(items[i].id.toString() === id.toString()){
                return items[i];
            }
        }
        return null;
    }
    //them moi
    const addItem=(item)=>{
        const newItems=[...items];
        newItems.push(item);
        setItems(newItems);
        localStorage.setItem('items',JSON.stringify(newItems));
    }
    //handle save
    const handleSave=()=>{
        const item={
            id:info.id,
            name:info.name,
            price:info.price,
            stock:info.stockValue,
            iamge:info.image
        }
        //validate du lieu
        if(info.id=='' || info.name=='' || info.price==''){
            alert('de nghi khong de trong!')
        }else if(getItemById(info.id)){
            alert('id da ton tai!');
        }else{
            setInfo(init);
            addItem(item);
        }
    }
  //-------------------

  //-----------------------update


  //---------------------

  return (
    <Container>
      <Alert className="primary">
        <h2>List of products ({items.length})</h2>
        <FormGroup>
          <label>Product ID</label>
          <FormControl
            value={info.id}
            name="id"
            type="text"
            placeholder="enter id"
            readOnly={update}
            onChange={handleInfo}
          />
        </FormGroup>
        <FormGroup>
          <label>Product name</label>
          <FormControl
            value={info.name}
            name="name"
            type="text"
            placeholder="enter name"
            onChange={handleInfo}
          />
        </FormGroup>
        <FormGroup>
          <label>Product price</label>
          <FormControl
            value={info.price}
            name="price"
            type="number"
            placeholder="enter price"
            onChange={handleInfo}
          />
        </FormGroup>
        <FormGroup className="d-flex flex-row">
          <legend className="col-form-label col-sm-1 pt-2">Stock</legend>
          <div className="col-2 pt-2">
            <input
              type="radio"
              value="stocking"
              name="stockValue"
              onChange={handleInfo}
              checked={info.stockValue === "stocking"}
            />
            <label style={{marginLeft:10}}>Stocking</label>
          </div>
          <div className="col-2 pt-2">
            <input
              type="radio"
              value="outofstock"
              name="stockValue"
              onChange={handleInfo}
              checked={info.stockValue === "outofstock"}
            />
            <label style={{marginLeft:10}}>Out of Stock</label>
          </div>
        </FormGroup>
        <FormGroup>
          <label>Image</label>
          <FormControl
            value={info.image}
            name="image"
            type="text"
            placeholder="enter url image"
            onChange={handleInfo}
          />
        </FormGroup>
        <ButtonGroup>
            <Button onClick={()=> handleSave()} className="btn btn-primary" style={{marginRight:10,width:150}}>SAVE</Button>
            <Button className="btn btn-secondary" style={{marginRight:10,width:150}}>UPDATE</Button>
            <Button className="btn btn-success" style={{marginRight:10,width:150}}>Sort by name</Button>
            <Button className="btn btn-success" style={{marginRight:10,width:150}}>Sort by price</Button>
            <Button className="btn btn-primary" style={{marginRight:10,width:150}}>Search</Button>
        </ButtonGroup>
        <Table className="table table-bordered table-striped">
          <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Image</th>
                <th>Action</th>
            </tr>
          </thead>
          <tbody>
            { items.map(item =>(
                <tr key={item.id} 
                    onClick={(e)=>{
                        if(e.target.textContent !=='Delete'){
                            setInfo({
                                id:item.id,
                                name:item.name,
                                price:item.price,
                                stockValue:item.stock,
                                iamge:item.image
                            })
                            setUpdate(true);
                        }
                    }} >
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.stock?'stocking':'out of stock'}</td>
                    <td>
                        <img src={item.image} style={{width:100,height:80}}/>
                    </td>
                    <td>
                        <Button onClick={()=> handleDelete(`${item.id}`)} className="btn btn-danger">Delete</Button>
                    </td>
                </tr>
            ))

            }
          </tbody>
        </Table>
      </Alert>
    </Container>
  );
};
export default HomePage;
