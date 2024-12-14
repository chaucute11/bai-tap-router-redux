import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addToCart, updateCart } from "../../actions/cart";
import { useDispatch, useSelector } from "react-redux";

function ProductDetail() {
  const [item, setData] = useState();
  const param = useParams();
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cartReducer)
  useEffect(() => {
    const fetchApi = async () => {
      fetch(`https://dummyjson.com/products/${param.id}`)
        .then(res => res.json())
        .then(data => {
          setData(data)
        })
    }
    fetchApi();
  }, [param.id])

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
      {item && (
        <div className="product-item">
          <div className="product-image">
            <img src={item.thumbnail} alt={item.title} />
          </div>
          <div className="product-title">{item.title}</div>
          <h4 className="product-price-new">{(item.price - (item.price * item.discountPercentage / 100)).toFixed(2)}$</h4>
          <h4 className="product-price-old">{item.price}$</h4>
          <p className="product-discount">{item.discountPercentage}%</p>
          <button onClick={handleAddToCart}>Thêm</button>
        </div>
      )}
    </>
  )
}
export default ProductDetail;