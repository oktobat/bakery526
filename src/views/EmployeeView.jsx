import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import Title from '@/components/common/Title'
import axios from 'axios'

const Places = styled.ul``
const CityList = styled.div``
const EmployeeView = () => {
  const [places, setPlaces] = useState([])
  const [city, setCity] = useState("")
  const sigu = ["시도선택", "서울시", "대전시", "전주시", "광주시", "대구시"]
  const myApiKey = "tsxcXyzF%2BXgzdg7s3iUG9BMSxzhXszdC68k9VquGWo9zq657lbmJPTjMzeWFsX5JhFXJvf8Yfgeh56Vou5hiog%3D%3D"

  useEffect(()=>{
    axios.get(`/api?serviceKey=${myApiKey}&pageNo=1&numOfRows=10&addr=${city}`)
    .then(res=>{
      console.log(res)
      setPlaces(res.data.response.body.items.item)
    })
  }, [city])

  const optionChange = (e)=>{
    console.log(e.target.value)
    setCity(e.target.value)
  }

  return (
    <div className="row">
      <Title title="전기차 충전소" />
      <CityList>
        <select onChange={optionChange}>
          { sigu.map((item, index)=>(
            <option value={item} key={index}>{item}</option>
          ))
          }
        </select>
      </CityList>
      <Places>
        {
          places ? places.map((item, index)=>(
            <li key={index}>
              <p>{item.addr}</p>
              <p>{item.cpNm}</p>
            </li>
          )) : "충전소가 없습니다."
        }
      </Places>
    </div>
  );
};

export default EmployeeView;