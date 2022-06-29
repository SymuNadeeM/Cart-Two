import React, { useContext } from "react";
import { BsCart3 } from "react-icons/bs";
import Products from "./Products";
import { AddCartContext } from "./FullCart";

const ContextCart = () => {
  const { items, ClearCart, totalItems, totalAmount } =
    useContext(AddCartContext);

  return (
    <>
      <header className="header_part">
        <div className="header_icon">
          <h3 className="Brand_name">
            <span className="brand_Capi">W</span>Atch
            <span className="hut">Hut</span>
          </h3>
        </div>
        <div className="cart_icon">
          <BsCart3 className="Carry_icon" />
          <p>{totalItems}</p>
        </div>
      </header>
      <hr />
      <section className="section_main">
        <h1>Shopping Cart</h1>
        <p className="total_items">
          You have <span className="item_count">{totalItems} </span>items
        </p>
        <div className="cart_items">
          <div className="cart_container">
            {items.map((currentItem) => {
              return <Products key={currentItem.id} {...currentItem} />;
            })}
          </div>
        </div>
        <div className="cart_total">
          <h3>
            Cart Total : <span>${totalAmount}</span>
          </h3>
          <button>CheckOut</button>
          <button className="clear_cart" onClick={() => ClearCart()}>
            Clear Cart
          </button>
        </div>
      </section>
    </>
  );
};

export default ContextCart;
