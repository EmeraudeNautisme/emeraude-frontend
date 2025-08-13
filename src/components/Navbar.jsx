import styled from "styled-components";
import Menu from "./Menu";
import { NavLink } from "react-router-dom";
import { useMenu } from "../context/MenuMobileContext";

export default function Navbar() {
  const { handleOpen, open } = useMenu();

  return (
    <NavbarStyled>
      <div className="logo">
        <NavLink to={"/"}>
          <img src="/logo.png" alt="Logo de Emeraude Nautisme" />
        </NavLink>
      </div>
      <Menu />
      <div onClick={handleOpen} className="mobile-button">
        {!open ? (
          <img src="/mobile-menu.png" alt="ouvrir le menu" />
        ) : (
          <img src="/close-mobile-menu.png" alt="fermer le menu" />
        )}
        <p>{!open ? "Menu" : "Close"}</p>
      </div>
    </NavbarStyled>
  );
}

const NavbarStyled = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 200;
  width: 100%;
  padding: 34px 70px 0 70px;

  .logo {
    padding: 8px 11px;
    background: #fff;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .mobile-button {
    display: flex;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;

    p {
      font-size: 25px;
      color: #084887;
    }
  }

  @media screen and (max-width: 1350px) {
    background: #fff;
    margin-top: 20px;
    width: 95%;
    justify-self: center;
    padding: 9px 30px;
    border-radius: 15px;
    box-shadow: 0px 0px 34px 0px rgba(0, 0, 0, 0.1);

    .mobile-button {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
      cursor: pointer;
    }

    .logo {
      width: 132px;
    }
  }

  @media screen and (max-width: 768px) {
    .logo {
      padding: 0;
      img {
        width: 132px;
      }
    }
  }
`;
