import { Link } from "react-router-dom";
import {useSelector} from "react-redux";
function CartMini(){
  const cart = useSelector(state => state.cartReducer);
  const total = cart.reduce((total, item) => {
    return total + item.quantity;
  },0)
  return(
    <>
      <Link to="/cart">
        Cart({total || 0})
       </Link>
    </>
  )
}
export default CartMini;