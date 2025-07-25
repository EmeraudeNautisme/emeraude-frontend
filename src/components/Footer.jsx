import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <FooterStyled>
      <img className="footer-wave-footer" src="/wave-footer.png" />
      <div className="footer-footer-container">
        <div className="footer-informations">
          <div className="footer-contact">
            <div className="footer-title">
              <h4>Informations de contact</h4>
              <img src="/wave.png" />
            </div>
            <div className="footer-infos">
              <p>emeraude.nautisme@gmx.fr</p>
              <p>06 25 93 96 69</p>
            </div>
          </div>
          <div className="footer-entreprise">
            <div className="footer-title">
              <h4>Société Emeraude Nautisme</h4>
              <img src="/wave.png" />
            </div>
            <div className="footer-infos-entreprise">
              <p>
                <strong>SIRET :</strong> 949 746 028 00016
              </p>
              <p>
                <strong>Adresse :</strong> 38, Le Limonay 35350 St Méloir des
                Ondes
              </p>
            </div>
          </div>
        </div>
      </div>
    </FooterStyled>
  );
}

const FooterStyled = styled.div`
  width: 100%;
  overflow: hidden;

  .footer-footer-container {
    width: 100%;
    margin-top: -5px;
    display: flex;
    align-items: center;
    background: url("/background-footer.png");
    background-position: center;
    background-size: cover;
  }

  .footer-informations {
    display: flex;
    gap: 105px;
    padding: 20px 75px;
    background: #fff;
    margin-left: 214px;
    margin-top: 61px;
    margin-bottom: 74px;
    border-radius: 15px;
  }

  .footer-contact,
  .footer-entreprise {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .footer-title {
    display: flex;
    flex-direction: column;

    h4 {
      font-size: 25px;
      font-family: "Rozha One";
      font-weight: 400;
      color: #084887;
    }

    img {
      width: 88px;
    }
  }

  .footer-infos p {
    font-weight: bold;
    font-size: 22px;
  }

  .footer-infos-entreprise {
    font-size: 22px;
  }

  @media screen and (max-width: 1024px) {
    .footer-wave-footer {
      margin-left: -100px;
    }
  }

  @media screen and (max-width: 1400px) {
    .footer-footer-container {
      justify-content: center;
    }

    .footer-informations {
      margin: 51px 0;
    }
  }

  @media screen and (max-width: 1100px) {
    .footer-informations {
      flex-direction: column;
      gap: 35px;
      padding: 17px 24px;
    }

    .footer-footer-container {
      padding: 51px 35px;
    }
  }
`;
