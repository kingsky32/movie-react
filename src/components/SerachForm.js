import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import useInput from "../hooks/useInput";
import { withRouter } from "react-router-dom";

const Container = styled.form`
  display: flex;
  flex-flow: row nowrap;
  flex: 1;
  max-width: 40rem;
`;

const Input = styled.input`
  border: 0;
  height: 3.6rem;
  padding: .5rem 1rem;
  flex: 1;
  border-radius: .5rem 0 0 .5rem;
  color: ${props => props.theme.whiteColor};
  transition: border .1s ease-in, background-color .1s ease-in;
  background-color: ${props => props.theme.whiteColor}20;
  border: 2px solid transparent;
  &::placeholder {
    color: ${props => props.theme.whiteColor}80;
  }
  &:focus {
    background-color: ${props => props.theme.darkColor};
    border: 2px solid ${props => props.theme.mainColor};
  }
`;

const Icon = styled.button`
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 0 .5rem .5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: not-allowed;
  background-color: ${props => props.theme.whiteColor}15;
`;

const EFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${props => props.theme.whiteColor}50;
`;

export default withRouter(({ history }) => {
  const search = useInput("");
  const onSubmit = e => {
    e.preventDefault();
    history.push(`/search?term=${search.value}`);
  };
  return (
    <Container onSubmit={onSubmit}>
      <Input value={search.value} onChange={search.onChange} placeholder="검색" />
      <Icon>
        <EFontAwesomeIcon icon={faSearch} size="lg" />
      </Icon>
    </Container>
  );
});
