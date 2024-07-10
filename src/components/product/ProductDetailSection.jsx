import React from 'react';
import styled from 'styled-components'

const ProductDetailSectionBlock = styled.div`
  h2 {
    text-align: center;
    font-size: 30px;
    margin: 40px 0;
  }
`
const ProductContent = styled.div`
  display:flex; 
`
const Photo = styled.div`
  flex:1; 
`
const Info = styled.div`
  flex:1; 
  font-size:20px; 
  line-height:1.5em; 
  .btn {
    button { padding:10px 20px; 
      color:#fff; margin:20px 5px;
      background:blue; 
      &:nth-child(2) { background:black }
    }
  }
`

const ProductDetailSection = ({item, index}) => {
  return (
    <ProductDetailSectionBlock>
      <h2>{item.title}</h2>
      <ProductContent>
        <Photo>
          {/* 개발중일때는 이미지경로 './assets/~' {`/${item.image}`} */}
          {/* build할때는 '/리포지토리명/./assets/~' {`/paris/${item.image}`} */}
          <img src={`/${item.image}`} alt={item.title} />
        </Photo>
        <Info>
          <p>상품번호 : {index}</p>
          <p>상품명 : {item.title}</p>
          <p>가격 : {item.price.toLocaleString()}</p>
          <p>요약설명 : <span dangerouslySetInnerHTML={{ __html: item.description }} /></p>
          <p>구매수량 : <input type="number" /></p>
          <div className="btn">
            <button type="button">장바구니</button>
            <button type="button">구매하기</button>
          </div>
        </Info>
      </ProductContent>
    </ProductDetailSectionBlock>
  );
};

export default ProductDetailSection;