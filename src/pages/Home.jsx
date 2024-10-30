import { useState } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { IoIosArrowForward, IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import "./home.css";

export const Home = ({ arr, addtoCartFunc }) => {
  let [likedItems, setLikedItems] = useState([]);
  let [cartMessage, setCartMessage] = useState("");

  let toggleLike = (itemId) => {
    setLikedItems((prevLikedItems) => {
      if (prevLikedItems.includes(itemId)) {
        return prevLikedItems.filter((id) => id !== itemId);
      } else {
        return [...prevLikedItems, itemId];
      }
    });
  };

  let handleAddToCart = (item) => {
    addtoCartFunc(item, "+");
    setCartMessage(`Mahsulot savatga qo'shildi: ${item.name}`);
    setTimeout(() => setCartMessage(""), 5000); // Xabarni 5 soniyadan keyin tozalash
  };

  return (
    <>
      <h1 className="product_h1">
        Mashhur{" "}
        <span>
          <IoIosArrowForward />
        </span>
      </h1>

      {cartMessage && <div className="cart-message">{cartMessage}</div>}

      <ul className="product-list">
        {arr.map((item) => (
          <li className="product-item" key={item.id}>
            <div className="image-container">
              <img src={item.img} alt={item.name} className="product-image" />
              <button
                className="like-button"
                onClick={() => toggleLike(item.id)}
                aria-label={
                  likedItems.includes(item.id)
                    ? "Unike this item"
                    : "Like this item"
                }
              >
                {likedItems.includes(item.id) ? (
                  <IoMdHeart color="blue" />
                ) : (
                  <IoMdHeartEmpty />
                )}
              </button>
            </div>
            <p className="product-name">{item.name}</p>
            <h5 className="product-month">{item.month}</h5>
            <div className="addcart">
              <p className="product-price">{item.price} so'm</p>
              <button
                className="add-to-cart-button"
                onClick={() => handleAddToCart(item)}
                aria-label={`Add ${item.name} to cart`}
              >
                <BiShoppingBag />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
