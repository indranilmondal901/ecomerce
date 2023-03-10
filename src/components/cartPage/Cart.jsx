import React, { useContext } from "react";
import { context } from "../../context/context";
import { Link } from "react-router-dom";
import "../cartPage/Cart.css";
import NavBar from "../navbar/Navbar";
// import Payment from "../paymentpage/Payment";

const Cart = () => {
  const { cartData , HandlePayment} = useContext(context);

  let total = 0;
  cartData.map((sd) => {
    total = total + sd[1];
    return total;
  })
  return (
    <div>
      <NavBar/>
      <h1 id="pageName">Your Cart </h1>
      {
        cartData.map((singleGame,index) => { 
          console.log(index);
          return (
              <div id="cart_details" key={index}>
                <h3 id="item_name" >{singleGame[0]} </h3>
                <h3 id="item_price" >{singleGame[1]}</h3>
              </div>
          )
        })
      }
      <div id="cart_total">
        <h3> Your Total Purchase </h3>
        <h3>{total}</h3>
      </div>
      <div id="detailsPage_btn_div">
        <Link to="/payment">
          <button id="payment_button" onClick={()=>{HandlePayment(total)}}> Make Payment</button>
        </Link>
      </div>
      {/* <Payment total={total}/> */}
    </div>
  )
}

export default Cart;