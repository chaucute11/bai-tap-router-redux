import {  useSelector } from "react-redux";
import CartItem from "./CartItem";
import "./Cart.scss"

function CartList() {
  const cart = useSelector(state => state.cartReducer)
  
  return (
    <>
      <div className="product-list--cart">
        {cart.map(item => (
         <CartItem item={item} key={item.id} />
        ))}
      </div>

    </>
  )
}
export default CartList;