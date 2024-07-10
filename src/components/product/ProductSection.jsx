import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import { fetchProducts } from "@/store/product"
import { useDispatch,  useSelector} from 'react-redux';
import { Link } from 'react-router-dom'

const ProductSectionBlock = styled.div``
const UlBlock = styled.ul`
  display:flex; 
  flex-wrap: wrap;
`
const ListBlock = styled.li`
  flex:0 0 21%;
  margin:20px 2%;
  text-align:center; 
  border:1px solid #000;
  .info {
    p:nth-child(1) { font-size:20px }
  }
`
const ProductSection = ({title}) => {
  const dispatch = useDispatch();
  const allData = useSelector(state=>state.products.products)
  const [products, setProducts] = useState(allData)

  // 컴포넌트가 마운트되고 1차 렌더링 후 자동으로 실행되는 함수
  // 의존성배열이 [] 빈 배열일때는 한번만 수행됨
  useEffect(()=>{
    dispatch(fetchProducts())
  }, [])

  useEffect(()=>{
    if (allData.length>0) {
      if (title=='all') {
        setProducts(allData)
      } else {
        setProducts(allData.filter(item=>item.category==title))
      }
    }
  }, [allData, title])

  return (
    <ProductSectionBlock>
      <UlBlock>
        { products &&
          products.map((item, index)=>(
            <ListBlock key={index}>
              <div className="photo">
                <Link to={`/product/${item.id}`} state={{item, index}}>
                  <img src={item.image} alt={item.title} />
                </Link>
              </div>
              <div className="info">
                <p>
                  <Link to={`/product/${item.id}`} state={{item, index}}>
                    {item.title}
                  </Link>
                </p>
                <p>{item.price.toLocaleString()}</p>
                <p>{item.description}</p>
              </div>
            </ListBlock>
          )) 
        }
      </UlBlock>
    </ProductSectionBlock>
  );
};

export default ProductSection;