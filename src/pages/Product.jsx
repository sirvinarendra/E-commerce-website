import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import { RelatedProducts } from '../components/RelatedProducts/RelatedProducts';
import { DescriptionBox } from '../components/DescriptionBox/DescriptionBox';
import { ProductDisplay } from '../components/ProductDisplay/ProductDisplay';
import { useParams } from 'react-router-dom';
import { Breadcrum } from '../components/Breadcrum/Breadcrum';
export const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {productId}=useParams();
  const product= all_product.find((e)=>e.id===Number(productId))
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
    
  )
}
