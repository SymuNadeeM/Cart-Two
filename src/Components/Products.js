import React, { useContext } from "react";
import {
  AiOutlinePlusSquare,
  AiOutlineMinusSquare,
  AiOutlineDelete,
} from "react-icons/ai";
import { AddCartContext } from "./FullCart";

const Products = ({ id, title, description, price, img, quantity }) => {
  const { removeItem, pluscard, minuscard } = useContext(AddCartContext);

  return (
    <>
      <div className="items_info">
        <div className="product_img">
          <img src={img} alt={title} />
        </div>
        <div className="product_title">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="minus_quantity">
          <AiOutlineMinusSquare
            className="quantity_button"
            onClick={() => minuscard(id)}
          />
          <input type="text" placeholder={quantity} />
          <AiOutlinePlusSquare
            className="quantity_button"
            onClick={() => pluscard(id)}
          />
        </div>
        <div className="price">
          <h3>{price}</h3>
        </div>
        <div className="remove-item">
          <AiOutlineDelete className="remove" onClick={() => removeItem(id)} />
        </div>
      </div>
      <hr />
    </>
  );
};

export default Products;
