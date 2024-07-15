import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components'

const WeatherBlock = styled.div``

const Weather = () => {
  const myApiKey = "b22cc400a3b25ecf2837a48f16606d93"
  const [weather, setWeather]=useState({temp:0, mood:"", icon:""})
  const [location, setLocation] = useState({lat:0, lon:0});

  const showPosition = (position) => {
    const { latitude, longitude } = position.coords;
    console.log(latitude, longitude)
    setLocation({ lat:latitude, lon:longitude });
  };
  const showError = (error) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        setError('사용자가 위치 정보 제공을 거부했습니다.');
        break;
      case error.POSITION_UNAVAILABLE:
        setError('위치 정보를 사용할 수 없습니다.');
        break;
      case error.TIMEOUT:
        setError('위치 정보를 가져오는 요청이 시간 초과되었습니다.');
        break;
      case error.UNKNOWN_ERROR:
        setError('알 수 없는 오류가 발생했습니다.');
        break;
      default:
        setError('알 수 없는 오류가 발생했습니다.');
        break;
    }
  };

  useEffect(()=>{
    if (navigator.geolocation) {
      // 사용자의 현재 위치를 비동기적으로 가져옴
      // HTML5 Geolocation API에서 제공하는 기능
      // showPosition : 위치 정보를 성공적으로 가져왔을때 호출되는 콜백함수(사용자가 허락하면 성공)
      // showError : 위치 정보를 가져오는데 실패했을때 호출되는 콜백함수(사용자가 불허하면 실패)
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      setError('이 브라우저는 Geolocation을 지원하지 않습니다.');
    }
  }, [])
  
  useEffect(()=>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${myApiKey}`)
    .then(res=>{
      console.log(res)
      let mood = res.data.weather[0].main
      if (mood=="Clear") {
        mood = "맑음"
      } else if (mood=="Mist" || mood=="Smoke" || mood=="Haze"){
        mood = "안개"
      } else if (mood="Clouds") {
        mood = "구름"
      } else if (mood=="Rain"){
        mood = "비"
      } 
      setWeather({temp:res.data.main.temp-273.15, mood:mood, icon:res.data.weather[0].icon})
    })
  }, [])

  return (
    <WeatherBlock>
      <span>{weather.temp.toFixed(1)}℃</span>
      <span style={{ margin:'0 10px'}}>{weather.mood}</span>
      <span><img src={`https://openweathermap.org/img/wn/${weather.icon}.png`} alt="" /></span>
    </WeatherBlock>
  );
};

export default Weather;