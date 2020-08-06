import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex: 1;
  padding: 0 .5rem;
`;

const LoadingPoster = styled.div`
  width: 100%;
  padding-bottom: 133%;
`;

const PosterContainer = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  background-color: ${props => props.theme.darkColor};
`;

const Title = styled.h5`
  display: block;
  font-size: 1.4rem;
  margin-bottom: .5rem;
  padding-bottom: 15%;
  background-color: ${props => props.theme.darkColor};
`;

const LoadingComponent = () => {
  return (
    <Container>
      <PosterContainer>
        <LoadingPoster />
      </PosterContainer>
      <Title />
    </Container>
  );
};

export default LoadingComponent;
