import styled from "styled-components";
import InfosEntreprise from "../components/InfosEntreprise";
import Footer from "../components/Footer";

export default function About() {
  return (
    <AboutStyled>
      <div className="about-navbar-background"></div>
      <div className="about-container">
        <div className="about-title-container">
          <div className="about-title">
            <img
              className="about-bateau"
              src="/bateau.png"
              alt="bateau titre"
            />
            <h1>Qui sommes-nous ?</h1>
            <img className="about-wave" src="/wave.png" />
          </div>
          <div className="about-description">
            <p>
              Spécialiste du bateau Semi Rigide toutes marques, nous intervenons
              sur tous les tissus, PVC, Néoprène (Hypalon), PU.
            </p>
            <p>
              <strong>Nous vous proposons différents services :</strong>
            </p>
          </div>
        </div>
        <div className="about-services">
          <div className="about-card-services">
            <img src="/collage.png" alt="collage" />
            <h3>Collage</h3>
            <p>
              D’une simple réparation à la pose d’accessoires, en passant par
              des interventions lourdes (déchirures, éventrations, recollage
              intégral du flotteur…), nous trouverons la solution la plus
              discrète et le bon rapport qualité prix.
              <br />
              <br />
              Nous travaillons uniquement avec des colles bi-composants adaptées
              au PVC, Néoprène (Hypalon) et PU. Les salles de collage sont
              équipées pour maitriser l’hygrométrie et la température afin
              d’optimiser la qualité des collages et de pouvoir les garantir
            </p>
          </div>
          <div className="about-card-services">
            <img src="/peinture.png" alt="peinture" />
            <h3>Peinture des flotteurs</h3>
            <p>
              Nous sommes applicateurs pour la Bretagne Nord de la peinture
              NEOP15, cette peinture offre un très grand choix de couleurs (plus
              de 1500 !) et s’applique sur le flotteur, sa bande de ragage, la
              sellerie, le volant, les pares battages etc etc…
              <br />
              <br />
              La peinture NEOP15 (fabricant français) convient au PVC, Néoprène
              (Hypalon), PU…
              <br />
              La peinture Neop15 recharge votre flotteur en matière, résous la
              porosité du tissu, répare un tissu usé (râpé), un flotteur ou une
              bande de ragage poisseux
              <br />
              Ce procédé permet souvent d’éviter d’investir dans un flotteur
              neuf beaucoup plus couteux
            </p>
          </div>
          <div className="about-card-services">
            <img src="/revetement.png" alt="revêtement" />
            <h3>Revêtement de Sol</h3>
            <p>
              Grâce à ProDeck, nous pouvons équiper tout bateau (semi- rigide ou
              non) d’un revêtement de sol sur mesure d’une grande qualité,
              différents motifs (façon teck, look moderne, logos…) et couleurs
              possibles.
              <br />
              <br />
              ProDeck est un fabricant français qui propose ces revêtements de
              sols antidérapants et très agréables au pieds à base de mousse EVA
              (Résistance aux UV, Imputrescible, Antidérapant, Confortable…)
            </p>
          </div>
          <div className="about-card-services">
            <img src="/flotteurs.png" alt="flotteurs" />
            <h3>Flotteurs neufs</h3>
            <p>
              Nous réalisons des créations sur-mesure en PVC ou en Hypalon,
              entièrement personnalisables selon vos envies : coloris au choix,
              nombreuses finitions, options variées (ajout de logos, textures,
              renforts, etc.).
              <br />
              <br />
              Chaque réalisation est pensée pour s’intégrer parfaitement à votre
              bateau, avec une qualité équivalente voire supérieure à celle
              d’origine. Nous utilisons exclusivement des matériaux haut de
              gamme : tissu Hypalon® Pennel & Flipo ORCA® et tissu PVC Melher
              VALMEX®, réputés pour leur résistance, leur durabilité et leur
              tenue dans le temps.
            </p>
          </div>
        </div>
        <div className="about-infos-entreprise-container">
          <div className="about-infos-entreprise">
            <div className="about-thermo">
              <img src="/thermo.png" alt="icône de thermomètre" />
              <h3>
                Nos ateliers à hygrométrie et température contrôlés nous
                permettent de garantir l’intégralité de nos interventions{" "}
              </h3>
            </div>
          </div>
        </div>
        <InfosEntreprise
          style={{ marginTop: "103px", marginBottom: "150px" }}
          styleInfos={{ gap: "103px" }}
        />
      </div>
      <Footer />
    </AboutStyled>
  );
}

const AboutStyled = styled.div`
  width: 100%;

  .about-navbar-background {
    width: 100%;
    height: 184px;
    background: url("/navbar-background.png");
    background-size: cover;
    background-position: center;
  }

  .about-container {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 75px;
  }

  .about-title-container {
    display: flex;
    flex-direction: column;
    gap: 17px;
    max-width: 916px;
  }

  .about-title {
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

  .about-wave {
    width: 148px;
  }

  .about-bateau {
    width: 78px;
  }

  .about-description {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 35px;

    p {
      font-size: 25px;
    }
  }

  .about-services {
    width: 100%;
    margin-top: 100px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 70px;
  }

  .about-card-services {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 20px;
    padding: 0 15.5px 91px 15.5px;
    max-width: 429px;

    h3 {
      font-weight: 700;
      font-size: 40px;
    }

    p {
      font-size: 22px;
      font-weight: 300;
      max-width: 374px;
    }
  }

  .about-infos-entreprise-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .about-infos-entreprise {
    max-width: 1319px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 103px;
  }

  .about-thermo {
    max-width: 1262px;
    padding: 45px 50px;
    border: 1px solid #56baf0;
    display: flex;
    align-items: center;
    gap: 50px;

    h3 {
      font-size: 40px;
      font-weight: 700;
    }
  }

  @media screen and (max-width: 972px) {
    .about-services {
      justify-content: center;
    }
  }

  @media screen and (max-width: 900px) {
    .about-title-container {
      padding: 0 18px;
    }
  }

  @media screen and (max-width: 530px) {
    .about-title h1 {
      font-size: 50px;
    }

    .about-card-services h3 {
      font-size: 35px;
    }

    .about-thermo h3 {
      font-size: 25px;
    }

    .about-thermo {
      flex-direction: column;
      text-align: center;
    }
  }

  @media screen and (max-width: 768px) {
    .about-navbar-background {
      height: 170px;
    }
  }
`;
