import React, { useEffect, useState } from "react";
import moment from "moment";
import getDailyBoxOfficeList from "../components/getDailyBoxOfficeList";
import getSearchMovie from "../components/getSearchMovie";
import MoviePoster from "../components/MoviePoster";
import MovieContainer from "../components/MovieContainer";

const date = new Date();

const nowDate = moment(date);

const DailyBoxOffice = () => {
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
  }, []);

  return (
    <MovieContainer
      title={boxofficeType}
      component={dailyBoxOfficeList.map((movie, idx) =>
        <MoviePoster key={idx} isLoading={isLoading} {...movie} />
      )}
    />
  );
};

export default DailyBoxOffice;
