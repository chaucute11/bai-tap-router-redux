import { useDispatch } from "react-redux";
import { deleteCart, updateCart } from "../../actions/cart";
import { useRef } from "react";

/* eslint-disable react/prop-types */
function CartItem(props) {
  const { item } = props;
  const inputRef = useRef(1);
  const dispatch = useDispatch();
  const handleUp = () => {
    dispatch(updateCart(item.id, 1))
    inputRef.current.value = item.quantity;
  }

  const handleDown = () => {
    if (item.quantity > 1) {
      dispatch(updateCart(item.id, -1))
      inputRef.current.value = item.quantity;
    }
  }

  const handleDelete = () => {
    dispatch(deleteCart(item.id))
  }
  return (
    <>
      <div className="product-item--cart">
        <div className="product-image--cart">
          <img src={item.info.thumbnail} alt={item.info.title} />
        </div>
        <div className="product-info--cart">
          <div className="product-title--cart">{item.info.title}</div>
          <div className="product-price--cart">{item.info.price}$</div>
        </div>
        <div className="product-quantity">
          <button onClick={handleDown}>-</button>
          <input defaultValue={item.quantity} ref={inputRef} />
          <button onClick={handleUp}>+</button>
          <button onClick={handleDelete}>Xoá</button>

        </div>
      </div>
    </>
  )
}
export default CartItem;