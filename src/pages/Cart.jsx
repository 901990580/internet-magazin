import React from "react";
import { useNavigate } from "react-router-dom";
import "./cart.css";

export const Cart = ({ cart, addtoCartFunc, deleteHandler }) => {
  let navigate = useNavigate();

  // narx
  let totalPrice = cart.reduce(
    (total, item) => total + item.price * item.count,
    0
  );

  return (
    <div className="cart-container">
      {cart.length === 0 ? (
        <h2>Savatingiz boʻsh</h2>
      ) : (
        <ul className="ul">
          {cart.map((item) => {
            // Har bir mahsulot uchun subtotalni hisoblash
            let subtotal = item.price * item.count;

            return (
              <li className="item" key={item.id}>
                <img src={item.img} alt={item.name} />
                <div className="item-details">
                  <h2>{item.name}</h2>
                  <div className="details">
                    <div className="cart_button">
                      <button
                        disabled={item.count === 1}
                        onClick={() => addtoCartFunc(item, "-")}
                        aria-label={`Decrease quantity of ${item.name}`}
                      >
                        -
                      </button>
                      <span>{item.count}</span>
                      <button
                        onClick={() => addtoCartFunc(item, "+")}
                        aria-label={`Increase quantity of ${item.name}`}
                      >
                        +
                      </button>
                    </div>
                    <p className="details_p">
                      {item.price} * {item.count} = {subtotal} so'm
                    </p>
                  </div>
                </div>
                <button
                  className="delete"
                  onClick={() => deleteHandler(item.id)}
                  aria-label={`Remove ${item.name} from cart`}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      )}
      <h1 className="h1">Jami: {totalPrice} so'm</h1>

      <button className="go_back" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
};
