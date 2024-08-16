import React from "react";
import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCard } from "../utils/cardSlice";
const Cart = () => {
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearCard());
  };

  const cards = useSelector((store) => store.cart.items);
  return (
    <>
      <h1>Your Items</h1>
      <button className=".search-btn" onClick={handleClear}>
        Clear
      </button>
      <div>
        {cards.length === 0 && <h2>Add Items to the Card....!!</h2>}
        <ItemList item={cards}></ItemList>
      </div>
    </>
  );
};

export default Cart;
