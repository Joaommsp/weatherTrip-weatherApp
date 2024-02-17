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
    background: #C9D7DD;
    border-radius: 100px;
    box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);
    height: 120px;
    position: relative;
    width: 350px;
  }

  .cloud:after,
  .cloud:before {
    background: #C9D7DD;
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
`;

export const BannerContainer = styled.div`
  width: 50%;
  height: 100%;
  padding-left: 5rem;
  z-index: -10;

  .banner {
    width: 500px;
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

  .about {
    width: 100%;
    text-align: center;
    margin-top: 10rem;
    color: ${theme.secondaryColor};
  }

  .about a {
    font-weight: bold;
    text-decoration: none;
    color: ${theme.secondaryColor}
  }
`;
