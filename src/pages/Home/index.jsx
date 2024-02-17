import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/HashLoader";

import Header from "../../components/Header";
import WeatherForecast from "../../components/WeatherForecast";
import ClimateCard from "../../components/MainClimatesCard";

import { HomeContainer, LoadingScreen } from "./styles";

const Home = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      <Header />
      {loading ? (
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
      ) : (
        <>
          <HomeContainer>
            <div className="weatherContainer">
              <WeatherForecast />
            </div>
            <div className="galleryCards__Container">
              <div className="cardContainer">
                <ClimateCard cityNameCard="Brasília" />
                <ClimateCard cityNameCard="Rio de Janeiro" />
                <ClimateCard cityNameCard="São Paulo" />
                <ClimateCard cityNameCard="Fortaleza" />
                <ClimateCard cityNameCard="Goiânia" />
                <ClimateCard cityNameCard="Belo Horizonte" />
                <ClimateCard cityNameCard="Curitiba" />
                <ClimateCard cityNameCard="Recife" />
                <ClimateCard cityNameCard="Aracaju" />
              </div>
            </div>
          </HomeContainer>
        </>
      )}
    </>
  );
};

export default Home;
