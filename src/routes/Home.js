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
      const temp = [];
      data.dailyBoxOfficeList.map(({ movieNm }) =>
        getSearchMovie({ searchName: movieNm, display: 1 }).then(e => {
          temp.push(e[0]);
        })
      );
      setDailyBoxOfficeList(temp);
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  };

  console.log(dailyBoxOfficeList);

  useEffect(() => {
    getData();
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
