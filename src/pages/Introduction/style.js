import styled from "styled-components";

const theme = {
  primaryColor: "#FEFAF9",
  secondaryColor: "#6937F5",
};

export const IntroContainer = styled.div`
  width: 100%;
  height: 85vh;
  padding-top: 2rem;
  overflow: hidden;
  position: relative;

  @-webkit-keyframes animatedCloud {
    0% {
      margin-left: -1000px;
    }
    100% {
      margin-left: 100%;
    }
  }

  .x1 {
    -webkit-animation: animatedCloud 40s linear infinite;
    -webkit-transform: scale(0.65);
  }
  .x2 {
    -webkit-animation: animateCloud 30s linear infinite;
    -webkit-transform: scale(0.2);
  }
  .x3 {
    -webkit-animation: animateCloud 25s linear infinite;
    -webkit-transform: scale(0.4);
  }

  .cloud {
    background: #c9d7dd;
    border-radius: 100px;
    box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);
    height: 120px;
    position: relative;
    width: 350px;
  }

  .cloud:after,
  .cloud:before {
    background: #c9d7dd;
    content: "";
    position: absolute;
    z-index: -1;
  }

  .cloud:after {
    border-radius: 100px;
    height: 100px;
    left: 50px;
    top: -50px;
    width: 100px;
  }

  .cloud:before {
    border-radius: 200px;
    width: 180px;
    height: 180px;
    right: 50px;
    top: -90px;
  }

  @media only screen and (max-width: 700px) {
    height: 100%;
  }
`;

export const CloudAnimationContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  position: absolute;
  top: 0;
`;

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;

  @media only screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export const BannerContainer = styled.div`
  width: 50%;
  height: 100%;
  padding-left: 5rem;
  z-index: -10;

  .banner {
    width: 500px;
  }

  @media only screen and (max-width: 700px) {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-left: 0;

    .banner {
      width: 300px;
    }
  }

  @media only screen and (min-width: 700px) and (max-width: 1000px) {
    padding-left: 2rem;

    .banner {
      width: 300px;
    }
  }
`;

export const SloganContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-right: 5rem;
  z-index: 5;

  h1 {
    font-size: 3rem;
    color: ${theme.secondaryColor};
  }

  p {
    font-size: 1.5rem;
    color: #3c3633;
  }

  .getStarted {
    margin-top: 5rem;
    padding: 0.8rem 1.5rem;
    border-radius: 50px;

    text-decoration: none;
    background-color: ${theme.secondaryColor};
    color: ${theme.primaryColor};
  }

  .aboutContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 10rem;
    padding-right: 2rem;
  }

  .about {
    text-align: center;
    color: ${theme.secondaryColor};
  }

  .about a {
    font-weight: bold;
    text-decoration: none;
    color: ${theme.secondaryColor};
  }

  @media only screen and (max-width: 700px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    padding-right: 0;
    padding: 0 2rem;

    h1 {
      width: 100%;
      font-size: 2rem;
      text-align: center;
    }

    p {
      font-size: 1rem;
      color: #3c3633;
      text-align: center;
    }

    .getStarted {
      margin-top: 2rem;
    }

    .aboutContainer {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin-top: 4rem;
      padding-right: 0rem;
      margin-bottom: 2rem;
      font-size: 0.8rem;
    }
  }

  @media only screen and (min-width: 700px) and (max-width: 1000px) {
    padding-right: 2rem;

    h1 {
      width: 100%;
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
      color: #3c3633;
      text-align: left;
    }
  }
`;
