import React from "react";
import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCard } from "../utils/cardSlice";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
const Cart = () => {
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearCard());
  };

  const cards = useSelector((store) => store.cart.items);
  return (
    <div style={{marginTop:'130px',textAlign:'center'}}>
      <h1>Your Items</h1>
      <Button className=".search-btn"  variant="contained" onClick={handleClear}>
        Clear
      </Button>
      <div>
        {cards.length === 0 && <h2>Add Items to the Card....!!</h2>}
        <ItemList item={cards}></ItemList>
      </div>
    </div>
  );
};

export default Cart;
