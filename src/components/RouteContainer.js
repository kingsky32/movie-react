import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  width: 100%;
`;

const Title = styled.h2``;

const RouteContainer = ({ title, component }) => {
  return (
    <Container>
      <Helmet>
        {title &&
          <title>
            {title}
          </title>}
      </Helmet>
      {title &&
        <Title>
          {title}
        </Title>}
      {component}
    </Container>
  );
};

export default RouteContainer;
