import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/image/logo512.png";
import Serach from "./SerachForm";

const Container = styled.header`
  display: flex;
  padding: 0 1rem;
  width: 100%;
  height: 50px;
  background-color: ${props => props.theme.darkColor};
`;

const Navigation = styled.nav`
  display: flex;
  flex: 1;
  align-items: center;
`;

const ELink = styled(Link)`
  font-size: 1.8rem;
  padding: 0 2rem;
  &:hover {
    color: ${props => props.theme.mainColor};
  }
  &:first-child {
    padding: 0 2rem 0 0;
  }
`;

const Image = styled.img`
  width: 3.5rem;
  height: 3.5rem;
`;

const SearchContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const UserContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
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
      <SearchContainer>
        <Serach />
      </SearchContainer>
      <UserContainer>
        {/* Todo UserContainer */}
      </UserContainer>
    </Container>
  );
};

export default Header;
