import react from "react";
import "./properties.css";
import { useState } from "react";
import { Button } from "react-bootstrap";
import down from "../../images/down.png";
export default function Properties(props) {
  const name = props.name;
  const category = props.category;
  const exist = props.exist;
  const image = props.image;
  const price = props.price;
  return (
    <div className="preProps">
      <button className="down_arr"  onClick={props.remove}>
        <img className="imgDown" width="10" src={down} />
      </button>
      <section className="props">
        <figure>
          <img src={image} />
          <figcaption>{name}</figcaption>
        </figure>
        <section>
          <p>price: {price}</p>
          <p>
            {exist
              ? "The " + category + " Exist"
              : "The " + category + "doesnt exist"}
          </p>
          <p>category: {category}</p>
        </section>
      </section>
      ;
    </div>
  );
}
