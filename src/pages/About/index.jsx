import Header from "../../components/Header";
import Avatar from "../../assets/images/aboutMe-Avatar.png";
import { Icons } from "../../assets/images/svg/icons/icons";

import { AboutContainer, AboutMeContainer, AvatarContainer } from "./style";

const About = () => {
  return (
    <>
      <Header />
      <AboutContainer>
        <AvatarContainer>
          <img src={Avatar} alt="My avatar Robô de combate na praia" />
        </AvatarContainer>
        <AboutMeContainer>
          <h2>Dev João</h2>
          <p>
            Desenvolvedor FrontEnd estudando para me tornar um Full Stack, esse
            projeto foi apenas uma das coisas que posso fazer, meu objetivo é
            entrar no mercado e minha vontade é de trabalhar.
          </p>
          <span>Vamos manter contato?</span>
          <a
            href="https://www.linkedin.com/in/joão-marcos-525564226/"
            target="_blank"
          >
            {" "}
            <img src={Icons.linkedin} alt="" /> Linkedin
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=75988275212&text&type=phone_number&app_absent=0/"
            target="_blank"
          >
            {" "}
            <img src={Icons.zap} alt="" /> WhatsApp
          </a>
          <a href="https://github.com/Joaommsp" target="_blank">
            {" "}
            <img src={Icons.gittHub} alt="" /> GitHub
          </a>
        </AboutMeContainer>
      </AboutContainer>
    </>
  );
};

export default About;
