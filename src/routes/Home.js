import React from "react";
import styled from "styled-components";
import DailyBoxOffice from "../components/DailyBoxOffice";
import WeeklyBoxOffice from "../components/WeeklyBoxOffice";

const Container = styled.div`
  flex: 1;
  width: 100%;
`;

const Movies = () => {
  return (
    <Container>
      <DailyBoxOffice />
      <WeeklyBoxOffice />
    </Container>
  );
};

export default Movies;
