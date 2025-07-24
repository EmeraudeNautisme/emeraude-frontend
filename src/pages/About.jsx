import styled from "styled-components";

export default function About() {
  return (
    <AboutStyled>
      <div className="navbar-background"></div>
      <div className="about-container">
        <div className="title-container">
          <div className="title">
            <img className="bateau" src="/bateau.png" />
            <h1>Qui sommes-nous ?</h1>
            <img className="wave" src="/wave.png" />
          </div>
          <div className="description">
            <p>
              Spécialiste du bateau Semi Rigide toutes marques, nous intervenons
              sur tous les tissus, PVC, Néoprène (Hypalon), PU.
            </p>
            <p>
              <strong>Nous vous proposons différents services :</strong>
            </p>
          </div>
        </div>
      </div>
    </AboutStyled>
  );
}

const AboutStyled = styled.div`
  width: 100%;

  .navbar-background {
    width: 100%;
    height: 184px;
    background: url("/navbar-background.png");
  }

  .about-container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 75px;
  }

  .title-container {
    display: flex;
    flex-direction: column;
    gap: 17px;
    max-width: 916px;
  }

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h1 {
      font-family: "Rozha One";
      font-size: 65px;
      font-weight: 400;
      color: #084887;
    }
  }

  .wave {
    width: 148px;
  }

  .bateau {
    width: 78px;
  }

  .description {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 35px;

    p {
      font-size: 25px;
    }
  }
`;
