import React, { useEffect, useState } from "react";
import moment from "moment";
import getWeeklyBoxOfficeList from "../components/getWeeklyBoxOfficeList";
import MoviePoster from "../components/MoviePoster";
import MovieContainer from "../components/MovieContainer";

const date = new Date();
const nowDate = moment(date);

const DailyBoxOffice = () => {
  const [isLoading, setIsloading] = useState(true);
  const [weeklyBoxOfficeList, setWeeklyBoxOfficeList] = useState([]);

  const getData = async () => {
    try {
      setIsloading(true);
      const data = await getWeeklyBoxOfficeList({ targetDate: nowDate });
      setWeeklyBoxOfficeList(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    !isLoading &&
    <MovieContainer
      title={weeklyBoxOfficeList.boxofficeType}
      component={weeklyBoxOfficeList.weeklyBoxOfficeList.map((movie, idx) =>
        <MoviePoster key={idx} isLoading={isLoading} {...movie} />
      )}
    />
  );
};

export default DailyBoxOffice;
