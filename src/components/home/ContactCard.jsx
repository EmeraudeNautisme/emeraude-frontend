import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function ContactCard() {
  return (
    <ContactCardStyled>
      <div className="informations-contact">
        <div className="title">
          <img src="/jumelles.png" alt="jumelles" />
          <img className="wave" src="/wave.png" alt="vague" />
          <h2>Nous contacter</h2>
        </div>
        <div className="entreprise">
          <strong>
            <p>Émeraude Nautisme SAS</p>
          </strong>
          <p>Spécialiste du bateau semi-rigide</p>
        </div>
        <div className="info telephone">
          <img src="telephone.png" alt="téléphone" />
          <NavLink to={"tel:+33625939669"}>
            <p>06 25 93 96 69</p>
          </NavLink>
        </div>
        <div className="info adresse">
          <img src="ancre.png" alt="ancre de bateau" />
          <NavLink
            target="_blank"
            to={
              "https://www.google.com/maps/place/38+Limonay,+35350+Saint-M%C3%A9loir-des-Ondes/@48.6154,-1.9057359,904m/data=!3m2!1e3!4b1!4m6!3m5!1s0x480e84ad2b64179b:0x1a1dfae138ed6b86!8m2!3d48.6154!4d-1.903161!16s%2Fg%2F11lmm5xqks?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D"
            }
          >
            <p>
              38, Le Limonay, <br />
              35350 St Méloir des Ondes
            </p>
          </NavLink>
        </div>
        <div className="info mail">
          <img src="mail.png" alt="icône mail" />
          <NavLink to={"mailto:emeraude.nautisme@gmx.fr"}>
            <p>emeraude.nautisme@gmx.fr</p>
          </NavLink>
        </div>
        <div className="cta">
          <NavLink to={"/contact"}>
            <button>Accéder au formulaire de contact</button>
          </NavLink>
          <p>Conseils et devis gratuits</p>
        </div>
      </div>
      <NavLink
        target="_blank"
        to={
          "https://www.facebook.com/people/Emeraude-Nautisme/100057038754228/"
        }
      >
        <img className="facebook-logo" src="/facebook.png" />
      </NavLink>
    </ContactCardStyled>
  );
}

const ContactCardStyled = styled.div`
  width: 745px;
  border-radius: 15px;
  box-shadow: 0px 0px 34px 0px rgba(0, 0, 0, 0.1);
  background: #fff;
  pointer-events: all;
  padding: 38px 0 22px 38px;
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 24px;

  .informations-contact {
    width: 426px;
    height: 562px;
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  .title {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    h2 {
      font-size: 55px;
      font-weight: 400;
      color: #084887;
      font-family: "Rozha One";
    }
    img {
      max-width: 100%;
      height: auto;
    }
  }

  .wave {
    width: 148px;
    height: 22px;
    margin-left: 20px;
  }

  .entreprise p {
    font-size: 25px;
  }

  .info {
    display: flex;
    align-items: center;
    gap: 6px;
    img {
      width: 28px;
      height: 28px;
      object-fit: contain;
    }
    p {
      font-size: 25px;
      font-weight: 500;
      font-family: "Quicksand";
      color: #000;
    }
  }

  .cta {
    display: flex;
    flex-direction: column;
    gap: 15px;

    button {
      all: unset;
      border: 1px solid #084887;
      border-radius: 15px;
      padding: 10px 12px;
      color: #084887;
      font-weight: 700;
      font-size: 25px;
      text-align: center;
      width: 100%;
      box-sizing: border-box;
    }

    p {
      font-weight: bold;
      font-size: 25px;
    }
  }

  .facebook-logo {
    position: absolute;
    bottom: 31.2px;
    right: 35px;
    width: 48px;
    height: 48px;
  }

  @media screen and (max-width: 1350px) {
    width: 100%;
    .informations-contact {
      width: 100%;
    }
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    padding: 24px 10px 70px 10px;
    min-width: 0;
    .informations-contact {
      width: 100%;
      height: auto;
      gap: 18px;
    }
    .title h2 {
      font-size: 36px;
    }
    .entreprise p,
    .info p,
    .cta button,
    .cta p {
      font-size: 18px;
    }
    .wave {
      width: 90px;
      height: 14px;
      margin-left: 10px;
    }
    .facebook-logo {
      left: 10px;
      bottom: 19.2px;
    }

    .cta button {
      font-size: 22px;
      display: flex;
      flex-wrap: wrap;
    }
    .cta p {
      font-size: 22px;
    }

    .facebook-logo {
      bottom: 10px;
      right: 20px;
    }
  }
`;
