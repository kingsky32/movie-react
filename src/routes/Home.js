import React from "react";
import styled from "styled-components";
import DailyBoxOffice from "../components/DailyBoxOffice";
import WeeklyBoxOffice from "../components/WeeklyBoxOffice";
import MainSlide from "../components/MainSlide";

const Container = styled.div`
  flex: 1;
  width: 100%;
  padding-top: 2.5rem;
  > div:not(:last-child) {
    margin-bottom: 5rem;
  }
`;

const Movies = () => {
  return (
    <Container>
      <MainSlide
        slide={[
          { videoId: "919GruRSZzE" },
          { videoId: "fcueArgm800" },
          { videoId: "KKPUEANoHAo" },
          { videoId: "KrM3vS5sy2w" },
          { videoId: "n7LZA4Er7_g" }
        ]}
      />
      <DailyBoxOffice />
      <WeeklyBoxOffice />
    </Container>
  );
};

export default Movies;
