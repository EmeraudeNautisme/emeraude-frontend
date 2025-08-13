import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <FooterStyled>
      <img className="footer-wave-footer" src="/wave-footer.png" alt="vague" />
      <div className="footer-footer-container">
        <div className="footer-informations">
          <div className="footer-contact">
            <div className="footer-title">
              <h4>Informations de contact</h4>
              <img src="/wave.png" alt="vague" />
            </div>
            <div className="footer-infos">
              <p>
                <NavLink to={"mailto:emeraude.nautisme@gmx.fr"}>
                  emeraude.nautisme@gmx.fr
                </NavLink>
              </p>
              <p>
                <NavLink to={"tel:+33625939669"}>06 25 93 96 69</NavLink>
              </p>
            </div>
          </div>
          <div className="footer-entreprise">
            <div className="footer-title">
              <h4>Société Emeraude Nautisme</h4>
              <img src="/wave.png" alt="vague" />
            </div>
            <div className="footer-infos-entreprise">
              <p>
                <strong>SIRET :</strong> 949 746 028 00016
              </p>
              <p>
                <NavLink
                  target="_blank"
                  to={
                    "https://www.google.com/maps/place/38+Limonay,+35350+Saint-M%C3%A9loir-des-Ondes/@48.6154,-1.9057359,17z/data=!3m1!4b1!4m6!3m5!1s0x480e84ad2b64179b:0x1a1dfae138ed6b86!8m2!3d48.6154!4d-1.903161!16s%2Fg%2F11lmm5xqks?entry=ttu&g_ep=EgoyMDI1MDcyMi4wIKXMDSoASAFQAw%3D%3D"
                  }
                >
                  <strong>Adresse :</strong> 38, Le Limonay 35350 St Méloir des
                  Ondes
                </NavLink>
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

  a {
    color: #000;
  }

  @media screen and (max-width: 1024px) {
    .footer-wave-footer {
      margin-left: -135px;
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
