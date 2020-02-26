import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  @import url("https://fonts.googleapis.com/css?family=Lato&display=swap");
  font-size: 28px;
  margin-bottom: 40px;
  color: #3d97b8;
  text-align: center;
  text-transform: uppercase;
  font-family: Lato;
`;

function Header() {
  return <Title>Name - Badge</Title>;
}

export default Header;
