import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function InfosEntreprise({ style, className, styleInfos }) {
  return (
    <InfosEntrepriseStyled className={className} style={style}>
      <div className="infos" style={styleInfos}>
        <div className="infos-contact">
          <p>
            <strong>Émeraude Nautisme SAS</strong> <br /> Spécialiste du bateau
            semi-rigide
          </p>
          <div className="info-contact">
            <span className="info telephone">
              <img src="/mail.png" alt="mail" />
              <p>
                <NavLink to={"mailto:emeraude.nautisme@gmx.fr"}>
                  emeraude.nautisme@gmx.fr
                </NavLink>
              </p>
            </span>
            <span className="info mail">
              <img src="/telephone.png" alt="telephone" />
              <p>
                <NavLink to={"tel:+33625939669"}>06 25 93 96 69</NavLink>
              </p>
            </span>
            <span
              style={{ maxWidth: "382px", textAlign: "left" }}
              className="info adresse"
            >
              <img src="/ancre.png" alt="ancre" />
              <p>
                <NavLink
                  target="_blank"
                  to={
                    "https://www.google.com/maps/place/38+Limonay,+35350+Saint-M%C3%A9loir-des-Ondes/@48.6154,-1.9057359,17z/data=!3m1!4b1!4m6!3m5!1s0x480e84ad2b64179b:0x1a1dfae138ed6b86!8m2!3d48.6154!4d-1.903161!16s%2Fg%2F11lmm5xqks?entry=ttu&g_ep=EgoyMDI1MDcyMi4wIKXMDSoASAFQAw%3D%3D"
                  }
                >
                  38, Le Limonay <br />
                  35350 St Méloir des Ondes
                </NavLink>
              </p>
            </span>
          </div>
        </div>
        <div className="facebook">
          <p>
            Retrouvez toutes nos actualités et réalisations sur notre page
            Facebook
          </p>
          <NavLink
            target="_blank"
            to={
              "https://www.facebook.com/people/Emeraude-Nautisme/100057038754228/"
            }
          >
            <button>
              <img src="/facebook.png" alt="logo facebook" />
              Emeraude Nautisme SAS
            </button>
          </NavLink>
        </div>
      </div>
    </InfosEntrepriseStyled>
  );
}

const InfosEntrepriseStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: #000;
  }

  .infos {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
  }

  .infos-contact {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;

    p {
      font-size: 25px;
    }
  }

  .info-contact {
    display: flex;
    gap: 50px;
  }

  .info {
    display: flex;
    align-items: center;
    gap: 6px;

    p {
      font-size: 22px;
      font-family: "Quicksand";
      font-weight: 500;
    }
  }

  .facebook {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    p {
      font-weight: 400;
      font-size: 25px;
    }

    button {
      all: unset;
      border: 1px solid #084887;
      border-radius: 15px;
      padding: 10px 15px;
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      max-width: 370px;
    }
  }

  @media screen and (max-width: 1024px) {
    .info-contact {
      flex-direction: column;
      gap: 18px;
    }
  }
`;
