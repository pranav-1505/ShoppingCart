import React from "react";

const cart = ({ cartItem, increaseQuantity, decreaseQuantity, removeItem }) => {

  const totalPrice = cartItem.reduce((total, item) => total + item.price * item.quantity, 0);
  
  return (
    <div className="cartproducts_main">
      <h2>Cart Items</h2>
      {cartItem.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <div>
        <h2>Total: ${totalPrice.toFixed(2)}</h2>
          {cartItem.map((item) => {
            return (
              <div key={item.id} className="cart_list">
                <div className="cart_img">
                  {" "}
                  <img src={item.image} />
                  <div className="cart_btn" >
                    <button onClick={()=>increaseQuantity(item.id)}>+</button>
                    <span>{item.quantity}</span>
                    <button onClick={()=>decreaseQuantity(item.id)}>-</button>
                  </div>
                </div>
                <div className="cart_title">
                  <p>{item.title}</p>
                  <p>Price: ${item.price}</p>
                  <button onClick={() => removeItem(item.id)}>Remove</button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default cart;
