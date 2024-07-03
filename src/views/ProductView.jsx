import React, {useState} from 'react';
import Title from '@/components/common/Title'
import ProductCategory from '@/components/product/ProductCategory'
import ProductSection from '@/components/product/ProductSection'
import {useSelector } from 'react-redux'

const ProductView = () => {
  const category = useSelector(state=>state.products.category)
  return (
    <div className="row">
      <Title title="파바의 제품" />
      <ProductCategory title={category} />
      <ProductSection title={category} />
    </div>
  );
};

export default ProductView;