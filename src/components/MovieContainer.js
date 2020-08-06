import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  width: 100%;
`;

const Title = styled.h4`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  padding: 0 .5rem;
`;

const ComponentContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const MovieContainer = ({ title, component }) => {
  return (
    <Container>
      <Title>
        {title}
      </Title>
      <ComponentContainer>
        {component}
      </ComponentContainer>
    </Container>
  );
};

export default MovieContainer;
