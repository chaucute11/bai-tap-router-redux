import { useDispatch, useSelector } from "react-redux";
import CartList from "./Cartlist";
import { deleteAll } from "../../actions/cart";
function Cart() {
  const cart = useSelector(state => state.cartReducer);
  const dispatch = useDispatch()
  const handleDeleteAll = () => {
    dispatch(deleteAll())
  }
  const total = cart.reduce((sum, item) => {
    return sum + item.info.price * item.quantity 
  },0)
  return (
    <>
      <div className="cart-header">
        <h4>Giỏ hàng</h4>
        <button onClick={handleDeleteAll}>Xoá tất cả</button>
      </div>
      {cart.length > 0
        ? (<>
          <CartList />
          <div className="cart-total">Tổng tiền: <span>{total.toFixed(0)}$</span></div>
        </>
        )
        : (
          <div>
            Chưa có sản phẩm
          </div>
        )
      }
    </>
  )
}
export default Cart;