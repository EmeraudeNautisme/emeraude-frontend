import styled from "styled-components";

export default function Schema() {
  return (
    <SchemaStyled>
      <p>
        Collage – Réparation – Flotteur sur-mesure – Peinture des flotteurs –
        Refit - Rénovation
      </p>
      <div className="image">
        <img
          className="schema"
          src="/schema.png"
          alt="schema de bateau avec légendes"
        />
        <img
          className="schema-mobile"
          src="/schema-mobile.png"
          alt="schéma de bateau avec légendes pour appareils mobiles"
        />
      </div>
    </SchemaStyled>
  );
}

const SchemaStyled = styled.div`
  width: 1007px;
  height: 433px;
  align-self: flex-end;
  border-radius: 15px;
  background: url("/grilles.png");
  background-position: center;
  box-shadow: 0px 0px 34px 0px rgba(0, 0, 0, 0.1);
  color: #084887;
  font-weight: 700;
  font-style: italic;
  font-family: "Fira sans";
  font-size: 22px;
  padding: 16px 26px;
  pointer-events: all;
  display: flex;
  flex-direction: column;
  gap: 31px;

  .image {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .schema-mobile {
    display: none;
  }

  @media screen and (max-width: 1700px) {
    align-self: flex-start;
    width: 66%;
    height: 100%;

    .image img {
      width: 100%;
    }
  }

  @media screen and (max-width: 1350px) {
    width: 100%;
    text-align: center;
  }

  @media screen and (max-width: 500px) {
    .schema {
      display: none;
    }

    .schema-mobile {
      display: flex;
    }
  }

  @media screen and (max-width: 580px) {
    font-size: 22px;
  }
`;
