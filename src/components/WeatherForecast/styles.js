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

  @media only screen and (max-width: 480px) {
    padding: 0.5rem;
  }

  @media only screen and (min-width: 481px) and (max-width: 1000px) {
    padding: 0.5rem;
  }
`;

export const WeatherHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2rem;
  position: relative;

  span {
    margin: 0 2rem;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: absolute;
    top: -3rem;
    right: 2rem;
  }

  .cityName {
    font-size: 2em;
    color: #ffffff;
    text-shadow: 4px -1px 3px rgba(0, 0, 0, 0.6);
  }

  .cityTemp {
    margin-left: 10%;
    font-size: 5rem;
    font-weight: 500;
    color: #ffffff;
    position: absolute;
    text-shadow: 4px -1px 3px rgba(0, 0, 0, 0.6);
  }

  .conditionImg {
    width: 64px;
    margin-right: 2rem;
  }

  .cityWeatherDescription {
    font-size: 1rem;
    color: #ffffff;
  }

  @media only screen and (max-width: 480px) {
    .cityTemp {
      font-size: 4rem;
    }

    .cityName {
      font-size: 1em;
      color: #ffffff;
      text-shadow: 4px -1px 3px rgba(0, 0, 0, 0.6);
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      position: absolute;
      top: 1rem;
      right: 0;
    }
  }

  @media only screen and (min-width: 481px) and (max-width: 1000px) {
    .cityTemp {
      font-size: 5rem;
    }

    .cityName {
      font-size: 1.5em;
      color: #ffffff;
      text-shadow: 4px -1px 3px rgba(0, 0, 0, 0.6);
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      position: absolute;
      top: 0rem;
      right: 0;
    }
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

  .weatherComplementContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    margin-top: 4rem;
  }

  .weatherComplementContainer div {
    margin-bottom: 1rem;
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
    font-size: 1rem;
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

  .weatherListHours {
    width: 90%;
    display: flex;
    margin-top: 0rem;
    overflow-y: hidden;
    overflow-x: scroll;
    position: absolute;
    bottom: 0.5rem;
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

  @media only screen and (max-width: 480px) {
    .weatherComplementContainer {
      margin-top: 8rem;
    }

    .weatherComplement {
      padding: 0rem 0.5rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      color: ${theme.primaryColor};
    }

    .weatherComplement img {
      width: 20px;
      margin: 0.5rem;
    }

    .cityMaxTemp {
      margin-right: 0.5rem;
    }

    .cityMaxTemp,
    .cityMinTemp {
      font-size: 0.8rem;
      color: #ffffff;
      text-align: center;
    }

    .cityHumidity {
      margin-right: 0rem;
    }

    .cityWind,
    .cityHumidity {
      font-size: 0.8rem;
    }
  }

  @media only screen and (min-width: 481px) and (max-width: 1000px) {
    .weatherComplementContainer {
      margin-top: 8rem;
    }

    .weatherComplement {
      padding: 0rem 0.5rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      color: ${theme.primaryColor};
    }

    .weatherComplement img {
      width: 20px;
      margin: 0.5rem;
    }

    .cityMaxTemp {
      margin-right: 0.5rem;
    }

    .cityMaxTemp,
    .cityMinTemp {
      font-size: 1rem;
      color: #ffffff;
      text-align: center;
    }

    .cityHumidity {
      margin-right: 0rem;
    }

    .cityWind,
    .cityHumidity {
      font-size: 0.8rem;
    }
  }

`;

export const CardWeatherHour = styled.div`
  padding: 0.5rem 1rem;
  margin: 0.5rem 1rem;
  width: 100%;
  background-color: #ffffff20;
  border-radius: 10px;

  &:first-child {
    margin: 0.5rem 0;
  }

  span:first-child {
    margin-right: 1rem;
  }

  span {
    color: ${theme.primaryColor};
  }

  .CardWeatherHour_data {
    font-size: 1rem;
  }

  .CardWeatherHour_temp {
    font-size: 1.5rem;
  }

  .CardWeatherHour_Header {
    width: 250px;
    display: flex;
    justify-content: space-between;
  }

  .CardWeatherHour_Description {
    width: 250px;
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

  @media only screen and (max-width: 480px) {
    justify-content: center;
    align-items: center;
  }
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
  box-shadow: 0px 0px 0.7px rgba(0, 0, 0, 0.145),
    0px 0px 2.2px rgba(0, 0, 0, 0.215), 0px 0px 10px rgba(0, 0, 0, 0.36);

  @media only screen and (max-width: 480px) {
    margin-left: 0rem;
    width: 90%;
  }
`;

export const SearchCityButton = styled.button`
  border: 0;
  border-radius: 25px;
  background-color: transparent;
  cursor: pointer;

  color: ${theme.secondaryColor};
  text-align: center;

  .searchButtonIcon {
    width: 20px;
    position: absolute;
    top: 8px;
    left: 22.5rem;
    transition: transform 0.3s ease-in-out;
  }

  .searchButtonIcon:hover {
    transform: scale(1.1);
  }

  @media only screen and (max-width: 480px) {
    .searchButtonIcon {
      left: auto;
      right: 10%;
    }
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

export const LoadingScreen = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.primaryColor};
`;
