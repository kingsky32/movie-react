import React, { useEffect, useState } from "react";
import moment from "moment";
import getWeeklyBoxOfficeList from "../components/getWeeklyBoxOfficeList";
import MoviePoster from "../components/MoviePoster";
import MovieContainer from "../components/MovieContainer";

const date = new Date();
const nowDate = moment(date);

const DailyBoxOffice = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [weeklyBoxOfficeList, setWeeklyBoxOfficeList] = useState([]);

  const getData = async () => {
    try {
      setIsLoading(true);
      const data = await getWeeklyBoxOfficeList({ targetDate: nowDate });
      setWeeklyBoxOfficeList(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <MovieContainer
      title={weeklyBoxOfficeList.boxofficeType}
      component={
        !isLoading &&
        weeklyBoxOfficeList.weeklyBoxOfficeList.map((movie, idx) =>
          <MoviePoster key={idx} isLoading={isLoading} {...movie} />
        )
      }
    />
  );
};

export default DailyBoxOffice;
