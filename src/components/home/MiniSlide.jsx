import React, {useState} from 'react';
import styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';


const MiniSlideBlock = styled.div`
  position:relative; 
  padding:0 30px; 
  margin:50px auto;
  .slick-arrow {
    position:absolute; top:50%; transform:translateY(-50%); 
    font-size:30px; color:#f00; 
    &.slick-prev { left:-30px; z-index:9999 }
    &.slick-next { right:-30px } 
  }
`
const SlideContainer = styled.div`
  position: relative;
  img {
    width:90%;
    margin:0 5%;
  }
`;

const MiniSlide = () => {
  const [currentImage, setCurrentImage] = useState(null)
  const sliders = [
    {image1:"./assets/image/main1.jpg", image2:"./assets/image/main2.jpg", alt:"매장판매"},
    {image1:"./assets/image/main3.jpg", image2:"./assets/image/main4.jpg", alt:"사전예약"},
    {image1:"./assets/image/main5.jpg", image2:"./assets/image/main6.jpg", alt:"특별할인"},
    {image1:"./assets/image/main7.jpg", image2:"./assets/image/main8.jpg", alt:"파리올림픽"},
    {image1:"./assets/image/main1.jpg", image2:"./assets/image/main2.jpg", alt:"매장판매"},
    {image1:"./assets/image/main3.jpg", image2:"./assets/image/main4.jpg", alt:"사전예약"},
    {image1:"./assets/image/main5.jpg", image2:"./assets/image/main6.jpg", alt:"특별할인"},
    {image1:"./assets/image/main7.jpg", image2:"./assets/image/main8.jpg", alt:"파리올림픽"}
  ]
  const options = {
    dots:false,
    autoplay:true,
    autoplaySpeed:3000,
    slidesToShow:4,
    slidesToScroll:1,
    arrows:true,
    prevArrow : <IoIosArrowDropleftCircle />,
    nextArrow : <IoIosArrowDroprightCircle />,
    responsive : [
      { breakpoint:1024,
        settings : {
          slidesToShow:2
        }
      },
      { breakpoint:767,
        settings : {
          slidesToShow:1
        }
      }
    ]
  }

  return (
    <MiniSlideBlock className="row">
      <Slider {...options}>
        {
          sliders.map((item, index)=>(
            <SlideContainer key={index}>
              <img src={currentImage==index? item.image2 : item.image1} alt={item.alt} onMouseOver={ ()=>setCurrentImage(index)} onMouseOut={ ()=>setCurrentImage(null)} />
            </SlideContainer>
          ))
        }
      </Slider>
    </MiniSlideBlock>
  );
};

export default MiniSlide;