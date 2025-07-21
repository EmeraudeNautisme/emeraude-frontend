import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <MenuStyled>
      <ul>
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Accueil
          </NavLink>
        </li>

        <li>
          <NavLink
            to={"/qui-sommes-nous"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Qui sommes-nous ?
          </NavLink>
        </li>

        <li>
          <NavLink
            to={"/contact"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Nous contacter
          </NavLink>
        </li>
      </ul>
    </MenuStyled>
  );
}

const MenuStyled = styled.nav`
  background: #fff;
  padding: 10px 70px;
  border-radius: 15px;
  box-shadow: 0px 0px 34px 0px rgba(0, 0, 0, 0.1);

  ul {
    display: flex;
    gap: 115px;

    li {
      list-style: none;
      font-size: 25px;
      color: #084887;
      font-weight: 400;
    }
  }

  a {
    color: #084887;
  }

  a.active {
    font-weight: bold;
  }

  @media screen and (max-width: 1350px) {
    display: none;
  }
`;
