import styled from "styled-components";
import Hero from "../components/home/Hero";
import Informations from "../components/home/Informations";
import Realisations from "../components/home/Realisations";

export default function Home() {
  return (
    <HomeStyled>
      <Hero />
      <Informations />
      <Realisations />
    </HomeStyled>
  );
}

const HomeStyled = styled.div`
  width: 100%;
`;
