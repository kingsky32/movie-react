import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/image/logo512.png";

const Container = styled.header`
  display: flex;
  padding: 0 10px;
  width: 100%;
  height: 50px;
  background-color: ${props => props.theme.darkColor};
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
`;

const ELink = styled(Link)`
  font-size: 18px;
  padding: 0 20px;
  &:hover {
    color: ${props => props.theme.mainColor};
  }
  &:first-child {
    padding: 0 20px 0 0;
  }
`;

const Image = styled.img`
  width: 35px;
  height: 35px;
`;

const Header = () => {
  return (
    <Container>
      <Navigation>
        <ELink to="/">
          <Image src={logo} />
        </ELink>
        <ELink to="/movies">영화</ELink>
        <ELink to="/ticket">예매</ELink>
        <ELink to="/theaters">극장</ELink>
        <ELink to="/event">이벤트&amp;컬쳐</ELink>
      </Navigation>
    </Container>
  );
};

export default Header;
