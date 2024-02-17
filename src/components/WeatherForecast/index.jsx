import { useState, useEffect } from "react";
import PropTypes from "prop-types"; // Validação de props
import { format } from "date-fns"; // formatador de Datas
import ClipLoader from "react-spinners/HashLoader";

import {
  WeatherForecastContainer,
  WeatherHeader,
  ExceptionMessageContainer,
  CityWeatherInfosContainer,
  RequestErrorMessage,
  SearchContainer,
  SearchCityInput,
  SearchCityButton,
  CardWeatherHour,
  LoadingScreen,
} from "./styles";

import { Icons } from "../../assets/images/svg/icons/icons";

import { getWheather, getWheatherDays } from "../../services/wheater-api";
import { getImage, getRandomNumber } from "../../services/unsplash-api";

const WeatherForecast = () => {
  const storedCityName = localStorage.getItem("cityName") || "Brasília";

  const [cityName, setCityName] = useState(storedCityName);
  const [cityTemp, setCityTemp] = useState("");
  const [cityMaxTemp, setCityMaxTemp] = useState("");
  const [cityMinTemp, setCityMinTemp] = useState("");
  const [cityHumidity, setCityHumidity] = useState("");
  const [cityWind, setCityWind] = useState("");
  const [cityDescription, setCityDescription] = useState("");
  const [loadingName, setLoadingName] = useState(true);
  const [requestMade, setRequestMade] = useState(true);
  const [repeatedRequest, setRepeatedRequest] = useState(false);
  const [imageBgUrl, setImageBgUrl] = useState("");
  const [conditionImg, setConditionImg] = useState("");
  const [weatherList, setWeatherList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let index = getRandomNumber(1, 9);
    async function setImage() {
      let data = await getImage("rain");
      setImageBgUrl(data.results[index].urls.regular);
    }

    setImage();

    const intervalId = setInterval(() => {
      let index = getRandomNumber(1, 9);
      async function setImage() {
        let data = await getImage("night");
        setImageBgUrl(data.results[index].urls.regular);
      }
      setImage();
    }, 100000);

    setData();

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const setConditionImage = async () => {
      await setData();

      const cityImages = {
        "chuva leve": "http://openweathermap.org/img/wn/09n@2x.png",
        "chuva moderada": "http://openweathermap.org/img/wn/10n@2x.png",
        "nuvens dispersas": "http://openweathermap.org/img/wn/03n@2x.png",
        "chuva": "http://openweathermap.org/img/wn/10d@2x.png",
        "céu limpo": "http://openweathermap.org/img/wn/01d@2x.png",
        "poucas nuvens": "http://openweathermap.org/img/wn/02d@2x.png",
        "trovoada": "http://openweathermap.org/img/wn/11d@2x.png",
        "neve": "http://openweathermap.org/img/wn/13d@2x.png",
        "névoa": "http://openweathermap.org/img/wn/50d@2x.png",
        "nublado": "http://openweathermap.org/img/wn/04n@2x.png",
        "chuva forte": "http://openweathermap.org/img/wn/09n@2x.png",
      };

      setConditionImg(cityImages[cityDescription] || null);
    };
    setConditionImage();
  }, [cityDescription]);

  async function setData() {
    try {
      let data = await getWheatherDays(cityName); // Dados a cada 5 horas
      let mainData = await getWheather(cityName); // Dados Ao vivo

      const setCityData = (data) => {
        const { name, main, wind, weather } = data; // Desestruturando
        setCityName(name);
        setCityTemp(main.temp);
        setCityMaxTemp(main.temp_max);
        setCityMinTemp(main.temp_min);
        setCityHumidity(main.humidity);
        setCityWind(wind.speed);
        setCityDescription(weather[0].description);
      };

      setCityData(mainData);
      setLoadingName(false);
      setWeatherList(data.list);

      localStorage.setItem("cityName", data.city.name);
    } catch (error) {
      setRequestMade(false);

      const timer = setTimeout(() => {
        setRequestMade(true);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }

  const handleCityChange = (event) => {
    if (!loadingName) {
      setCityName(event.target.value);
    }
  };

  function disapearMessage() {
    const timer = setTimeout(() => {
      setRepeatedRequest(false);
    }, 5000);

    return () => clearTimeout(timer);
  }

  const verify = () => {
    if (cityName == storedCityName) {
      setRepeatedRequest(true);

      disapearMessage();
    } else {
      setRepeatedRequest(false);
    }
  };

  const loadingData = () => {
    setLoading(true);

    let loadingTime = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(loadingTime);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setData();
      verify();
      loadingData()
    }
  };

  const listWeathers = () => {
    return (
      <div className="weatherListHours">
        {weatherList.map((item, index) => (
          <CardWeatherHour key={index}>
            <div className="CardWeatherHour_Header">
              <span className="CardWeatherHour_data">
                {format(item.dt_txt, "MMMM do yyyy, h:mm:ss a")}
              </span>
              <span className="CardWeatherHour_temp">
                {Number(item.main.temp).toFixed(0)}°
              </span>
            </div>
            <div className="CardWeatherHour_Description">
              <span>{item.weather[0].description}</span>
            </div>
          </CardWeatherHour>
        ))}
      </div>
    );
  };
  //

  return (
    <>
      {loading && (
        <LoadingScreen>
          <ClipLoader
            color={"#6937F5"}
            loading={loading}
            cssOverride={""}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </LoadingScreen>
      )}
      {!loading && (
        <WeatherForecastContainer $imagebg={imageBgUrl}>
          <CityWeatherInfosContainer>
            <ExceptionMessageContainer>
              {!requestMade && (
                <ExceptionMessage message="Eita !Cidade não encontrada"></ExceptionMessage>
              )}
              {repeatedRequest && (
                <ExceptionMessage message="Opa! Nós já estamos nessa cidade"></ExceptionMessage>
              )}
            </ExceptionMessageContainer>
            <SearchContainer>
              <SearchCityInput
                className="searchCityInput"
                type="text"
                placeholder="Para onde vamos ?"
                onChange={handleCityChange}
                onKeyDown={(handleKeyDown)}
              />
              <SearchCityButton
                onClick={() => {
                  setData();
                  verify();
                  loadingData();
                }}
              >
                <img
                  src={Icons.search}
                  alt="Search Indicator"
                  className="searchButtonIcon"
                />
              </SearchCityButton>
            </SearchContainer>
            <WeatherHeader>
              <span className="cityTemp">{Number(cityTemp).toFixed(0)}°</span>
              <div>
                <span className="cityName">{storedCityName}</span>
                <img src={conditionImg} className="conditionImg" />
                <span className="cityWeatherDescription">
                  {cityDescription}
                </span>
              </div>
            </WeatherHeader>
            <div className="weatherComplementContainer">
              <div className="weatherComplement">
                <span className="cityHumidity">
                  {" "}
                  <img src={Icons.humidity} alt="Humidity indicator" />{" "}
                  {cityHumidity}%
                </span>
                <span className="cityMaxTemp">
                  {" "}
                  <img src={Icons.arrowUp} alt="Max Temp indicator" />
                  Máxima: {Number(cityMaxTemp).toFixed(0)}°
                </span>
                <span className="cityMinTemp">
                  {" "}
                  Mínima: {Number(cityMinTemp).toFixed(0)}°{" "}
                  <img src={Icons.arrowDown} alt="Min Temp indicator" />
                </span>
                <span className="cityWind">
                  {" "}
                  <img src={Icons.wind} alt="Wind Speed indicator" /> {cityWind}
                  Km/h
                </span>
              </div>
            </div>
            <>{listWeathers()}</>
          </CityWeatherInfosContainer>
        </WeatherForecastContainer>
      )}
    </>
  );
};

const ExceptionMessage = ({ message }) => {
  return (
    <RequestErrorMessage>
      <span>{message}</span>
    </RequestErrorMessage>
  );
};

ExceptionMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default WeatherForecast;
