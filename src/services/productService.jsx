import { get } from "../utils/request"

export const getProductList = async () =>{
  const res = await get("products");
  return res;
}