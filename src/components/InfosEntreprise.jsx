import styled from "styled-components";

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
              <img src="/mail.png" />
              <p>emeraude.nautisme@gmx.fr</p>
            </span>
            <span className="info mail">
              <img src="/telephone.png" />
              <p>06 25 93 96 69</p>
            </span>
            <span
              style={{ maxWidth: "382px", textAlign: "left" }}
              className="info adresse"
            >
              <img src="/ancre.png" />
              <p>
                38, Le Limonay <br />
                35350 St Méloir des Ondes
              </p>
            </span>
          </div>
        </div>
        <div className="facebook">
          <p>
            Retrouvez toutes nos actualités et réalisations sur notre page
            Facebook
          </p>
          <button>
            <img src="/facebook.png" />
            Emeraude Nautisme SAS
          </button>
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
