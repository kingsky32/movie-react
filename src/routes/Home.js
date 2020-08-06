import React, { useEffect, useState } from "react";
import moment from "moment";
import getDailyBoxOfficeList from "../components/getDailyBoxOfficeList";
import getSearchMovie from "../components/getSearchMovie";
import styled from "styled-components";
import MoviePoster from "../components/MoviePoster";

const Container = styled.div``;

const Title = styled.h2``;

const date = new Date();

const nowDate = moment(date);

const Movies = () => {
  const [isLoading, setIsloading] = useState(true);
  const [dailyBoxOfficeList, setDailyBoxOfficeList] = useState([]);
  const [boxofficeType, setboxofficeType] = useState("");
  const getData = async () => {
    try {
      setIsloading(true);
      const data = await getDailyBoxOfficeList({ targetDate: nowDate });
      setboxofficeType(data.boxofficeType);
      return await Promise.all(
        data.dailyBoxOfficeList.map(({ movieNm }) =>
          getSearchMovie({ searchName: movieNm, display: 1 }).then(data => data[0])
        )
      );
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    getData().then(data => setDailyBoxOfficeList(dailyBoxOfficeList.concat(data)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    !isLoading &&
    dailyBoxOfficeList &&
    <Container>
      <Title>
        {boxofficeType}
      </Title>
      {dailyBoxOfficeList.map((movie, idx) => <MoviePoster key={idx} {...movie} />)}
    </Container>
  );
};

export default Movies;
