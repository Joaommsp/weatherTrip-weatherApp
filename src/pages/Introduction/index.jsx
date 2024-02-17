import { Link } from "react-router-dom";

import Header from "../../components/Header";
import Banner from "../../assets/images/weatherTrip-banner.png";

import {
  IntroContainer,
  BannerContainer,
  SloganContainer,
  ContentContainer,
  CloudAnimationContainer,
} from "./style";

const Introduction = () => {

  return (
    <>
      <Header />
      <IntroContainer>
        <ContentContainer>
          <BannerContainer>
            <img src={Banner} alt="Weather Trip Banner" className="banner" />
          </BannerContainer>

          <SloganContainer>
            <h1>WeatherTrip</h1>
            <p>
              Your Weather, Your Journey: Always a Step Ahead with Our Weather
              Forecasting App!
            </p>
            <Link to="/home" className="getStarted">
              Get started
            </Link>
            <div className="aboutContainer">
              <span className="about">Developed by <a href="https://www.linkedin.com/in/joão-marcos-melo/" target="_blank">João Marcos</a></span>
              <span className="about">My <a href="">Linkedin</a></span>
              <span className="about">My <a href="">Github</a></span>
            </div>
          </SloganContainer>
        </ContentContainer>
        <CloudAnimationContainer>
          <div className="x1">
            <div className="cloud"></div>
          </div>
          <div className="x2">
            <div className="cloud"></div>
          </div>
          <div className="x3">
            <div className="cloud"></div>
          </div>
        </CloudAnimationContainer>
      </IntroContainer>
    </>
  );
};

export default Introduction;
