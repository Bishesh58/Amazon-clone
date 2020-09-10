import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{basket}, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://media.cdn.gradconnection.com/Amazon_Banner_XkH6pNy.png"
          alt=""
        />

        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>


          {basket.map(item => (
            <CheckoutProduct 
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
          {/* Basket Item */}
          {/* Basket Item */}
          {/* Basket Item */}
          {/* Basket Item */}
          {/* Basket Item */}
        </div>
      </div>

      <div className="checkout__right">
          <Subtotal/>
      </div>
    </div>
  );
}

export default Checkout;
