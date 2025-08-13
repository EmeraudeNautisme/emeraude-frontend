import styled from "styled-components";
import InfosEntreprise from "../components/InfosEntreprise";
import Footer from "../components/Footer";
import axios from "axios";
import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${import.meta.env.VITE_STRAPI_URL}/api/messages`, {
        data: {
          email,
          telephone,
          message,
        },
      });

      setEmail("");
      setTelephone("");
      setMessage("");
      setSuccessMessage("Votre message a bien été envoyé");

      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContactStyled>
      <div className="contact-navbar-background"></div>
      <div className="contact-container">
        <div className="title">
          <img src="/mail-title.png" alt="icône mail" />
          <h1>Nous contacter</h1>
          <img src="/wave.png" alt="vague" />
          <p>
            N'hésitez pas à nous contacter via le formulaire ci-dessous. Nous
            nous engageons à vous répondre dans les plus brefs délais pour
            discuter de vos besoins et vous proposer des solutions adaptées.
            Votre satisfaction et la performance de votre bateau sont nos
            priorités.
          </p>
          <p className="conseil">
            <strong>Conseils et devis gratuits</strong>
          </p>
        </div>
        <div className="formulaire">
          <form onSubmit={handleSubmit}>
            <div className="inputs">
              <div className="input">
                <p>Votre e-mail*</p>
                <input
                  type="mail"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input">
                <p>Votre téléphone*</p>
                <input
                  type="tel"
                  required
                  value={telephone}
                  onChange={(e) => setTelephone(e.target.value)}
                />
              </div>
            </div>
            <div className="text-area">
              <p>Votre message*</p>
              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <span className="champs-obligatoires">*Champs obligatoires</span>
            <button>Envoyer</button>
            {successMessage.length > 0 && (
              <p className="success">{successMessage}</p>
            )}
          </form>
        </div>
        <InfosEntreprise
          style={{ marginBottom: "77px" }}
          styleInfos={{ gap: "77px" }}
        />
      </div>
      <Footer />
    </ContactStyled>
  );
}

const ContactStyled = styled.div`
  width: 100%;

  .contact-navbar-background {
    width: 100%;
    height: 184px;
    background: url("/navbar-background.png");
    background-size: cover;
    background-position: center;
  }

  .contact-container {
    width: 100%;
    margin-top: 75px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 77px;
  }

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 17px;

    h1 {
      font-family: "Rozha One";
      font-size: 65px;
      font-weight: 400;
      color: #084887;
    }

    p {
      max-width: 916px;
      font-size: 25px;
    }
  }

  .conseil {
    margin-top: 35px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 34px;
  }

  .formulaire {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    box-shadow: 0px 0px 34px 0px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    padding: 33px 100px 26px 101px;

    p {
      font-size: 25px;
    }
  }

  .inputs {
    display: flex;
    gap: 25px;
  }

  .input {
    display: flex;
    flex-direction: column;
    gap: 11px;
    align-items: center;

    input {
      all: unset;
      border: 1px solid #084887;
      border-radius: 15px;
      max-width: 432px;
      width: 432px;
      padding: 13px 26px;
      font-size: 22px;
      font-weight: 300;
    }
  }

  .text-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 11px;
    width: 100%;
    font-weight: 300;

    textarea {
      all: unset;
      border: 1px solid #084887;
      border-radius: 15px;
      font-size: 22px;
      width: 100%;
      height: 227px;
    }
  }

  .champs-obligatoires {
    width: 100%;
    font-size: 25px;
  }

  button {
    all: unset;
    display: flex;
    justify-content: center;
    width: 131px;
    align-self: center;
    border: 1px solid #084887;
    font-size: 25px;
    font-weight: 700;
    color: #084887;
    padding: 10px 20px;
    border-radius: 15px;
    cursor: pointer;
  }

  .success {
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 22px;
    font-weight: 400;
    color: #3ccf4d;
  }

  @media screen and (max-width: 1280px) {
    .inputs {
      flex-direction: column;
    }
  }

  @media screen and (max-width: 1024px) {
    .contact-container {
      padding: 0 18px;
    }
  }

  @media screen and (max-width: 768px) {
    .title h1 {
      font-size: 50px;
    }

    .inputs input {
      width: auto;
    }

    .formulaire {
      padding: 30px 16px;
      text-align: center;
    }

    .contact-navbar-background {
      height: 170px;
    }
  }
`;
