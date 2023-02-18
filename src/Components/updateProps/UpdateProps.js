import react from "react";
import "./updateP.css";
import { useState } from "react";
import down from "../../images/down.png";
import {Form, Button, InputGroup, } from "react-bootstrap";
export default function Properties(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("figure");
  const [exist, setExist] = useState("");
  const [img, setImg] = useState("");
  return (
    <div className="preProps">
      <button className="down_arr" onClick={props.remove}>
        <img className="imgDown" width="10" src={down} />
      </button>
      <section className="props">
        <Form.Group className="main-form mb-3">
          <InputGroup.Text className="inp">Add Product Name</InputGroup.Text>
          <Form.Control
            className="formP"
            type="text"
            placeholder="Enter the name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <InputGroup.Text className="inp">Add Product image</InputGroup.Text>
          <Form.Control
            className="formP"
            type="text"
            value={img}
            onChange={(e) => {
              setImg(e.target.value);
            }}
            accept="jpg"
            placeholder="Enter the name"
          />

          <InputGroup.Text className="inp">Add Product price</InputGroup.Text>
          <Form.Control
            className="formP"
            type="number"
            placeholder="Enter the name"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
              console.log(e.target.value)
            }}
          />

          <InputGroup.Text>category</InputGroup.Text>
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              console.log(category);
              console.log(e.target.value);
            }}
            name=""
            id=""
          >
            <option
              onSelect={(e) => {
                setCategory(e.target.value);
                console.log(e.target.value);
              }}
              value="figure"
            >
              figure
            </option>
            <option
              onSelect={(e) => {
                setCategory(e.target.value);
                console.log(e.target.value);
              }}
              value="image"
            >
              img
            </option>
            <option
              onSelect={(e) => {
                setCategory(e.target.value);
                console.log(e.target.value);
              }}
              value="sticker"
            >
              sticker
            </option>
          </select>

          <Button onClick={()=>{props.updateFunc(props.id, {name:name, exist:exist, category:category, price:price, image:img})}} type="submit">
            submit
          </Button>
        </Form.Group>
      </section>
      
    </div>
  );
}
