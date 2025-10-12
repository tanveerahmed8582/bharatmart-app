import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext.jsx";
import { useParams } from "react-router-dom";
import BredCrums from "../Components/BredCrums/BredCrums.jsx";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay.jsx";
import Description from "../Components/Description/Description.jsx";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts.jsx";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === parseInt(productId));
  return (
    <div>
      <BredCrums product={product} />
      <ProductDisplay product={product} />
      <Description />
      <RelatedProducts />
    </div>
  );
};

export default Product;
