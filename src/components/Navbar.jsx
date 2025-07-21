import styled from "styled-components";
import Menu from "./Menu";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <NavbarStyled>
      <div className="logo">
        <NavLink to={"/"}>
          <img src="/logo.png" />
        </NavLink>
      </div>

      <Menu />
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

  @media screen and (max-width: 1350px) {
    background: #fff;
    margin-top: 20px;
    width: 95%;
    justify-self: center;
    padding: 9px 30px;
    border-radius: 15px;

    .logo {
      width: 132px;
    }
  }
`;
