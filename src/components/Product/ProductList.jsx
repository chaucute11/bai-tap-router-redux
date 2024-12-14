import { useEffect, useState } from "react";
import { getProductList } from "../../services/productService";
import ProductItem from "./ProductItem";
import "./ProductItem.scss"
function ProductList() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const data = await getProductList();
      setProduct(data.products);
    }
    fetchApi();
  }, [])
  return (
    <>
      <div className="product">
        {product.map(item => (
          <ProductItem item={item} key={item.id}/>
        ))}
      </div>
    </>
  )
}
export default ProductList;