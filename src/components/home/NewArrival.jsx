import React from 'react';
import styled from 'styled-components'

const NewArrivalBlock = styled.div`
  margin:100px auto; 
  h2 { text-align: center; margin-bottom:30px }
`
const UlBlock = styled.ul`
  display : flex; 
  flex-wrap : wrap; 
`
const LiBlock = styled.li`
  flex:0 1 23%;
  margin:20px 1%;
  border:1px solid #ddd; 
  position:relative; 
  color:#fff; 
  overflow:hidden; 
  @media screen and (max-width:1024px){
    flex:0 1 31.33%;
  }
  @media screen and (max-width:767px){
    flex:0 1 48%;
  }
  .imgBox {
    overflow:hidden;
    img {
      transition:all 0.3s;
      &:hover { transform:scale(1.2) }
    }
  }
  .infoBox {
    padding:20px; 
    line-height:1.5em; 
    background:rgba(0,0,0,0.5);
    transition:all 0.5s; 
    position:absolute;
    top:100%; 
    width:100%; 
  }
  &:hover {
    .infoBox {
      top:50%; 
    }
  }
  
`

const NewArrival = () => {
  const products = [
    { 
      image:"./assets/image/new1.jpg",
      name:"제주몽생이샌드1",
      desc:"아주 맛있어요.",
      comment:"1인당 5EA 구매 한정",
      price : 50000
    },
    { 
      image:"./assets/image/new2.jpg",
      name:"제주몽생이샌드2",
      desc:"아주 맛있어요.",
      comment:"1인당 5EA 구매 한정",
      price : 50000
    },
    { 
      image:"./assets/image/new3.jpg",
      name:"제주몽생이샌드3",
      desc:"아주 맛있어요.",
      comment:"1인당 5EA 구매 한정",
      price : 50000
    },
    { 
      image:"./assets/image/new4.png",
      name:"제주몽생이샌드4",
      desc:"아주 맛있어요.",
      comment:"1인당 5EA 구매 한정",
      price : 50000
    },
    { 
      image:"./assets/image/new5.png",
      name:"제주몽생이샌드5",
      desc:"아주 맛있어요.",
      comment:"1인당 5EA 구매 한정",
      price : 50000
    },
    { 
      image:"./assets/image/new6.jpg",
      name:"제주몽생이샌드6",
      desc:"아주 맛있어요.",
      comment:"1인당 5EA 구매 한정",
      price : 50000
    },
    { 
      image:"./assets/image/new7.png",
      name:"제주몽생이샌드7",
      desc:"아주 맛있어요.",
      comment:"1인당 5EA 구매 한정",
      price : 50000
    },
    { 
      image:"./assets/image/new1.jpg",
      name:"제주몽생이샌드1",
      desc:"아주 맛있어요.",
      comment:"1인당 5EA 구매 한정",
      price : 50000
    },
    { 
      image:"./assets/image/new2.jpg",
      name:"제주몽생이샌드2",
      desc:"아주 맛있어요.",
      comment:"1인당 5EA 구매 한정",
      price : 50000
    },
    { 
      image:"./assets/image/new3.jpg",
      name:"제주몽생이샌드3",
      desc:"아주 맛있어요.",
      comment:"1인당 5EA 구매 한정",
      price : 50000
    },
    { 
      image:"./assets/image/new4.png",
      name:"제주몽생이샌드4",
      desc:"아주 맛있어요.",
      comment:"1인당 5EA 구매 한정",
      price : 50000
    },
    { 
      image:"./assets/image/new5.png",
      name:"제주몽생이샌드5",
      desc:"아주 맛있어요.",
      comment:"1인당 5EA 구매 한정",
      price : 50000
    },
    { 
      image:"./assets/image/new6.jpg",
      name:"제주몽생이샌드6",
      desc:"아주 맛있어요.",
      comment:"1인당 5EA 구매 한정",
      price : 50000
    },
    { 
      image:"./assets/image/new7.png",
      name:"제주몽생이샌드7",
      desc:"아주 맛있어요.",
      comment:"1인당 5EA 구매 한정",
      price : 50000
    }
  ]
  return (
    <NewArrivalBlock className="row">
      <h2>New Arrival</h2>
      <UlBlock>
        {
          products.map((item,index)=>(
            <LiBlock key={index}>
              <div className="imgBox">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="infoBox">
                <p style={{ fontSize:'18px'}}>{item.name}</p>
                <p>{item.desc}</p>
                <p>{item.comment}</p>
                <p><strong>{item.price.toLocaleString()}원</strong></p>
              </div>
            </LiBlock>
          ))
        }
      </UlBlock>
    </NewArrivalBlock>
  );
};

export default NewArrival;