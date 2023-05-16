import React, { useContext } from "react";
import "./Shop.scss";
import { ProductContext } from "../../context/product.context";
import ProductCard from "../Products/ProductCard";
function Shop() {
  const { products } = useContext(ProductContext);

  return (
    <div className="products-container container">
      {products.map((product) => {
        return <ProductCard product={product} />;
      })}
    </div>
  );
}
export default Shop;
