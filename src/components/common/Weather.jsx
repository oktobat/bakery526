import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components'

const WeatherBlock = styled.div``

const Weather = () => {
  const myApiKey = "b22cc400a3b25ecf2837a48f16606d93"
  const [weather, setWeather]=useState({temp:0, mood:"", icon:""})
  const [location, setLocation] = useState("김은영");
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition()
  }, [])
  useEffect(()=>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=37&lon=127&appid=${myApiKey}`)
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