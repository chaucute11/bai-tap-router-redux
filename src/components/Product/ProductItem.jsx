/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateCart } from "../../actions/cart";
import { useNavigate } from "react-router-dom";
function ProductItem(props) {
  const cart = useSelector(state => state.cartReducer)
  const { item } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleNav = () => {
    navigate(`/products/${item.id}`)
  }
  const handleAddToCart = () => {
    if (cart.some((itemCart) => itemCart.id === item.id)) {
      dispatch(updateCart(item.id, 1))
    }
    else {
      dispatch(addToCart(item.id, item))
    }
  }
 
  return (
    <>
      <div className="product-item">
        <div className="product-image" onClick={handleNav}>
          <img src={item.thumbnail} alt={item.title} />
        </div>
        <div className="product-title">{item.title}</div>
        <h4 className="product-price-new">{(item.price - (item.price * item.discountPercentage / 100)).toFixed(2)}$</h4>
        <h4 className="product-price-old">{item.price}$</h4>
        <p className="product-discount">{item.discountPercentage}%</p>
        <button onClick={handleAddToCart}>Thêm vào giỏ hàng</button>
      </div>
    </>
  )
}
export default ProductItem;