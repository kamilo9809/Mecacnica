import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


// Estilos css
const NavbarContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 15px 30px;
  background: #F1F1F1;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  position: fixed;
  width: 100%;
  height: 5%;
  top: 0;
  left: 0;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 18px;
  font-weight: bold;
  transition: color 0.3s ease-in-out, transform 0.2s ease;

  &:hover {
    color: #ff9800;
    transform: scale(1.1);
  }
`;

// Navbar
const Navbar: React.FC = () => {
  return (
    <NavbarContainer>     
      <NavLink to="/inicio">Inicio</NavLink>
      <NavLink to="/servicio">Servicio</NavLink>
      <NavLink to="/nosotros">Nosotros</NavLink>
      <NavLink to="/contacto">Contacto</NavLink>
    </NavbarContainer>
  );
};


export default Navbar;