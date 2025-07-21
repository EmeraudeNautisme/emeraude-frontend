import styled from "styled-components";
import Schema from "./Schema";
import ContactCard from "./ContactCard";

export default function Informations() {
  return (
    <InformationsStyled>
      <Schema />
      <ContactCard />
    </InformationsStyled>
  );
}

const InformationsStyled = styled.div`
  width: 100%;
  padding: 19px 68.5px;
  display: flex;
  gap: 32px;
  margin-top: -170px;
  position: relative;
  z-index: 100;
  pointer-events: none;

  @media screen and (max-width: 1700px) {
    margin-top: 0;
    flex-direction: row-reverse;
    pointer-events: all;
    align-items: center;
    height: 680px;
  }

  @media screen and (max-width: 1350px) {
    flex-direction: column-reverse;
    height: auto;
    padding: 80px 17px;
    gap: 80px;
  }
`;
