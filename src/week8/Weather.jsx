import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Div = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;

  margin: 0 auto;
  flex-direction: column;
`;
const Input = styled.input`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10%;
  outline: black;
  border-radius: 15px;
`;
const Container = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  height: 50%;
  border: 2px solid black;
  border-radius: 15px;
  flex-direction: column;
`;
const City = styled.div`
  font-size: 20px;
  padding: 5px;
`;
const Temp = styled.div`
  font-size: 50px;
  margin: 3px;
  padding: 5px;
`;
const Cloud = styled.div`
  font-size: 15px;
  padding: 5px;
`;
const Weather = () => {
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [converted, setConverted] = useState(null);
  const API_KEY = "a66da37fecbb863cf1edd6b7e4e806d7";
  const city = "Seoul";
  const handleKeyPress = async (event) => {
    if (event.key === "Enter") {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
        );

        const convertedTemperature =
          Math.round((response.data.main.temp - 273.15) * 10) / 10;
        /*         setWeatherData(convertedTemperature); */

        setConverted(convertedTemperature);
        console.log(response.data);
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }
  };

  return (
    <Div>
      <Input
        type="text"
        placeholder="도시를 입력하세요"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      {weatherData ? (
        <Container>
          <City>{cityName}</City>
          <Temp>{converted}°C</Temp>
          <Cloud>{weatherData.weather[0].main} </Cloud>
        </Container>
      ) : (
        <p> </p>
      )}
    </Div>
  );
};

export default Weather;
