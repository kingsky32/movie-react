import React from "react";
import styled from "styled-components";
import DailyBoxOffice from "../components/DailyBoxOffice";

const Container = styled.div`
  flex: 1;
  width: 100%;
`;

const Movies = () => {
  return (
    <Container>
      <DailyBoxOffice />
    </Container>
  );
};

export default Movies;
