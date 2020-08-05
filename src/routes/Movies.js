import React, { useEffect, useState } from "react";
import moment from "moment";
import getDailyBoxOfficeList from "../components/getDailyBoxOfficeList";

const date = new Date();
const nowDate = moment(date);

const Movies = props => {
  const [isLoading, setIsloading] = useState(false);
  const [movies, setMovies] = useState([]);
  const getData = async () => {
    try {
      setIsloading(true);
      const data = await getDailyBoxOfficeList({ targetDate: nowDate });
      setMovies(data.dailyBoxOfficeList);
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(movies);
  return <div />;
};

export default Movies;
