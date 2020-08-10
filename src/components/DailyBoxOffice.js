import React, { useEffect, useState } from "react";
import moment from "moment";
import getDailyBoxOfficeList from "../components/getDailyBoxOfficeList";
import MoviePoster from "../components/MoviePoster";
import MovieContainer from "../components/MovieContainer";

const date = new Date();
const nowDate = moment(date);

const DailyBoxOffice = () => {
  const [isLoading, setIsloading] = useState(true);
  const [dailyBoxOfficeList, setDailyBoxOfficeList] = useState([]);

  const getData = async () => {
    try {
      setIsloading(true);
      const data = await getDailyBoxOfficeList({ targetDate: nowDate });
      setDailyBoxOfficeList(data);
      setIsloading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <MovieContainer
      title={dailyBoxOfficeList.boxofficeType}
      component={
        !isLoading &&
        dailyBoxOfficeList.dailyBoxOfficeList.map((movie, idx) =>
          <MoviePoster key={idx} isLoading={isLoading} {...movie} />
        )
      }
    />
  );
};

export default DailyBoxOffice;
