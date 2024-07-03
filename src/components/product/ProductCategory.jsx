import React from 'react';
import styled from 'styled-components'
import {useDispatch} from 'react-redux'
import { onChangeCategory } from '@/store/product'

const ProductCategoryBlock = styled.div`
    display: flex;
    justify-content: center;
    button {
        width: 100px;
        height: 40px;
        margin: 0 20px;
        background: blue;
        color: #fff;
        &.on {
          background:red; 
        }
      }
`

const ProductCategory = ({title}) => {
  const dispatch = useDispatch()
  const category = ['all', 'bread', 'cake', 'sandwitch']
  return (
    <ProductCategoryBlock>
      {
        category.map((value, index)=><button type="button" key={index} className={ title==value ? "on" : "" } onClick={ ()=>dispatch(onChangeCategory(value)) }>{value}</button>)
      }
    </ProductCategoryBlock>
  );
};

export default ProductCategory;