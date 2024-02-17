import styled from "styled-components";

const theme = {
  primaryColor: "#FEFAF9",
  secondaryColor: "#6937F5",
};

export const WeatherForecastContainer = styled.div`
  height: 95%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${(props) => props.$imagebg});
  background-size: cover;
  background-position: bottom;
  transition: 0.5s ease-in-out;
  position: relative;
`;

export const WeatherHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  span {
    margin: 0 2rem;
  }
`;

export const CityWeatherInfosContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 0rem;
  bottom: 0;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.43040966386554624) 0%,
    rgba(18, 18, 18, 1) 100%
  );

  .cityTemp {
    margin-left: 10%;
    font-size: 5.5rem;
    font-weight: 500;
    color: #ffffff;
  }

  .cityName {
    margin-bottom: 1rem;

    font-size: 3em;
    color: #ffffff;
  }

  .weatherComplementContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    margin-top: 1rem;
  }

  .weatherComplementContainer div {
    margin-bottom: 1.5rem;
  }

  .weatherComplement {
    padding: 0rem 0.5rem;
    display: flex;
    color: ${theme.primaryColor};
  }

  .weatherComplement img {
    width: 30px;
    margin: 0.5rem;
  }

  .weatherComplement span {
    display: flex;
    align-items: center;
  }

  .cityMaxTemp {
    margin-right: 3.5rem;
  }

  .cityMaxTemp,
  .cityMinTemp {
    font-size: 1.5rem;
    color: #ffffff;
  }

  .cityHumidity {
    margin-right: 1rem;
  }

  .cityWind,
  .cityHumidity {
    font-size: 1rem;
    color: #ffffff;
  }

  .cityWeatherDescription {
    font-size: 1.5rem;
    color: #ffffff;
  }

  .weatherListHours {
    width: 90%;
    background-color: transparent;
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
  }

  .weatherListHours::-webkit-scrollbar {
    width: 1px;
  }

  .weatherListHours::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 100px;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
    width: 10px;
    border-radius: 100px;
  }

  .weatherListHours:-webkit-scrollbar-thumb {
    background-color: ${theme.secondaryColor};
    border-radius: 100px;
  }
`;

export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  margin-top: 2rem;
`;

export const SearchCityInput = styled.input`
  width: 364px;
  height: 38px;
  border: 0;
  border-radius: 25px;
  padding: 0 1rem;
  margin-left: 2rem;
  background-color: #eaeaea;
  color: ${theme.secondaryColor};
  position: relative;

  font-size: 1.2rem;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
`;

export const SearchCityButton = styled.button`
  border: 0;
  border-radius: 25px;
  background-color: transparent;
  cursor: pointer;

  color: ${theme.secondaryColor};
  text-align: center;

  .searchButtonIcon {
    width: 22px;
    position: absolute;
    top: 8px;
    left: 22rem;
  }
`;

export const ExceptionMessageContainer = styled.div`
  height: 50px;
  width: 200px;
  text-align: center;
  position: absolute;
  top: 2rem;
`;

export const RequestErrorMessage = styled.div`
  width: 200px;
  height: 56px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 2rem;

  span {
    color: #ffffff;
    font-size: 1.2rem;
  }
`;

export const CardWeatherHour = styled.div`
  padding: 1rem;
  margin: 1rem 1rem;
  width: 100%;
  background-color: #ffffff20;
  border-radius: 10px;

  span:first-child {
    margin-right: 2rem;
  }

  span {
    color: ${theme.primaryColor};
  }

  .CardWeatherHour_data {
    font-size: 1.2rem;
  }

  .CardWeatherHour_temp {
    font-size: 2.5rem;
  }

  .CardWeatherHour_Header {
    width: 330px;
    display: flex;
    justify-content: space-between;
  }

  .CardWeatherHour_Description {
    width: 330px;
    height: 100px;
  }
`;
