import React from "react";
import styled from "styled-components/native";

const CurrentForecast = ({ currentWeather }) => {
  return (
    <CurrentView>
      <MainInfoContainer>
        <CurrentTempView>
          {currentWeather.current && (
            <WeatherIcon
              source={{
                uri: `http://openweathermap.org/img/wn/${currentWeather.current.weather[0].icon}@2x.png`,
              }}
              resizeMode={"contain"}
            />
          )}
          <CurrentDegrees>
            {Math.round(currentWeather.current && currentWeather.current.temp)}
            °C
          </CurrentDegrees>
        </CurrentTempView>
        <Description>
          {currentWeather.current &&
            currentWeather.current.weather[0].description}
        </Description>
      </MainInfoContainer>
      <SecondaryInfoContainer>
        <Row>
          <DetailsBox>
            <Label>Windchill</Label>
            <Details>
              {currentWeather.current &&
                Math.round(currentWeather.current.feels_like)}
              °C
            </Details>
          </DetailsBox>
          <DetailsBox>
            <Label>Min</Label>
            <Details>
              {currentWeather.daily &&
                Math.round(currentWeather.daily[0].temp.min)}
              °C
            </Details>
          </DetailsBox>
          <DetailsBox>
            <Label>Max</Label>
            <Details>
              {currentWeather.daily &&
                Math.round(currentWeather.daily[0].temp.max)}
              °C
            </Details>
          </DetailsBox>
        </Row>
        <Row>
          <DetailsBox>
            <Label>Wind</Label>
            <Details>
              {currentWeather.current && currentWeather.current.wind_speed} m/s
            </Details>
          </DetailsBox>
          <DetailsBox>
            <Label>Humidity</Label>
            <Details>
              {currentWeather.current && currentWeather.current.humidity}%
            </Details>
          </DetailsBox>
          <DetailsBox>
            <Label>Rain</Label>
            <Details>
              {currentWeather.daily > 0 ? currentWeather.daily[0].rain : "0"} MM
            </Details>
          </DetailsBox>
        </Row>
      </SecondaryInfoContainer>
    </CurrentView>
  );
};

const CurrentView = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const CurrentTempView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const MainInfoContainer = styled.View`
  display: flex;
  align-items: center;
`;

const Description = styled.Text`
  color: #439A97;
  font-size: 15px;
  text-transform: capitalize;
`;

const SecondaryInfoContainer = styled.View`
  background-color: rgba(203, 237, 213, 0.8);
  border-radius: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 10px;
  width: 95%;
  max-width: 478px;
`;

const WeatherIcon = styled.Image`
  width: 50px;
  height: 50px;
`;

const Timezone = styled.Text`
  color: #62B6B7;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  font-size: 15px;
`;

const CurrentDegrees = styled.Text`
  color: #439A97;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  font-size: 70px;
`;

const Row = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  color: #62B6B7;
  padding: 10px 30px;
`;

const DetailsBox = styled.View`
  display: flex;
`;

const Label = styled.Text`
  font-size: 25px;
`;

const Details = styled.Text`
  color: #4E4F53;
  font-size: 25px;
  text-transform: capitalize;
`;

export default CurrentForecast;
