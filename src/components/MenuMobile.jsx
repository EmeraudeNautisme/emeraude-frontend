import styled from "styled-components";
import { useMenu } from "../context/MenuMobileContext";
import { NavLink } from "react-router-dom";

export default function MenuMobile() {
  const { open, setOpen } = useMenu();

  return (
    <MenuMobileStyled style={!open ? { display: "none" } : { display: "flex" }}>
      <ul>
        <li>
          <NavLink onClick={() => setOpen(false)} to={"/"}>
            Accueil
          </NavLink>
        </li>
        <span className="separator"></span>
        <li>
          <NavLink onClick={() => setOpen(false)} to={"/qui-sommes-nous"}>
            Qui sommes-nous
          </NavLink>
        </li>
        <span className="separator"></span>
        <li>
          <NavLink onClick={() => setOpen(false)} to={"/contact"}>
            Nous contacter
          </NavLink>
        </li>
      </ul>
    </MenuMobileStyled>
  );
}

const MenuMobileStyled = styled.div`
  width: 95%;
  background-color: #fff;
  position: fixed;
  z-index: 190;
  margin-top: 20px;
  display: none;
  border-radius: 0 0 15px 15px;

  @media screen and (max-width: 1350px) {
    display: flex;
    align-items: center;
    justify-self: center;
    margin-top: 145px;
    padding: 30px 15px;

    ul {
      display: flex;
      flex-direction: column;
      gap: 25px;
      font-size: 25px;
      width: 100%;

      li {
        list-style: none;
        color: #084887;
      }
    }
  }

  .separator {
    width: 100%;
    height: 1px;
    background: #084887;
  }

  a {
    color: #084887;
  }

  @media screen and (max-width: 768px) {
    margin-top: 10px;
  }
`;
